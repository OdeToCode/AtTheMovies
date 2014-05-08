(function(){

    var app = angular.module("compiler", []);

    app.controller("mainController", function($scope){

        $scope.label = "Please click";
        $scope.doSomething = function(){
          $scope.message = "Clicked!";
        };
    });

//     app.directive("otcDynamic", function(){
//        return {
//            template:"<button ng-click='doSomething()'>{{label}}</div>"
//        };
//    });


    // doesn't work
//    app.directive("otcDynamic", function(){
//        return {
//            link: function(scope, element){
//                element.html("<button ng-click='doSomething()'>{{label}}</button>");
//            }
//        };
//    });

//    does work
//    app.directive("otcDynamic", function($compile) {
//        return{
//            link: function(scope, element){
//                var template = "<button ng-click='doSomething()'>{{label}}</button>";
//                var linkFn = $compile(template);
//                var contents = linkFn(scope);
//                element.append(contents);
//            }
//        }
//    });

    // works inside a jq event (requires $apply)
    app.directive("otcDynamic", function($compile) {

        var template = "<button ng-click='doSomething()'>{{label}}</button>";

        return{
            link: function(scope, element){
                element.on("click", function() {
                    scope.$apply(function() {
                        var content = $compile(template)(scope);
                        element.append(content);
                   })
                });
            }
        }
    });

}());
