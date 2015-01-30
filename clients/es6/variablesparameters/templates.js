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

        expect(message.length).toBe(62);
    });

	it("can help build URLs", function(){

		let category = "music";
		let id = 2112;

		let url =  `http://apiserver/${category}/${id}`;

		expect(url).toBe("http://apiserver/music/2112");
	});

    it("breaking down tags", function(){

        let test = function(literals, ...values) {
            expect(literals.length).toBe(3);
            expect(literals[0]).toBe("Hello, ");
            expect(literals[1]).toBe(" ");
            expect(literals[2]).toBe("!!");

            expect(values.length).toBe(2);
            expect(values[0]).toBe("Allen");
            expect(values[1]).toBe("Scott");
            return "test";
        };

        let firstName = "Scott";
        let lastName = "Allen";
        let result = test `Hello, ${lastName} ${firstName}!!`;
        expect(result).toBe("test");
    });

	it("can use tags", function(){

		let upper = function(strings, ...values){
			let result = "";
			for(let i = 0; i < strings.length; i++){
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
