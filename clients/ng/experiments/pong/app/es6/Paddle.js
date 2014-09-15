(function(app) {

    class Paddle {
        constructor() {
            this.x = 0;
            this.y = 0;
        }

        startMoveDown() {
        	this.y += 2;
        }

        stopMoveDown() {
        	this.y -= 1;
        }

        startMoveUp() {
        	this.y -= 2;
        }

        stopMoveUp() {
        	this.y += 1;
        }
    }

    class LeftPaddle extends Paddle {
    	constructor(keyboardHandler) {
    		Paddle.call(this);
    		this.x = 25;
    		this.y = 100;
    		keyboardHandler.registerUpDown(38, () => this.startMoveUp(), this.stopMoveUp());
    		keyboardHandler.registerUpDown(40, () => this.startMoveDown(), this.stopMoveDown());
    	}
    }

    class RightPaddle extends Paddle {
    	constructor() {
    		Paddle.call(this);
    		this.x = 975;
    		this.y = 300;
    	}
    }

    app.service("leftPaddle", LeftPaddle);
    app.service("rightPaddle", RightPaddle);

}(angular.module("pong")));