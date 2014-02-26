var _ = require("lodash");
var Movie = require("../models/Movie");

var movies = [ ];

movies.push(new Movie(1, "Star Wars", 5, 1979));
movies.push(new Movie(2, "Boxen Day", 1, 1998));
movies.push(new Movie(3, "Ugla Ugla",  3, 2001));

var getAll = function(){	
	return movies;
};

var getById = function(id){
	var result = _.first(movies, {id:id});
	return result;
};

var update = function(movie){
	var index = _.findIndex(movies, {id:id});
	movies[index] = movie;
};

var create = function(movie){
	movies.push(movie);
};

var remove = function(movie){
	_.remove(movies, { id: movie.id});
};

module.exports = {
	getAll: getAll,
	getById: getById,
	update: update,
	create: create,
	delete: remove
};