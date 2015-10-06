import {Person, Animal} from "./lib"

describe("The combined modules", function() {
	
	it("should have a person class", function() {
		var person = new Person("Scott");
		expect(person.doWork()).toBe("Scott is working");
	});
	
	it("should have an Animal class", function() {
		expect(new Animal("Beaker").name).toBe("Beaker");
	});
});
