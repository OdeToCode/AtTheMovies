(function() {

    var module = angular.module("atTheMovies");
    module.factory("Movies", function($resource, movieApiUrl) {
        return $resource(movieApiUrl + "/:id", {}, {
            "save": {
                method: "PUT"
            },
            "create": {
                method: "POST"
            },
            "delete": {
                method: "DELETE",
                params: {
                    id: "@id"
                },
                transformResponse: function() {
                    console.dir(arguments);
                }
            }
        });
    });

}());