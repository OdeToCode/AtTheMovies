(function() {
    "use strict";

    var module = angular.module("psMovies");
    
    module.component("movieDetails",{
        templateUrl: "/ps-movies/movie-details.component.html",
        // $canActivate: function($timeout) {
        //     return $timeout(function() {
        //         return true;
        //     }, 2000);
        // },
        controllerAs: "model",
        controller: function() {
            var model = this;
            
            model.$routerOnActivate = function(next) {
                model.id = next.params.id;
            };
        }
    });

}());