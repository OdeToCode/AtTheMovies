(function(){

    var app = angular.module("compiler", []);

    app.controller("mainController", function($scope){
        $scope.label = "Hello!";
    });

     app.directive("simple", function(){
        return {
            restrict: "EA",
            transclude:true,
            template:"<div>{{label}}<div ng-transclude></div></div>",
            compile: function(element, attributes){
                console.log("simple compile", arguments);
                return {
                    pre: function(scope, element, attributes, controller, transcludeFn){
                        console.log("Simple pre", arguments);
                    },
                    post: function(scope, element, attributes, controller, transcludeFn){
                        console.log("Simple post", arguments);
                    }
                }
            },
            controller: function($scope, $element){
                console.log("simple controller", arguments)
            }
        };
    });

    app.directive("inner", function(){
        return {
            restrict: "EA",
            transclude:true,
            template:"<div ng-transclude></div>",
            compile: function(element, attributes){
                console.log("inner compile", arguments);
                return {
                    pre: function(scope, element, attributes, controller, transcludeFn){
                        console.log("inner pre", arguments);
                    },
                    post: function(scope, element, attributes, controller, transcludeFn){
                        console.log("inner post", arguments);
                    }
                }
            }
        };
    });

    app.directive("nested", function(){
        return {
            restrict: "EA",
            template:"<div>nested</div>",
            compile: function(element, attributes){
                console.log("nested compile", arguments);
                return {
                    pre: function(scope, element, attributes, controller, transcludeFn){
                        console.log("nested pre", arguments);
                    },
                    post: function(scope, element, attributes, controller, transcludeFn){
                        console.log("nested post", arguments);
                    }
                }
            }
        };
    });

}());
