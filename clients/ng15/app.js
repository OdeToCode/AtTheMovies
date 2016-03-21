(function() {
    
    var module = angular.module("atTheMovies", ["ngComponentRouter"]);
    
    module.value("$routerRootComponent", "moviesApp");     
    
    module.component("moviesApp",   {
        template: "<nav> " +
                  "  <a ng-link='[\"List\"]'>Movies</a>" +
                  "  <a ng-link='[\"About\"]'>About</a>" +
                  "</nav> " +
                  "<ng-outlet></ng-outlet>",
        $routeConfig: [
            { path: "/", name: "List", component: "list", useAsDefault: true},
            { path: "/about", name: "About", component: "about" }            
        ]
    });
    
    module.component("list", {
        template: "<div ng-repeat='movie in $ctrl.movies'><movie-detail movie='movie'></movie-detail></div>",
        controller: function() {
            this.movies = [{title:"Star"}, {title:"Foo"}, {title:"Bar"}];
        }
    });
    
    module.component("movieDetail", {
        bindings: { movie: "<"},
        template: "<div>{{$ctrl.movie.title}}</div>"
    });
    
    module.component("about", {
        template: "<div>This is the about page</div>"
    });
   
    
    
}());