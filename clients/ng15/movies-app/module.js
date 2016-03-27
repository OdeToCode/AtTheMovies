(function() {
    
    var module = angular.module("atTheMovies", ["ngRoute"]);
    
    module.config(function($routeProvider) {
       
       $routeProvider
        .when("/", {
              template: "<movies-app></movies-app>" 
        })
        .otherwise({
            redirectTo: "/"
        });
       
        
    });
    
}());