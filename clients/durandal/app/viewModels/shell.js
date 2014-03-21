define(function(require) {

    var router = require("plugins/router");

    var routes = [{
        route: "",
        moduleId: "viewmodels/movies/list",
        title: "Movies"
    }, {
        route: "detail/:id",
        moduleId: "viewmodels/movies/detail",
        title: "Detail"
    }, {
        route: "edit/:id",
        moduleId: "viewmodels/movies/edit",
        title: "Edit"
    }];

    var routeDefinitions = {
        router: router,
        activate: function() {
            return router.map(routes)
                .mapUnknownRoutes(routes[0].moduleId)
                .activate();
        }
    };

    return routeDefinitions;
});