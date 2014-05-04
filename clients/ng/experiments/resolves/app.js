/**
 * Created by Scott on 5/4/2014.
 */
(function(){

    var app = angular.module("app", ["ngRoute"]);

    app.config(function($routeProvider){

        $routeProvider
            .when("/1", {templateUrl:"view1.html", controller:"Controller1"})
            .when("/2", {templateUrl:"view2.html", controller:"Controller2"})
            .otherwise({redirectTo: "/1"});
    });

    app.controller("Controller1", function($scope){

    });

    app.controller("Controller2", function($scope){

    });

    app.factory("widgetService", function($q){

        var getWidget = function(){

        };

        var getWidgetMama = function(){

        };

        return {
            method1:getWidget,
            method2:getWidgetMama
        }

    });

}());
