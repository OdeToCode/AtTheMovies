define(function(require) {

    var data = require("data/movieData");

    var viewModel = {

        movies: [],
        activate: function() {
            data.getAll().then(function(newMovies) {
                viewModel.movies = newMovies;
            });
        }

    };

    return viewModel;

});