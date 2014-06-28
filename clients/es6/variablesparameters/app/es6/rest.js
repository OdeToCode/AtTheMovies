describe("rest parameters", function(){

	it("is like varargs", function(){

		let doWork = function(name, ...numbers){
			let result = 0;
			numbers.forEach(function(n){
				result += n;
			});
			return result;
		};

		let result = doWork("Scott", 1, 2, 3);
		expect(result).toBe(6);

	});
	
});