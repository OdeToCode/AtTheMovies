(function () {

    var module = angular.module("psMovies");

    var controller = function() {
        var model = this;          
        
        model.$routerOnActivate = function(next, previous) {
            console.log(next);
            model.id = next.params.id;
        };
    };

    module.component("movieDetails", {
        templateUrl: "/ps-movies/movie-details.component.html",
        controllerAs: "model",
        controller: [controller],
        $routeConfig: [
            { path: "/overview", component:"movieOverview", name:"Overview"},
            { path: "/cast", component:"movieCast", name:"Cast"},
            { path: "/director", component:"movieDirector", name:"Director"}
        ]
    });
    
    module.component("movieOverview", {
        template: "Overview stuff" 
    });

    module.component("movieCast", {
        template: "The cast ..." 
    });
    
    module.component("movieDirector", {
        template: "The director is ..." 
    });

} ());