AtTheMovies.Movie = DS.Model.extend({
    id: DS.attr(),
    title: DS.attr(),
    rating: DS.attr(),
    year: DS.attr()
});

AtTheMovies.Movie.FIXTURES = [{
    id: 1,
    title: "Star",
    rating: 5,
    year: 1979
}, {
    id: 2,
    title: "Far",
    rating: 1,
    year: 2014
}];