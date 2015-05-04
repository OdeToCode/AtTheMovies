"use strict";

function _slicedToArray(arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }

describe("destructuring", function () {
	"use strict";

	it("has simple examples", function () {

		var values = [22, 44];
		var x = values[0];
		var y = values[1];

		expect(x).toBe(22);
		expect(y).toBe(44);

		var doWork = function doWork(_ref) {
			var firstName = _ref.firstName;
			var lastName = _ref.lastName;
			var _ref$role = _ref.role;
			var role = _ref$role === undefined ? "developer" : _ref$role;

			return role + " " + firstName + " " + lastName;
		};

		doWork({ firstName: "Scott" });

		var person = { firstName: "Scott", lastName: "Allen" };
		var result = doWork(person);

		expect(result).toBe("developer Scott Allen");

		var odds = [1, 3, 5, 7, 9];
		var first = odds[0];
		var second = odds[1];
		var rest = odds.slice(2);

		expect(first).toBe(1);
		expect(second).toBe(3);
		expect(rest).toEqual([5, 7, 9]);

		// var employee = {
		//   firstName: "Scott",
		//   address: {
		//     state: "Maryland",
		//     country: "USA"
		//   },
		//   favoriteNumbers: [45,55,32,13]
		// };
		//
		// var { firstName, address: {state}, favoriteNumbers: [,second]} = employee;
		//
		// expect(firstName).toBe("Scott");
		// expect(state).toBe("Maryland");
		// expect(second).toBe(55);
	});

	it("can have defaults", function () {
		var address = { state: "Maryland" };
		var _address$state = address.state;
		var state = _address$state === undefined ? "New York" : _address$state;
		var _address$country = address.country;
		var country = _address$country === undefined ? "USA" : _address$country;

		expect(state).toBe("Maryland");
		expect(country).toBe("USA");
	});

	it("can destructure arrays", function () {

		var doWork = function doWork() {
			return [1, 3, 2];
		};

		var _doWork = doWork();

		var _doWork2 = _slicedToArray(_doWork, 4);

		var x = _doWork2[1];
		var y = _doWork2[2];
		var z = _doWork2[3];

		expect(x).toBe(3);
		expect(y).toBe(2);
		expect(z).toBeUndefined();
	});

	it("can destructure objects", function () {

		var doWork = function doWork() {
			return {
				firstName: "Scott",
				lastName: "Allen",
				handles: {
					twitter: "OdeToCode"
				}
			};
		};

		var _doWork3 = doWork();

		var firstName = _doWork3.firstName;
		var twitter = _doWork3.handles.twitter;

		expect(firstName).toBe("Scott");
		expect(twitter).toBe("OdeToCode");
	});

	it("works with parameters", function () {

		var doWork = function doWork(url, _ref2) {
			var data = _ref2.data;
			var cache = _ref2.cache;
			var headers = _ref2.headers;

			return data;
		};

		var result = doWork("api/test", {
			data: "test",
			cache: false
		});

		expect(result).toBe("test");
	});
});