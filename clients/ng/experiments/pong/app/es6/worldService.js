(function(app){

    app.factory("world", function (Physics) {
        var world = Physics();
        world.on("step", function () {
            world.render();
        });
        return world;
    });

}(angular.module("pong")));