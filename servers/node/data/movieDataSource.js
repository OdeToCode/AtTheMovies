var _ = require("lodash");
var Movie = require("../models/Movie");

var id = 4;
var movies = [];

movies.push(new Movie(1, "Star Wars", 5, 1977));
movies.push(new Movie(2, "Casablanca", 4, 1942));
movies.push(new Movie(3, "Jurassic Park", 3, 1993));

var getAll = function() {
    return movies;
};

var getById = function(id) {
    var result = _.find(movies, {
        id: parseInt(id)
    });
    return result;
};

var update = function(updatedMovie) {

    var movie = _.find(movies, {
        id: parseInt(updatedMovie.id)
    });

    if (movie) {
        movie.title = updatedMovie.title;
        movie.rating = updatedMovie.rating;
        movie.year = updatedMovie.year;
    } else {
        throw "Movie not found";
    }
};

var create = function(movie) {
    movie.id = id++;
    movies.push(movie);
    return movie;
};

var remove = function(id) {
    var removed = _.remove(movies, {
        id: parseInt(id)
    });
    return _.first(removed);
};

module.exports = {
    getAll: getAll,
    getById: getById,
    update: update,
    create: create,
    delete: remove
};