AtTheMovies.Adapter = DS.FixtureAdapter;

AtTheMovies.Store = DS.Store.extend({
    revision: 1,
    adapter: AtTheMovies.Adapter.create()
});