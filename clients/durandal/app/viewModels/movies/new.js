define(function(require) {

    var router = require("plugins/router");
    var dataService = require("data/movieData");

    var viewModel = {
        movie: null,
        activate: function() {
            viewModel.movie = {
                title: "",
                rating: "",
                year: "",
                id: ""
            };
        },
        save: function() {
            dataService.create(viewModel.movie).then(function(newMovie) {
                router.navigate("#/detail/" + newMovie.id);
            });
        },
        cancel: function() {
            router.navigate("#/");
        }
    };

    return viewModel;
});