(function(){

    var app = angular.module("compiler", []);

    app.controller("mainController", function($scope){

        $scope.doSomething = function(){
          $scope.message = "did something";
        };

    });

    // works
//     app.directive("otcDynamic", function(){
//
//        return {
//            template:"<button ng-click='doSomething()'>Click me!</div>"
//        };
//
//    });


    // doesn't work
//    app.directive("otcDynamic", function(){
//
//        return {
//            link: function(scope, element){
//                element.html("<button ng-click='doSomething()'>Click me!</button>");
//            }
//        };
//
//    });

    // works
    app.directive("otcDynamic", function($compile){

        return {
            link: function(scope, element){

//                var html = "<button ng-click='doSomething()'>Click me!</button>";
//                var linkFn = $compile(html)(scope);
//                element.append(linkFn);

                // or

                var html = "<button ng-click='doSomething()'>Click me!</button>";
                element.html(html);
                $compile(element.contents())(scope);
            }
        };

    });

}());
