(function() {

    var module = angular.module("atTheMovies");
    module.controller("ListController", function($scope, movies) {
       
       $scope.movies = movies; 
       
    });

}());