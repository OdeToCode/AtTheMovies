describe("sets", function() {
	
	it("contains unique items", function(){
		
		let animals = ["bear", "snake", "elephant", "snake"];
		let animalsSet = new Set(animals);
		
		expect(animals.length).toBe(4);
		expect(animalsSet.size).toBe(3);
		expect(animalsSet.has("bear")).toBe(true);
		
		animalsSet.delete("bear");
		expect(animalsSet.size).toBe(2);		
		
		
		let scott = { name: "Scott "};
		
		let people = new Set();
		people.add(scott);
		people.add(scott);
		people.add( {name:"Scott"});
		
		expect(people.size).toBe(2);
		expect(people.has(scott)).toBe(true);
		expect(people.has({name:"Scott"})).toBe(false);
		
	});
	
});

describe("maps", function() {
	
	it("can get and set a value", function() {
		
		let map = new Map();
		map.set("key", 301);
		map.set("key", 302);
		expect(map.get("key")).toBe(302);
		
	});
	
	it("can use has and delete", function() {
		
		let map = new Map();
		map.set("key", 611);
		
		expect(map.has("key")).toBe(true);
		
		map.delete("key");
		expect(map.has("key")).toBe(false);
	});
	
	it("can use any type of key", function() {
	
		var someKey = { firstName: "Scott"};
		var someValue = { lastName: "Allen"};
		
		var map = new Map();
		map.set(someKey, someValue);
		
		expect(map.size).toBe(1);
		expect(map.get(someKey).lastName).toBe("Allen");
		expect(map.get({firstName:"Scott"})).toBeUndefined();
	
	});
	
	it("can construct with array and is iterable", function() {
		
		let map = new Map([
			[1, "one"],
			[2, "two"],
			[3, "three"]
		]);
			
		let sum = 0;
		let combined = "";
		for(let pair of map) {
			sum += pair[0];
			combined += pair[1];
		} 
	
		expect(map.size).toBe(3);
		expect(sum).toBe(6);
		expect(combined).toBe("onetwothree");
		
		map.clear();
		expect(map.size).toBe(0);
	});
	
});