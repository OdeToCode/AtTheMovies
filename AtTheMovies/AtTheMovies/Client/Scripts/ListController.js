(function (app) {

    var ListController = function ($scope, Movie) {

        $scope.movies = Movie.query();

    };
    ListController.$inject = ["$scope", "Movie"];

    app.controller("ListController", ListController);

}(angular.module("AtTheMovies")));