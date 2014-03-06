(function() {

    var module = angular.module("atTheMovies");
    module.controller("ListController", function($scope, movieData) {

        var onError = function(reason) {
            $scope.error.current = reason;
        };

        $scope.movies = [];

        movieData
            .getAll()
            .then(function(movies) {
                $scope.movies = movies;
            }).
        catch (onError);
    });

}());