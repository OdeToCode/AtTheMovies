(function(){

	var module = angular.module("atTheMovies");
	module.factory("movieDataService", function($http, movieApiUrl){

		var movies = [];

		var getAll = function(){
			return $http.get(movieApiUrl)
					 	.then(function(response){
				 			movies = response.data;
				 			return movies;
				 		});			
		};

		return {
			getAll: getAll
		};
	});

}());