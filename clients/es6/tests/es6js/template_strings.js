describe("template literals", function() {

    it("provides interpolation features", function() {

        var name = "world";
        var result = `Hello, ${name}`;

        expect(result).toBe("Hello, world");
    });

    it("can be tagged with a custom function", function(){
    	var upper = function(strings, ...values){
			console.log(strings, values);
			var result = '';
			for(var i = 0; i < strings.length; i++){
				result = result	 + strings[i];
				if(i < values.length){
					result = result + values[i];
				}
			}
			return result.toUpperCase();
    	};

    	var x = 1;
    	var y = 3;
    	var result = upper `${x} + ${y} is ${x+y}`;

    	expect(result).toEqual("1 + 3 IS 4");

    });
});