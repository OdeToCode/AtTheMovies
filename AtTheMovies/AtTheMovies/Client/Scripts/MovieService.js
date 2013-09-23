(function (app) {

    var Movie = function ($resource) {
        return $resource(
                   "/api/movies/:id",
                   { id: "@id" },
                   {
                       "update": { method: "PUT" },
                       "query":  { method: 'GET', isArray: false }
                   }
              );
    };
    Movie.$inject = ["$resource"];

    app.factory("Movie", Movie);

}(angular.module("AtTheMovies")));