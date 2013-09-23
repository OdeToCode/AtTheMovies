(function (app) {

    var DetailsController = function ($scope, $routeParams, Movie) {
        
        $scope.movie = Movie.find({ id: $routeParams.id });

        $scope.edit = function () {
            $scope.isEditing = true;
        };

        $scope.save = function () {
            $scope.movie.$update();
            $scope.isEditing = false;
        };

        $scope.cancel = function () {
            $scope.isEditing = false;
        };

    };
    DetailsController.$inject = ["$scope", "$routeParams", "Movie"];

    app.controller("DetailsController", DetailsController);

}(angular.module("AtTheMovies")));