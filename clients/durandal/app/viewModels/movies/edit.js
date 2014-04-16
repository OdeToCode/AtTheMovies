define(function(require) {

    var router = require("plugins/router");
    var dataService = require("data/movieData");

    var viewModel = {
        movie: null,
        errors: [],
        activate: function(id) {
            dataService.getById(id).then(function(movie) {
                viewModel.movie = movie;
            });
        },
        save: function() {
            viewModel.validate();
            if(!viewModel.errors){
                dataService.update(viewModel.movie).then(function() {
                    router.navigate("#/detail/" + viewModel.movie.id);
                });
            }
        },
        cancel: function() {
            router.navigate("#/");
        },
        validate: function(){
            viewModel.errors = [];    
            if(viewModel.movie.title.length < 3){
                viewModel.errors.push("The title must contain at least 3 characters");
            }
        }
    };

    return viewModel;
});