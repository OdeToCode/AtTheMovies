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
        console.log("getting movies");
        return $.get("/api/movies");
    }
});