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
    namespace: "api",

    serializeRecord: function(store, type, record) {
        var data = {};
        var serializer = store.serializerFor(type.typeKey);

        serializer.serializeIntoHash(data, type, record, {
            includeId: true
        });

        return data;
    },

    createRecord: function(store, type, record) {
        var data = this.serializeRecord(store, type, record);
        var url = this.buildURL(type.typeKey);

        return this.ajax(url, "POST", {
            data: data[type.typeKey]
        });
    },

    updateRecord: function(store, type, record) {

        var data = this.serializeRecord(store, type, record);
        var serializer = store.serializerFor(type.typeKey);
        var url = this.buildURL(type.typeKey);

        serializer.serializeIntoHash(data, type, record, {
            includeId: true
        });

        return this.ajax(url, "PUT", {
            data: data[type.typeKey]
        });
    }
});