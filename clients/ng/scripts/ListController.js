(function() {

    var module = angular.module("atTheMovies");
    module.controller("ListController", function($scope, movieDataService) {
       
    	var onMovies = function(movies){
    		$scope.movies = movies;
    	};

    	var onError = function(reason){
    		$scope.error.current = reason;
    	};

       movieDataService.getAll().then(onMovies, onError);
       
    });

}());