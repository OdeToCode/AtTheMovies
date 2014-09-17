(function () {

    var app = angular.module("app", []);

    app.value("Physics", Physics);

    app.factory("world", function (Physics) {
        var world = Physics();
        world.on("step", function () {
            world.render();
        });
        return world;
    });

    app.factory("ticker", function (Physics, world) {
        var start = function () {
            Physics.util.ticker.on(function (time) {
                world.step(time);
            });
            Physics.util.ticker.start()
        };

        return {
            start: start
        };
    });

    app.directive("physicsCanvas", function (Physics, world, ticker) {
        return {
            restrict: "E",
            transclude: true,
            template: "<canvas width={{width}} height={{height}}></canvas><div ng-transclude></div>",
            scope: {
                width: "@",
                height: "@"
            },
            link: function (scope, element) {
                var canvas = element.find("canvas");
                var renderer = Physics.renderer('canvas', {
                    el: canvas[0],
                    width: scope.width,
                    height: scope.height
                });
                world.add(renderer);
                canvas.attr("style", "");
                ticker.start();
            }
        };
    });

    app.directive("physicsEdgeDetection", function (Physics, world) {
        return {
            restrict: "E",
            scope: {
                minX: "@",
                minY: "@",
                maxX: "@",
                maxY: "@",
                restitution: "@"
            },
            link: function (scope) {
                var bounds = Physics.aabb(parseInt(scope.minX),
                    parseInt(scope.minY),
                    parseInt(scope.maxX),
                    parseInt(scope.maxY));
                world.add(Physics.behavior('edge-collision-detection', {
                    aabb: bounds,
                    restitution: parseFloat(scope.restitution)
                }));
            }
        };
    });

    app.directive("physicsBehavior", function (Physics, world) {
        return {
            restrict: "E",
            scope: {
                name: "@"
            },
            link: function (scope) {
                world.add(Physics.behavior(scope.name));
            }
        };
    });

    app.directive("physicsBody", function (Physics, world) {
        return {
            restrict: "E",
            scope: {
                options: "=",
                body: "=",
                type: "@"
            },
            link: function (scope) {
                scope.body = Physics.body(scope.type, scope.options);
                world.add(scope.body);
            }
        };
    });

    app.controller("mainController", function (Physics, world) {
        var model = this;

        model.box1 = null;
        model.box2 = null;

        model.kick = function () {
            model.box1.applyForce({x: 0.1, y: -0.2});
            model.box2.applyForce({x: -0.1, y: -0.2});
        };

        model.grow = function () {
            model.box1.geometry.width *= 1.5;
            model.box1.geometry.height *= 1.5;
            model.box1.mass *= 1.5;
            model.box1.view = null;
            model.box1.recalc();
        };

        var square = Physics.body('rectangle', {
            x: 250,
            y: 250,
            vx: 0.01,
            width: 50,
            height: 50
        });
        world.add(square);

        world.add(Physics.body('convex-polygon', {
            x: 250,
            y: 50,
            vx: 0.05,
            vertices: [
                {x: 0, y: 80},
                {x: 60, y: 40},
                {x: 60, y: -40},
                {x: 0, y: -80}
            ]
        }));

        world.add(Physics.body('convex-polygon', {
            x: 400,
            y: 200,
            vx: -0.02,
            vertices: [
                {x: 0, y: 80},
                {x: 80, y: 0},
                {x: 0, y: -80},
                {x: -30, y: -30},
                {x: -30, y: 30}
            ]
        }));
    });

}());
