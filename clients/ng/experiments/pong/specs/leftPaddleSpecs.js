describe("the leftPaddle", function(){

	beforeEach(module("pong"));

	var leftPaddle, keyboardHandler;
	beforeEach(inject(function(_leftPaddle_, _keyboardHandler_){
		leftPaddle = _leftPaddle_;
		keyboardHandler = _keyboardHandler_;
	}));

	it("should respond to key events", function(){
		keyboardHandler.processKey({type:"keydown", which:38});
		expect(leftPaddle.y).toBe(-2);
	});

});