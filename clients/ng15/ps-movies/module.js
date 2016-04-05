(function() {
    "use strict";

    /*  var module = angular.module("psMovies", ["ngRoute"]);
    
       module.config(function($routeProvider) {
       
       $routeProvider
            .when("/list", { template: "<movie-list></movie-list>"})
            .otherwise({ redirectTo: "/list"});
        
    });
  */  

    var module = angular.module("psMovies", ["ngComponentRouter"]);
    module.value("$routerRootComponent", "movieApp");

}());