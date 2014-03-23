define(function(require) {

    var dataService = require("data/movieData");
    var router = require("plugins/router");

    var viewModel = {
        movie: null,
        activate: function(id) {
            dataService.getById(id).then(function(movie) {
                viewModel.movie = movie;
            });
        },
        remove: function() {
            dataService.remove(viewModel.movie).then(function() {
                router.navigate("#/");
            });
        },
        cancel: function() {
            router.navigate("#/");
        }
    };

    return viewModel;
});