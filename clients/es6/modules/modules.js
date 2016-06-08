import {Person, Animal} from "./lib"
import {creature, inspect, reset} from "./lib/creatures"

console.log(this); // undefined

creature.name = "Winnie";
console.log(creature);  // {name: "Winnie"}
console.log(inspect()); // "Winnie"
reset();
console.log(creature); // {name: "Oscar"}

describe("The combined modules", function () {

	it("should have a person class", function () {
		var person = new Person("Scott");
		expect(person.doWork()).toBe("Scott is working");
	});

	it("should have an Animal class", function () {
		expect(new Animal("Beaker").name).toBe("Beaker");
	});
});


