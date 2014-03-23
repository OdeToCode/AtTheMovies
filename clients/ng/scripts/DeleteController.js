(function() {

    var module = angular.module("atTheMovies");

    module.controller("DeleteController", function($scope, $routeParams, $location, Movies) {
        var onMovie = function(movie) {
            $scope.movie = movie;
        };

        var onError = function(reason) {
            $scope.error = reason;
        };

        var onDeleted = function() {
            goToList();
        };

        var goToList = function() {
            $location.path("/list" + $scope.movie.id);
        };

        var remove = function() {
            $scope.movie.$delete().then(onDeleted, onError);
        };

        var cancel = function() {
            goToList();
        };

        $scope.remove = remove;
        $scope.cancel = cancel;

        Movies.get({
            id: $routeParams.id
        }, onMovie, onError);
    });

}());