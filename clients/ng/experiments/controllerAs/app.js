(function(){

    var app = angular.module("app", []);

    app.controller("MainController", function(){
        this.title = angular.version;
    });

}());
