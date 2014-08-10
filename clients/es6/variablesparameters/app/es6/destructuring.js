


describe("destructuring", function() {
	"use strict";
  
	it("can destructure arrays", function() {

		var doWork = function(){
			return [1, 3, 2];
		};

		let [, x, y, z] = doWork();

		expect(x).toBe(3);
		expect(y).toBe(2);
		expect(z).toBeUndefined();

	});

	it("can destructure objects", function() {

	    let doWork = function() {
		     return {
			    firstName: "Scott",
		        lastName: "Allen",
		        handles: {
		        	twitter: "OdeToCode"    
		    	}
		    };		   
		};

		let { 
				firstName, 
			  	handles:{twitter}
			} = doWork();

		expect(firstName).toBe("Scott");
		expect(twitter).toBe("OdeToCode");

	});


	it("works with parameters", function() {

		let doWork = function(url, {data, cache, headers}){
			return data;
		};

		
		let result = doWork(
				"api/test", {
					data: "test", 
					cache: false
				}
			);
		
		expect(result).toBe("test");

	});

});