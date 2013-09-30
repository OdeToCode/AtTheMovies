(function (app) {

    var ListController = function ($scope, Movie) {

        $scope.movies = Movie.query();

        $scope.create = function () {
            $scope.movie = new Movie();
            $scope.isEditing = true;
        };

        $scope.cancel = function() {
            $scope.isEditing = false;
        };

        $scope.delete = function(movie) {
            movie.$delete().then(function() {
                $scope.movies = Movie.query();
            });

        };

        $scope.save = function() {
            $scope.movie.$save();
            $scope.isEditing = false;
            $scope.movies.push($scope.movie);            
        };
    };
    ListController.$inject = ["$scope", "Movie"];

    app.controller("ListController", ListController);

}(angular.module("AtTheMovies")));