define(function(require) {
    var dataService = require("data/movieData");
    var viewModel = {

        movies: [],

        activate: function() {
            dataService.getAll().then(function(newMovies) {
                viewModel.movies = newMovies;
            });
        }
    };
    return viewModel;
});