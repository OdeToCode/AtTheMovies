(function(app){

    class GameController {

        constructor(){

            this.config = app.config;
        }
    }

    app.controller("GameController", GameController);

}(angular.module("pong")));
