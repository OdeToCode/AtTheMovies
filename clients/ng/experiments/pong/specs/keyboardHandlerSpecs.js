describe("the keyboardHandlerService", function() {

	beforeEach(module("pong"));

	var keyboardHandler;
	beforeEach(inject(function(_keyboardHandler_) {
		keyboardHandler = _keyboardHandler_;
	}));

	it("should distribute keyboard events appropriately", function() {
		
		var called = false;
		var callback = function() {
			called = true;
		};

		keyboardHandler.registerKey("keyUp", 38, callback);

		keyboardHandler.processKey({ type:"keyUp", which:38});
		expect(called).toBe(true);
	});

	it("should throw if same key mapped twice", function() {
		
		var message = "";

		try {
			keyboardHandler.registerKey("keyUp", 38);
			keyboardHandler.registerKey("keyUp", 38);
		}
		catch(ex) {
			message = ex.message;
		}
		expect(message.contains("already mapped")).toBe(true);
	});

});