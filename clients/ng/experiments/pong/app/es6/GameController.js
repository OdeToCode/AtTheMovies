(function(app){

    class GameController {

        constructor(Paddle){
            this.leftPaddle = new Paddle();
            this.rightPaddle = new Paddle();
        }

    }

    app.controller("GameController", GameController);

}(angular.module("pong")));
