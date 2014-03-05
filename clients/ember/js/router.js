AtTheMovies.Router.reopen({
    rootURL: '/ember/default.html'
});

AtTheMovies.Router.map(function() {
    this.route("movies", {
        path: "/"
    });
});

AtTheMovies.MoviesRoute = Ember.Route.extend({
    model: function() {
        console.log("finding");
        return this.store.find("movie");
    }
});