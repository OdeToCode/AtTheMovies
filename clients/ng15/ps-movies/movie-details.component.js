(function() {
    "use strict";

    var module = angular.module("psMovies");
    
    module.component("movieDetails",{
        templateUrl: "/ps-movies/movie-details.component.html",
        $routeConfig: [
            { path: "/overview", component:"movieOverview", name: "Overview" },
            { path: "/cast", component:"movieCast", name: "Cast"},
            { path: "/director", component:"movieDirector", name: "Director"}            
        ],        
        controllerAs: "model",
        controller: function() {
            var model = this;
            
            model.$routerOnActivate = function(next) {
                model.id = next.params.id;
            };
        }
    });
    
    module.component("movieOverview", {
       template: "This is the overview" 
    });

    module.component("movieCast", {
       template: "This is info about the cast" 
    });
    
    module.component("movieDirector", {
       template: "This is info about the director" 
    });

}());