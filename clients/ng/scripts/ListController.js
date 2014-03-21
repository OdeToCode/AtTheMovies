(function() {

    var module = angular.module("atTheMovies");
    module.controller("ListController", function($scope, Movies) {

        var onMovies = function(movies) {
            $scope.movies = movies;
        };

        var onError = function(reason) {
            $scope.error.current = reason;
        };

        Movies.query(onMovies, onError);

    });

}());