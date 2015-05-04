"use strict";

describe("rest parameters", function () {

	it("is like varargs", function () {

		var doWork = function doWork(name) {
			for (var _len = arguments.length, numbers = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
				numbers[_key - 1] = arguments[_key];
			}

			var result = 0;
			numbers.forEach(function (n) {
				result += n;
			});
			return result;
		};

		var result = doWork("Scott", 1, 2, 3);
		expect(result).toBe(6);
	});

	it("will be empty if nothing passed", function () {

		var doWork = function doWork() {
			for (var _len2 = arguments.length, numbers = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
				numbers[_key2] = arguments[_key2];
			}

			return numbers;
		};

		var result = doWork();
		expect(result.length).toBe(0);
	});
});