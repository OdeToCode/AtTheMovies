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
    }, {
        route: "new",
        moduleId: "viewmodels/movies/new",
        title: "New"
    }, {
        route: "delete/:id",
        moduleId: "viewmodels/movies/delete",
        title: "Delete"
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