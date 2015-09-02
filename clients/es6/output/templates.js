"use strict";

var _templateObject = _taggedTemplateLiteral(["Hello, ", " ", "!!"], ["Hello, ", " ", "!!"]),
    _templateObject2 = _taggedTemplateLiteral(["", " + ", " is ", ""], ["", " + ", " is ", ""]);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

describe("template literals", function () {

	it("can easily combine literals and data", function () {

		var showTheMath = function showTheMath(x, y) {
			return x + " + " + y + " is " + (x + y);
		};

		var result = showTheMath(3, 4);
		expect(result).toBe("3 + 4 is 7");
	});

	it("can be multi-line", function () {
		var message = "This is\n                       a short, but multi-line message";

		expect(message.length).toBe(62);
	});

	it("can help build URLs", function () {

		var category = "music";
		var id = 2112;

		var url = "http://apiserver/" + category + "/" + id;

		expect(url).toBe("http://apiserver/music/2112");
	});

	it("breaking down tags", function () {

		var test = function test(literals) {
			expect(literals.length).toBe(3);
			expect(literals[0]).toBe("Hello, ");
			expect(literals[1]).toBe(" ");
			expect(literals[2]).toBe("!!");

			for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
				values[_key - 1] = arguments[_key];
			}

			expect(values.length).toBe(2);
			expect(values[0]).toBe("Allen");
			expect(values[1]).toBe("Scott");
			return "test";
		};

		var firstName = "Scott";
		var lastName = "Allen";
		var result = test(_templateObject, lastName, firstName);
		expect(result).toBe("test");
	});

	it("can use tags", function () {

		var upper = function upper(strings) {
			var result = "";

			for (var _len2 = arguments.length, values = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
				values[_key2 - 1] = arguments[_key2];
			}

			for (var i = 0; i < strings.length; i++) {
				result += strings[i];
				if (i < values.length) {
					result += values[i];
				}
			}

			return result.toUpperCase();
		};

		var x = 1;
		var y = 3;
		var result = upper(_templateObject2, x, y, x + y);

		expect(result).toBe("1 + 3 IS 4");
	});
});