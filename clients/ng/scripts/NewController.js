(function() {

    var module = angular.module("atTheMovies");

    module.controller("NewController", function($scope, $location, Movies) {

        var onError = function(reason) {
            $scope.error = reason;
        };

        var goToDetail = function() {
            $location.path("/detail/" + $scope.movie.id);
        };

        $scope.movie = new Movies();

        $scope.save = function() {
            $scope.movie.$create().then(goToDetail, onError);
        };

    });

}());