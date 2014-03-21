define(function() {

    var movieApiUrl = "/api/movies";

    var getAll = function() {
        return $.get(movieApiUrl);
    };

    var getById = function(id) {
        return $.get(movieApiUrl + "/" + id);
    };

    var update = function(movie) {
        return $.ajax({
            method: "put",
            url: movieApiUrl,
            data: JSON.stringify(movie),
            contentType: "application/json"
        });
    };

    return {
        getAll: getAll,
        getById: getById,
        update: update
    };

});