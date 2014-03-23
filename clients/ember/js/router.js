AtTheMovies.Router.reopen({
    rootURL: '/ember/default.html'
});

AtTheMovies.Router.map(function() {
    this.resource("movies", function() {
        this.route("detail", {
            path: "/:id"
        });
        this.route("edit", {
            path: "/edit/:id"
        });
        this.route("new", {
            path: "/new"
        });
        this.route("delete", {
            path: "/delete/:id"
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
        return this.store.find("movie");
    }
});

AtTheMovies.MoviesNewRoute = Ember.Route.extend({
    model: function() {
        return this.store.createRecord("movie");
    }
});

AtTheMovies.MoviesDetailRoute = Ember.Route.extend({
    model: function(params) {
        return this.store.find("movie", params.id);
    }
});

AtTheMovies.MoviesEditRoute = Ember.Route.extend({
    model: function(params) {
        return this.store.find("movie", params.id);
    }
});

AtTheMovies.MoviesDeleteRoute = Ember.Route.extend({
    model: function(params) {
        return this.store.find("movie", params.id);
    }
});