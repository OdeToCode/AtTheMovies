(function () {

    var module = angular.module("atTheMovies");

    function fetchMovies($http) {
        return $http.get("/movies.json")
            .then(function (response) {
                return response.data;
            });
    }

    function controller($http) {
        var model = this;

        model.$onInit = function () {
            fetchMovies($http).then(function (movies) {
                    model.movies = movies;
                });
        };
        
        model.upRating = function(movie) {
            if(movie.rating < 5) {
                movie.rating += 1;
            } 
            else {
                movie.rating = 1;
            }            
        }
        
        model.downRating = function(movie) {
            if(movie.rating > 1) {
                movie.rating -= 1;
            }
            else{
                movie.rating = 5;
            }
        }
    }

    module.component("moviesApp", {
        templateUrl: "/movies-app/movies-app.component.html",
        controllerAs: "model",
        controller: ["$http", controller]
    });

} ());