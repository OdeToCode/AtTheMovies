"use strict";

describe("new string features", function () {

	it("offer easy finds", function () {

		var name = "porter";

		expect(name.startsWith("port")).toBe(true);
		expect(name.endsWith("er")).toBe(true);
		expect(name.includes("ort")).toBe(true);
	});

	it("is iterable", function () {

		var name = "porter";

		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = name[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var character = _step.value;

				expect(name.includes(character)).toBe(true);
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
	});
});