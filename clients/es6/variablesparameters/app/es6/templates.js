describe("template literals", function(){

	it("can easily combine literals and data", function(){

		let showTheMath = function(x,y ){
			return `${x} + ${y} is ${x + y}`;
		};

		let result = showTheMath(3,4);
		expect(result).toBe("3 + 4 is 7");
	});

    it("can be multi-line", function(){
        let message = `This is
                       a short, but multi-line message`;

        console.log(message);
        expect(message.length).toBe(63);
    });

	it("can help build URLs", function(){

		let category = "music";
		let id = 2112;

		let url = `http://apiserver/${category}/${id}`;

		expect(url).toBe("http://apiserver/music/2112");
	});

	it("can use tags", function(){

		let upper = function(strings, ...values){
			let result = "";
			for(var i = 0; i < strings.length; i++){
				result += strings[i];
				if(i < values.length){
					result += values[i];
				}
			}
			return result.toUpperCase();
		};

		var x = 1;
		var y = 3;
		var result = upper `${x} + ${y} is ${x+y}`;

		expect(result).toBe("1 + 3 IS 4");

	});

});