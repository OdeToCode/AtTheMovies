var _ = require("lodash");
var Movie = require("../models/Movie");

var movies = [];

movies.push(new Movie(1, "Star Wars", 5, 1979));
movies.push(new Movie(2, "Boxen Day", 1, 1998));
movies.push(new Movie(3, "Ugla Ugla", 3, 2001));

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
        id: updatedMovie.id
    });

    if (movie) {
        movie.title = updatedMovie.title;
        movie.rating = updatedMovie.rating;
        movie.year = updatedMovie.year;
    }
};

var create = function(movie) {
    //movies.push(movie);
};

var remove = function(movie) {
    //_.remove(movies, { id: movie.id});
};

module.exports = {
    getAll: getAll,
    getById: getById,
    update: update,
    create: create,
    delete: remove
};