describe("the spread", function(){

	it("can spread an array across parameters", function(){

		let doWork = function(x, y, z) {
			return x + y + z;
		}

		var result = doWork(...[1, 2, 3]);
		
		expect(result).toBe(6); 

	});

	it("can build arrays", function(){

		var a = [4, 5, 6];
		var b = [1, 2, 3, ...a, 7, 8, 9];

		expect(b).toEqual([1,2,3,4,5,6,7,8,9]);

	});

    it("can spread a rest paramter", function(){

        var doWork = function(x, y, z){
            return x + y + z;
        }

        var doSomething = function(...args){
            return doWork(...args);
        }

        var result = doSomething(...[1,2,3,4,5]);
        expect(result).toBe(6);

    });

    it("is better than apply", function(){
        var doWork = function(x, y, z){
            return x + y + z;
        }

        var doSomething = function(){
            return doWork.apply(null, arguments);
        }

        var result = doSomething(...[1,2,3,4,5]);
        expect(result).toBe(6);
    });

});