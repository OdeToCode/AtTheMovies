(function(){

    var app = angular.module("compiler", []);

    app.controller("mainController", function($scope){

    });

    app.directive("otcDynamic", function(){

        return {
            template:"<div ng-click='doSomething()'>Hello!</div>"
        };

    });

}());
