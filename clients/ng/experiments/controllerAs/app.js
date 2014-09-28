(function(){

    var app = angular.module("app", []);

    app.controller("MainController", function(){
        this.message = "Hello";
        this.showMessage = function() {
            this.message = "Bonjour!";
        };
    });

}());
