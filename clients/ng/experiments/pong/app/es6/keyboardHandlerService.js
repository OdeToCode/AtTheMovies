(function(app){

	let keyMap = {

	};

	class KeyboardHandler 
	{
		constructor(leftPaddle){
			this.leftPaddle = leftPaddle;
		}

		processKey(keyEvent) {

			return false;
		}
	}

	app.service("keyboardHandler", KeyboardHandler);

}(angular.module("pong")));