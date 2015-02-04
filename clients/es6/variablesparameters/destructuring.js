


describe("destructuring", function() {
	"use strict";

    it("has simple examples", function(){

        let values = [22, 44];
        let [x, y] = values;

        expect(x).toBe(22);
        expect(y).toBe(44);


        let doWork = function(
            {firstName, lastName, role="developer"}) {
            return role + " " + firstName + " " + lastName;
        };

        doWork({firstName:"Scott"})


        let person = {firstName: "Scott", lastName: "Allen"};
        let result = doWork(person);

        expect(result).toBe("developer Scott Allen");

        let odds = [1,3,5,7,9];
        let [first, second, ...rest] = odds;

        expect(first).toBe(1);
        expect(second).toBe(3);
        expect(rest).toEqual([5,7,9]);

        // var employee = {
        //   firstName: "Scott",
        //   address: {
        //     state: "Maryland",
        //     country: "USA"
        //   },
        //   favoriteNumbers: [45,55,32,13]
        // };
		//
        // var { firstName, address: {state}, favoriteNumbers: [,second]} = employee;
		//
        // expect(firstName).toBe("Scott");
        // expect(state).toBe("Maryland");
        // expect(second).toBe(55);
    });

  it("can have defaults", function(){
        let address = { state:"Maryland" };
        let { state="New York", country="USA"} = address;

        expect(state).toBe("Maryland");
        expect(country).toBe("USA");
  });

	it("can destructure arrays", function() {

		let doWork = function(){
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
