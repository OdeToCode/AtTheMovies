(function(app){

    class GameController {

        constructor(ball, leftPaddle, rightPaddle){
            this.config = app.config;
            this.ball = ball;
            this.leftPaddle = leftPaddle;
            this.rightPaddle = rightPaddle;
        }
    }

    app.controller("Game", GameController);

}(angular.module("pong")));
