"use strict";

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();

describe("destructuring", function () {
	"use strict";

	it("has simple examples", function () {

		var values = [22, 44];
		var x = values[0];
		var y = values[1];

		expect(x).toBe(22);
		expect(y).toBe(44);

		// let doWork = function(
		//     {firstName, lastName, role="developer"}) {
		//     return role + " " + firstName + " " + lastName;
		// };

		// doWork({firstName:"Scott"})

		// let person = {firstName: "Scott", lastName: "Allen"};
		// let result = doWork(person);

		// expect(result).toBe("developer Scott Allen");

		// let odds = [1,3,5,7,9];
		// let [first, second, ...rest] = odds;

		// expect(first).toBe(1);
		// expect(second).toBe(3);
		// expect(rest).toEqual([5,7,9]);

		var employee = {
			firstName: "Scott",
			address: {
				state: "Maryland",
				country: "USA"
			},
			favoriteNumbers: [45, 55, 32, 13]
		};

		var firstName = employee.firstName;
		var state = employee.address.state;

		var _employee$favoriteNumbers = _slicedToArray(employee.favoriteNumbers, 2);

		var second = _employee$favoriteNumbers[1];

		expect(firstName).toBe("Scott");
		expect(state).toBe("Maryland");
		expect(second).toBe(55);
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

		var doWork = function doWork(url, _ref) {
			var data = _ref.data;
			var cache = _ref.cache;
			var headers = _ref.headers;

			return data;
		};

		var result = doWork("api/test", {
			data: "test",
			cache: false
		});

		expect(result).toBe("test");
	});
});