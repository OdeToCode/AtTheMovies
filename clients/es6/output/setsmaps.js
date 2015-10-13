"use strict";

describe("sets", function () {

	it("contains unique items", function () {

		var animals = ["bear", "snake", "elephant", "snake"];
		var animalsSet = new Set(animals);

		expect(animals.length).toBe(4);
		expect(animalsSet.size).toBe(3);
		expect(animalsSet.has("bear")).toBe(true);

		animalsSet["delete"]("bear");
		expect(animalsSet.size).toBe(2);

		var scott = { name: "Scott " };

		var people = new Set();
		people.add(scott);
		people.add(scott);
		people.add({ name: "Scott" });

		expect(people.size).toBe(2);
		expect(people.has(scott)).toBe(true);
		expect(people.has({ name: "Scott" })).toBe(false);
	});
});

describe("maps", function () {

	it("can get and set a value", function () {

		var map = new Map();
		map.set("key", 301);
		map.set("key", 302);
		expect(map.get("key")).toBe(302);
	});

	it("can use has and delete", function () {

		var map = new Map();
		map.set("key", 611);

		expect(map.has("key")).toBe(true);

		map["delete"]("key");
		expect(map.has("key")).toBe(false);
	});

	it("can use any type of key", function () {

		var someKey = { firstName: "Scott" };
		var someValue = { lastName: "Allen" };

		var map = new Map();
		map.set(someKey, someValue);

		expect(map.size).toBe(1);
		expect(map.get(someKey).lastName).toBe("Allen");
		expect(map.get({ firstName: "Scott" })).toBeUndefined();
	});

	it("can construct with array and is iterable", function () {

		var map = new Map([[1, "one"], [2, "two"], [3, "three"]]);

		var sum = 0;
		var combined = "";
		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = map[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var pair = _step.value;

				sum += pair[0];
				combined += pair[1];
			}
		} catch (err) {
			_didIteratorError = true;
			_iteratorError = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion && _iterator["return"]) {
					_iterator["return"]();
				}
			} finally {
				if (_didIteratorError) {
					throw _iteratorError;
				}
			}
		}

		expect(map.size).toBe(3);
		expect(sum).toBe(6);
		expect(combined).toBe("onetwothree");

		map.clear();
		expect(map.size).toBe(0);
	});
});