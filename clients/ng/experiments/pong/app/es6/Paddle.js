(function(app) {

    class Paddle {
        constructor(x,y) {
            this.x = x;
            this.y = y;
        }
    }

    app.value("leftPaddle", new Paddle(100,100));
    app.value("rightPaddle", new Paddle(900,300));

}(angular.module("pong")));