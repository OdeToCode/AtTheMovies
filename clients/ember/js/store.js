AtTheMovies.ApplicationAdapter = DS.RESTAdapter;

AtTheMovies.Movie = DS.Model.extend({
    title: DS.attr(),
    rating: DS.attr(),
    year: DS.attr()
});

AtTheMovies.MovieSerializer = DS.RESTSerializer.extend({
    extractArray: function(store, type, payload, id, requestType) {
        var movies = {
            "movies": payload
        };
        return this._super(store, type, movies, id, requestType);
    },
    extractSingle: function(store, type, payload, id, requestType) {
        var movie = {
            "movie": payload
        };
        return this._super(store, type, movie, id, requestType);
    }
});

DS.RESTAdapter.reopen({
    namespace: "api"
});