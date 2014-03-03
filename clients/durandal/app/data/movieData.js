define(function() {

    var movies = [];
    var movieApiUrl = "/api/movies";

    var getAll = function() {
        return $
            .get(movieApiUrl)
            .then(function(response) {
                movies = response;
                return movies;
            });
    };

    return {
        getAll: getAll
    };

});