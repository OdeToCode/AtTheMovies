AtTheMovies.ApplicationAdapter = DS.RESTAdapter;

AtTheMovies.Movie = DS.Model.extend({
    // id: DS.attr(),
    title: DS.attr(),
    rating: DS.attr(),
    year: DS.attr()
});

AtTheMovies.MovieSerializer = DS.RESTSerializer.extend({
    extractArray: function(store, type, payload, id, requestType) {
        console.log("MovieSerializerExtractArray");
        var movies = {
            "movies": payload
        };
        return this._super(store, type, movies, id, requestType);
    }
});

DS.RESTAdapter.reopen({
    namespace: "api"
});