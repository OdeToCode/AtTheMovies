(function(app){

    class GameController {

        constructor(Paddle, raf){
            this.leftPaddle = new Paddle();
            this.rightPaddle = new Paddle();
        }

    }

    app.controller("GameController", GameController);

}(angular.module("pong")));
