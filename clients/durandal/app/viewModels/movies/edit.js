define(function(require) {

    var router = require("plugins/router");
    var dataService = require("data/movieData");

    var viewModel = {
        movie: null,
        activate: function(id) {
            dataService.getById(id).then(function(movie) {
                viewModel.movie = movie;
            });
        },
        save: function() {
            dataService.update(viewModel.movie).then(function() {
                router.navigate("#/detail/" + viewModel.movie.id);
            });
        },
        cancel: function() {
            router.navigate("#/");
        }
    };

    return viewModel;
});