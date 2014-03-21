var dataSource = require("../data/movieDataSource");

exports.getAllMovies = function(request, response) {
    var movies = dataSource.getAll();
    response.send(movies);
};

exports.getMovieById = function(request, response) {
    var movie = dataSource.getById(request.params.id);
    response.send(movie);
};

exports.updateMovie = function(request, response) {
    var movie = request.body;
    dataSource.update(movie);
    response.send();
};

exports.createMovie = function(request, response) {

};

exports.deleteMovie = function(request, response) {

};