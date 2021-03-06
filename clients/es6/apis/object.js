// describe("Reflect", function() {
// 		
// 	
// });
// 
// describe("Proxy", function() {
// 	
// 	it("can trap properties and functions", function() {
// 		
// 		var original = {
// 			
// 			x: 3,
// 			
// 			doMath: function(...args) {
// 				let sum = args.reduce((previous, current) => previous + current, 0);
// 				return sum;		
// 			}	
// 									
// 		};
// 		
// 		expect(original.x).toBe(3);
// 		expect(original.doMath(1, 2, 3)).toBe(6);
// 		
// 		var handler = {
// 			
// 		}
// 		
// 		var proxy = new Proxy(original, handler);
// 		
// 		expect(original.x).toBe(3);
// 		expect(original.doMath(1, 2, 3)).toBe(6);
// 		
// 	});
// 	
// });

describe("object apis", function() {
	
	it("simple assign", function() {
				
		let a = { a: 1};
		let b = { b: 2};		
		let result = Object.assign({}, a, b);
		
		expect(result.a).toBe(1);
		expect(result.b).toBe(2);
				
	});
	
	it("will overwrite assign", function() {
				
		let a = { a: 1};
		let b = { b: 2};
		let a2 = { a: 2, foo:"baz"};
		
		let result = Object.assign({foo:"bar"}, a, b, a2);
		expect(result.a).toBe(2);
		expect(result.b).toBe(2);
		expect(result.foo).toBe("baz");
				
	});
	
	
});