(function() {
    "use strict";
    
    var module = angular.module("psMovies");
    
    module.component("movieApp", {
        templateUrl: "/ps-movies/movie-app.component.html",
        $routeConfig: [
            { path: "/list", component:"movieList", name: "List" },
            { path: "/about", component: "about", name: "About" },
            { path: "/details/:id/...", component: "movieDetails", name:"Details"},
            { path: "/**", redirectTo: ["List", ""] }
        ]                   
    });
    
    module.component("about", {
       template: "About us ..." 
    });
    
}());