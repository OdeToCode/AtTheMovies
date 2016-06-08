"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

describe("arrow functions", function () {

    it("has basic syntax", function () {

        var square = function square(x) {
            return x * x;
        };

        var add = function add(x, y) {
            return x + y;
        };

        var log = function log(result) {
            console.log(result);
            return result;
        };

        var result = log(square(add(3, 5)));
        // 64

        expect(result).toBe(64);
    });

    it("works well with arrays", function () {

        var numbers = [1, 2, 3];

        var result = numbers.map(function (n) {
            return n * 2;
        });
        // [2,4,6]

        expect(result).toEqual([2, 4, 6]);
    });

    it("doesn't return object literal w/o parens", function () {

        var numbers = [1, 2, 3];

        var result = numbers.map(function (n) {
            value: n;
        });
        // [undefined], [undefined], [undefined]

        expect(result.length).toBe(3);
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = result[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var entry = _step.value;

                expect(entry).toBeUndefined();
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

    it("does return object literal w parens", function () {

        var numbers = [1, 2, 3];

        var result = numbers.map(function (n) {
            return { value: n };
        });
        // [{value: 1}, {value:2}, {value:3}]

        expect(result.length).toBe(3);
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
            for (var _iterator2 = result[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var entry = _step2.value;

                expect(entry.value).toBeDefined();
            }
        } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion2 && _iterator2["return"]) {
                    _iterator2["return"]();
                }
            } finally {
                if (_didIteratorError2) {
                    throw _iteratorError2;
                }
            }
        }
    });

    it("preseves the this reference", function () {

        var adder = {
            sum: 0,
            add: function add(numbers) {
                var _this = this;

                numbers.forEach(function (n) {
                    _this.sum += n;
                });
            }

        };

        adder.add([1, 2, 3]);
        // adder.sum === 6

        expect(adder.sum).toBe(6);
    });

    it("cannot change 'this'", function () {
        var _this2 = this;

        var adder = {
            sum: 0
        };

        var add = function add(numbers) {
            return numbers.forEach(function (n) {
                return _this2.sum += 1;
            });
        };

        adder.add = add.bind(adder);

        adder.add([1, 2, 3]);
        // adder.sum == 0

        expect(adder.sum).toBe(0);
    });

    it("has no arguments", function () {
        var _arguments = arguments;

        var add = function add(x, y) {
            return _arguments;
        };

        var result = add(3, 5);
        // result.length === 0

        expect(result.length).toBe(0);
    });

    it("careful with the definition", function () {
        var _this3 = this;

        var adder = {
            sum: 0,
            add: function add(numbers) {
                numbers.forEach(function (n) {
                    _this3.sum += n;
                });
            }

        };

        adder.add([1, 2, 3]);

        expect(adder.sum).toBe(0);
    });
});

describe("template literals", function () {

    it("is reusable if you wrap it", function () {

        var template = function template(_ref) {
            var x = _ref.x;
            var y = _ref.y;
            return x + " + " + y + " = " + (x + y);
        };

        var four = template({ x: 2, y: 2 });
        // "2 + 2 = 4"

        var eight = template({ x: 6, y: 2 });
        // "6 + 2 = 8"

        expect(four).toBe("2 + 2 = 4");
        expect(eight).toBe("6 + 2 = 8");
    });
});

describe("destructuring", function () {

    it("can be unreadable?", function () {
        var _Wut = "Wut?";
        var length = _Wut.length;

        expect(length).toBe(4);
    });
});

describe("crazy operators", function () {

    it("can be the bang bang", function () {

        var value = 1;
        var result = !!value;
        // true

        expect(result).toBe(true);
    });

    it("can be the spread", function () {

        var map = new Map([[1, "one"], [2, "two"]]);

        var numbers = [1, 2, 3];
        var result = [].concat(numbers, [4, 5, 6]);
        // [1, 2, 3, 4, 5, 6]

        expect(result).toEqual([1, 2, 3, 4, 5, 6]);
    });

    it("obscure number generator", function () {
        var numbers = Array.from({ length: 5 }, function (v, k) {
            return k;
        });
        // [0, 1, 2, 3, 4]

        expect(numbers).toEqual([0, 1, 2, 3, 4]);
    });

    // it("can be the object spread", function() {

    //     const data = { x:1, y:2 };

    //    const result = {
    //         name: "results",
    //         ...!!data ? data : { default: true }
    //     };

    //     // { name: "results", x:1, y:2}

    // });
});

describe("const and let", function () {

    //    const x = 2;
    //    x = 3;
    //    // TypeError: Assignment to constant variable

    var numbers = [1, 2, 3];
    Object.freeze(numbers);
    //numbers.push(4);
    // TypeError
});

describe("tdz", function () {

    function doWork() {
        x = 1;

        var x = 2;

        return x;
    }

    doWork();
    // ReferenceError
});

describe("collections", function () {

    it("has sets", function () {

        var set = new Set();
        var array = [9];
        set.add(array);
        set.add(array);
        // set.size === 1

        expect(set.size).toBe(1);
    });

    it("has a safer Array constructor", function () {

        var good = Array(1, 2, 3);
        // [1, 2, 3]

        var bad = Array(10);
        // [undefined x 10]

        var alternate = Array.of(10);
        // [10]

        expect(good).toEqual([1, 2, 3]);
        expect(bad.length).toBe(10);
        expect(alternate).toEqual([10]);
    });
});

describe("Classes", function () {

    it("can use hoisted functions", function () {

        var e = new Employee();
        // { name:"Scott"}

        function Employee() {
            this.name = "Scott";
        }

        expect(e.name).toBe("Scott");
    });

    // it("cannot use hoisted classes", function() {

    //    const e = new Employee();
    //    // ReferenceError

    //    class Employee {              
    //    }                      
    // });

    it("enumerate methods", function () {

        var Human = function Human() {};
        Human.prototype.doWork = function () {};

        var names = [];
        for (var p in new Human()) {
            names.push(p);
        }
        // ["doWork"]

        expect(names).toEqual(["doWork"]);

        var Horse = (function () {
            function Horse() {
                _classCallCheck(this, Horse);
            }

            _createClass(Horse, [{
                key: "doWork",
                value: function doWork() {}
            }]);

            return Horse;
        })();

        names = [];
        for (var p in new Horse()) {
            names.push(p);
        }
        // []

        expect(names.length).toBe(0);

        names = [];
        var prototype = Object.getPrototypeOf(new Horse());
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
            for (var _iterator3 = Object.getOwnPropertyNames(prototype)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                var _name = _step3.value;

                names.push(_name);
            }
            // ["constructor", "doWork"]
        } catch (err) {
            _didIteratorError3 = true;
            _iteratorError3 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion3 && _iterator3["return"]) {
                    _iterator3["return"]();
                }
            } finally {
                if (_didIteratorError3) {
                    throw _iteratorError3;
                }
            }
        }

        expect(names).toEqual(["constructor", "doWork"]);
    });
});