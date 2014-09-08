(function(){

    var app = angular.module("app", ["ngSanitize"]);

    app.controller("mainController", function($window){

        var main = this;
        main.links = [
            "<a href='http://google.com'>Google</a>",
            "<a href='http://odetocode.com'>OdeToCode</a>",
            "<a href='http://twitter.com'>Twitter</a>",
        ];


        main.links = [
            "<a ng-click='main.goTo(\"http://google.com\")'>Google</a>",
            "<a ng-click='main.goTo(\"http://odetocode.com\")'>OdeToCode</a>",
            "<a ng-click='main.goTo(\"http://twitter.com\")'>Twitter</a>"
        ];

        main.goTo = function(link){
            console.log(link);
            $window.location = link;
        };

    });

    app.directive("compileHtml", function($parse, $sce, $compile){
       return {
            restrict: "A",
            link: function(scope, element, attributes){

            var expression = $parse(attributes.compileHtml);

            var getResult = function(){
              return expression(scope);
            };

            $scope.watch(getResult, function(newValue){
                 
            });

//               var parsed = $parse($sce.trustAsHtml(attributes.compileHtml));
//                console.log(parsed(scope));

//               var getValue = function() {
//                   return (parsed(scope) || '');
//               };
//
//               scope.$watch(getValue, function (newValue) {
//                   //var html = $sce.getTrustedHtml(newValue);
//                   var html = newValue;
//                   console.log(html);
//                   var linkFn = $compile(html);
//                   element.append(linkFn(scope));
//               });
           }
       }
    });

}());