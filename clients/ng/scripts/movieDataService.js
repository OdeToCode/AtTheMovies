(function(){

	var module = angular.module("atTheMovies");
	module.factory("movieDataService", function($http, $q, movieApiUrl){

		var movies = [];

		var getAll = function(){
			return $http.get(movieApiUrl)
					 	.then(function(response){
				 			movies = response.data;
				 			return movies;
				 		});			
		};

		var getById = function(id){
			for(var i = 0; i < movies.length; i++) {
				if(movies[i].id === id){
					return $q.when(movie);
				}
			}
			return $http.get(movieApiUrl + "/" + id)
						.then(function(response){
							movies.push(response.data);
							return response.data;
						});
		};

		return {
			getAll: getAll,
			getById: getById
		};
	});

}());