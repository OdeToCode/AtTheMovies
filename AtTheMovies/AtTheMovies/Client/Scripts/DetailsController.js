(function (app) {

    var DetailsController = function ($scope, $routeParams, Movie) {
        
        $scope.movie = Movie.query({ id: $routeParams.id });
    };
    DetailsController.$inject = ["$scope", "$routeParams", "Movie"];

    app.controller("DetailsController", DetailsController);

}(angular.module("AtTheMovies")));