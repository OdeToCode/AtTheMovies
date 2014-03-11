define(function(require){

	var dataService = require("data/movieData");

	var viewModel = {
		movie: null,
		activate: function(id){
			dataService.getById(id).then(function(movie) {
                viewModel.movie = movie;
            });
		}
	};

	return viewModel;
});