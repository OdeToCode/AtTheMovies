AtTheMovies.MoviesIndexController = Ember.ArrayController.extend({
    actions: {
        new: function() {
            this.transitionToRoute("movies.new");
        }
    }
});

AtTheMovies.MoviesDeleteController = Ember.ObjectController.extend({
    actions: {
        delete: function() {
            var self = this;
            var movie = this.get("model");

            movie.deleteRecord();
            movie.save().then(function() {
                self.transitionToRoute("movies.index");
            }, function(reason) {
                self.error = reason.statusText;
            });
        },
        cancel: function() {
            this.transitionToRoute("movies.index");
        }
    }
});

AtTheMovies.MoviesEditController = Ember.ObjectController.extend({

    error: null,

    actions: {
        save: function() {
            var self = this;
            var movie = this.get("model");

            movie.save().then(function() {
                self.transitionToRoute("movies.detail", movie);
            }, function(reason) {
                self.error = reason.statusText;
            });
        },
        cancel: function() {
            this.transitionToRoute("movies.index");
        }
    }
});

AtTheMovies.MoviesNewController = Ember.ObjectController.extend({
    actions: {
        save: function() {
            var self = this;
            var movie = this.get("model");

            movie.save().then(function() {
                self.transitionToRoute("movies.detail", movie);
            }, function(reason) {
                self.error = reason.statusText;
            })
        },
        cancel: function() {
            this.transitionToRoute("movies.index");
        }
    }
});