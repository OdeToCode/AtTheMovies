(function(app){

    class Ball {
        constructor(x, y){
            this.x = x;
            this.y = y;
        }
    }

    app.value("ball", new Ball(300, 400));


}(angular.module("pong")));