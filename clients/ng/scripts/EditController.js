(function() {

    var module = angular.module("atTheMovies");

    module.controller("EditController", function($scope, $routeParams, $location, Movies) {

        var onMovie = function(movie) {
            $scope.movie = movie;
        };

        var onError = function(reason) {
            $scope.error = reason;
        };

        var goToDetail = function() {
            $location.path("/detail/" + $scope.movie.id);
        };

        Movies.get({
            id: $routeParams.id
        }, onMovie, onError);

        $scope.save = function() {
            $scope.movie.$save(goToDetail, onError);
        };

    });

}());