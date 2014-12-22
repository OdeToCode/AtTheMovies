describe("default parameters", function(){

	it("provides defaults", function(){

		var doWork = function(name="Scott") {						
			return name;
		};

		var result = doWork();

		expect(result).toBe("Scott");

	});

	it("old way", function(){

        let doWork = function(name = "Scott") {
            return name;
        };

        expect(doWork()).toBe("Scott");
    });

    it("will provide a value for undefined", function(){

		let doWork = function(a = 1, b = 2, c = 3){
			return [a,b,c];
		};

		let [a,b,c] = doWork(5, undefined);

		expect(a).toBe(5);
		expect(b).toBe(2);
		expect(c).toBe(3);
	});

	it("works with destructuring", function() {

		let doWork = function(
			     url, 
				{data = "Scott", cache = true}){
			return data;
		};

		
		let result = doWork(
				"api/test", {
					cache: false
				}
			);
		
		expect(result).toBe("Scott");

	});

});