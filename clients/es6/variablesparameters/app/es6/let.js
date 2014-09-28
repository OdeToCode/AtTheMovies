describe("how let works", function(){

    it("will not have block scope with var", function(){

        var doWork = function(){
            for(var x = 0; x < 3; x++) {
                // ...
            }
            return x; // ReferenceError: x is not defined
        };

        var result = doWork(true);
        expect(result).toBe(3); // PASS

    });



	it("will provide block scoping, unlike var", function(){

		var doWork = function(flag){

			if(flag){
				let x = 3;
				return x;
			}

		};

		var result = doWork(true);
		expect(result).toBe(3);
	});


	it("will provide block scoping with for", function(){

		let doWork = function(){

			for(let i = 0; i< 10; i++){
			}
			
			/* return i won't work */
			return 0;		
		};

		let result = doWork();
		expect(result).toBe(0);

	});	
});

