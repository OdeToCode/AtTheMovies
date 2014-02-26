(function(){

	var ListController = function($scope, movieData) {
		
		var onError = function(reason){
			$scope.error = reason;
		};

		$scope.movies = [];

		movieData
			.getAll()
			.then(function(movies){
				$scope.movies = movies;
			}).catch(onError);
	};

	var module = angular.module("atTheMovies");
	module.controller("ListController", ListController);

}());