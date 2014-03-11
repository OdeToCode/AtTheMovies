define(function() {

    var movieApiUrl = "/api/movies";

    var getAll = function() {
        return $.get(movieApiUrl);                
    };

    var getById = function(id){
        return $.get(movieApiUrl + "/" + id);
    };

    return {
        getAll: getAll,
        getById: getById
    };

});