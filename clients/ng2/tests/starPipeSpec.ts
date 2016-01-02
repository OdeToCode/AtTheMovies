import {StarPipe} from "../app/pipes/StarPipe";

describe("the StarPipe", () => {
	
	it("should return 3 stars for a rating of 3", () => {
		
		let pipe = new StarPipe();
		let result = pipe.transform(3, []);
		expect(result).toBe("***");
				
	});
		
});


