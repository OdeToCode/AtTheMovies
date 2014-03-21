(function() {

    var module = angular.module("atTheMovies", ["ngRoute", "ngAnimate", "ngResource"]);

    var routes =
        [{
        path: "/list",
        route: {
            templateUrl: "views/list.html",
            controller: "ListController"
        }
    }, {
        path: "/detail/:id",
        route: {
            templateUrl: "views/detail.html",
            controller: "DetailController"
        }
    }, {
        path: "/edit/:id",
        route: {
            templateUrl: "views/edit.html",
            controller: "EditController"
        }
    }];


    module.config(function($routeProvider) {
        angular.forEach(routes, function(route) {
            $routeProvider.when(route.path, route.route);
        });

        $routeProvider.otherwise({
            redirectTo: routes[0].path
        });
    });

    module.constant("movieApiUrl", "/api/movies");

    module.run(function($rootScope) {
        $rootScope.error = null;
    });

}());