(function(){

    var app = angular.module("app", ["ngSanitize"]);

    app.config(function($provide){
        $provide.decorator("$sanitize", function($delegate, $log){
            return function(text, target){

                var result = $delegate(text, target);
                $log.info("$sanitize input: " + text);
                $log.info("$sanitize output: " + result);

                return result;
            };
        });
    });

    app.controller("mainController", function($sce, $log) {

        var main = this;
        main.links = [
            "<a ng-click='main.go(\"google\")' href=''>Google</a>",
            "<a ng-click='main.go(\"otc\")' href=''>OdeToCode</a>",
            "<a ng-click='main.go(\"twitter\")' href=''>Twitter</a>"
        ];

        for (var i = 0; i < main.links.length; i++) {
            main.links[i] = $sce.trustAsHtml(main.links[i]);
        }

        main.go = function(name){
           $log.info("Goto: " + name);
            return false;
        };
    });

    app.directive("compileHtml", function($parse, $sce, $compile) {
        return {
            restrict: "A",
            link: function (scope, element, attributes) {

                var expression = $sce.parseAsHtml(attributes.compileHtml);

                var getResult = function () {
                    return expression(scope);
                };

                scope.$watch(getResult, function (newValue) {
                    var linker = $compile(newValue);
                    element.append(linker(scope));
                });
            }
        }
    });

}());