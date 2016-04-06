(function() {
    "use strict";

    var module = angular.module("psMovies", ["ngComponentRouter"]);
    
    module.value("$routerRootComponent", "movieApp");
        
    module.component("appAbout",{
       template: "This is the about page" 
    });

}());