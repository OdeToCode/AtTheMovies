import {Person} from "./lib/Person"

describe("modules", function() {
	
	it("should have a person", function() {
		
		var p1 = new Person("Scott");
		expect(p1.name).toBe("Scott");
	
	
		expect(true).toBe(false);	
	});
	
	
	
});