define(function() {

    var movieApiUrl = "/api/movies";

    var getAll = function() {
        return $.get(movieApiUrl);
    };

    var getById = function(id) {
        return $.get(movieApiUrl + "/" + id);
    };

    var update = function(movie) {
        return ajax(movieApiUrl, "put", JSON.stringify(movie));
    };

    var create = function(movie) {
        return ajax(movieApiUrl, "post", JSON.stringify(movie));
    };

    var ajax = function(url, method, data) {
        return $.ajax({
            url: url,
            method: method,
            data: data,
            contentType: "application/json"
        });
    };

    return {
        getAll: getAll,
        getById: getById,
        update: update,
        create: create
    };

});