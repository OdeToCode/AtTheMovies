AtTheMovies.MoviesEditController = Ember.ObjectController.extend({

    error: null,

    actions: {
        save: function() {
            var self = this;
            var movie = this.get('model');

            movie.save().then(function() {
                self.transitionToRoute('movies.detail', movie);
            }, function(reason) {
                self.error = reason.statusText;
            });
        },
        cancel: function() {

        }
    }
});