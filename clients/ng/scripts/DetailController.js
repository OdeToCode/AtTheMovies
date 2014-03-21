(function() {

    var module = angular.module("atTheMovies");
    module.controller("DetailController", function($scope, $routeParams, Movies) {

        var onMovie = function(movie) {
            $scope.movie = movie;
        };

        var onError = function(reason) {
            $scope.error.current = reason;
        };

        Movies.get({
            id: $routeParams.id
        }, onMovie, onError);
    });

}());