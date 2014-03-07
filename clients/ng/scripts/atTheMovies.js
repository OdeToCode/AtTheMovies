(function() {

    var module = angular.module("atTheMovies", ["ngRoute", "ngAnimate"]);

    var routes = 
    [
        { 
            path: "/list", 
            route: { 
                templateUrl: "views/list.html", 
                controller: "ListController",
                resolve: {
                    movies: function(movieDataService) {
                        return movieDataService.getAll();
                    }
                }
            } 
        },
        {
            path: "/detail/:id",
            route: {
                templateUrl: "views/detail.html",
                controller: "DetailController"
            }
        }
    ];

    
    module.config(function($routeProvider) {        
        angular.forEach(routes, function(route){
            $routeProvider.when(route.path, route.route);
        });

        $routeProvider.otherwise({
            redirectTo: "/list"
        });
    });

    module.constant("movieApiUrl", "/api/movies");

    module.run(function($rootScope) {
        $rootScope.error = {
            current: ""
        };

        $rootScope.$on("$routeChangeError", function(event, current, previous, rejection) {
            $rootScope.error.current = rejection;
        });
    });

}());