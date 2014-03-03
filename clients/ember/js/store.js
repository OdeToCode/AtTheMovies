AtTheMovies.ApplicationAdapter = DS.FixtureAdapter;

AtTheMovies.Movie = DS.Model.extend({
    id: DS.attr(),
    title: DS.attr(),
    rating: DS.attr(),
    year: DS.attr()
});

AtTheMovies.Movie.FIXTURES = [{
    id: 1,
    title: "Star Wars"
}, {
    id: 2,
    title: "Help"
}, {
    id: 3,
    title: "Save"
}];