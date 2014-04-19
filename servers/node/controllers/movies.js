var dataSource = require("../data/movieDataSource");

exports.getAllMovies = function(request, response) {
    var movies = dataSource.getAll();
    response.send(movies);
};

exports.getMovieById = function(request, response) {
    var movie = dataSource.getById(request.params.id);
    response.send(movie);
};

exports.getMovieByIdSlowly = function(request, response) {
    var movie = dataSource.getById(request.params.id);
    setTimeout(function(){
        response.send(movie);
    }, 3000);
};

exports.updateMovie = function(request, response) {
    var movie = request.body;
    dataSource.update(movie);
    response.send(movie);
};

exports.createMovie = function(request, response) {
    var movie = request.body;
    dataSource.create(movie);
    response.status(201).send(movie);
};

exports.deleteMovie = function(request, response) {
    var removed = dataSource.delete(request.params.id);
    response.status(200).send(removed);
};

