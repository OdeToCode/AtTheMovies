(function() {

    var module = angular.module("atTheMovies");
    module.controller("DetailController", function($scope, $routeParams, movieDataService) {

		var onMovie = function(movie){
    		$scope.movie = movie;
    	};

    	var onError = function(reason){
    		$scope.error.current = reason;
    	};

    	movieDataService
    		.getById($routeParams.id)
    		.then(onMovie, onError);
    });


}());