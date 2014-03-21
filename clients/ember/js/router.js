AtTheMovies.Router.reopen({
    rootURL: '/ember/default.html'
});

AtTheMovies.Router.map(function() {
    this.resource("movies", function() {
        this.route("detail", {
            path: "/:movie_id"
        });
    });
});

AtTheMovies.IndexRoute = Ember.Route.extend({
    redirect: function() {
        this.transitionTo("movies.index");
    }
});

AtTheMovies.MoviesIndexRoute = Ember.Route.extend({
    model: function() {
        console.log("finding all");
        return this.store.find("movie");
    }
});

AtTheMovies.MoviesDetailRoute = Ember.Route.extend({
    model: function(params) {
        console.log("finding " + params.movie_id);
        return this.store.find("movie", params.movie_id);
    }
});