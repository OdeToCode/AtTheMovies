(function(app) {

	class KeyMap {
		constructor() {
			this.keyMap = new Map();
		}

		register(type, code, callback) {
			if(!this.keyMap.has(type)) {
				this.keyMap.set(type, new Map());
			}
			
			let typeMap = this.keyMap.get(type);
			
			if(typeMap.has(code)) {
				throw new Error(`${type} ${code} is already mapped`);
			}
			typeMap.set(code, callback);
		}

		get(type, code) {
			if(this.keyMap.has(type)) {
				let typeMap = this.keyMap.get(type);
				if(typeMap.has(code)) {
					let callback = typeMap.get(code);
					return callback;
				}
			}
			return null;
		}
	}

	class KeyboardHandler 
	{
		constructor() {
			this.keyMap = new KeyMap();	
		}

		registerUpDown(code, downCallback, upCallback) {
			this.keyMap.register("keydown", code, downCallback);
			this.keyMap.register("keyup", code, upCallback);
		}

		registerKey(type, code, callback) {
			this.keyMap.register(type, code, callback);
		}

		processKey(keyEvent) {
			let callback = this.keyMap.get(keyEvent.type, keyEvent.which);
			if(callback) {
				keyEvent.preventDefault();
				callback();
			}
		}
	}

	app.service("keyboardHandler", KeyboardHandler);

}(angular.module("pong")));