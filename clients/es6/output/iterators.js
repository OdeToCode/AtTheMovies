"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

describe("iterators", function () {

    it("works with iterator method at low level", function () {
        var sum = 0;
        var numbers = [1, 2, 3, 4];

        var iterator = numbers.values();
        var next = iterator.next();
        while (!next.done) {
            sum += next.value;
            next = iterator.next();
        }
        expect(sum).toBe(10);
    });

    it("doesn't have problems when the sequence changes", function () {
        var count = 0;
        var sum = 0;
        var numbers = [1, 2, 3, 4];

        var iterator = numbers.values();
        var next = iterator.next();
        while (!next.done) {
            if (++count == 2) {
                numbers.push(5);
                numbers.unshift(1);
            }
            sum += next.value;
            next = iterator.next();
        }
        expect(sum).toBe(17);
    });

    it("cannot 'for in' over iterable", function () {
        var sum = 0;
        var numbers = [1, 2, 3, 4];

        // 0, 1, 2, 3
        // numbers[i]
        for (var i in numbers) {
            sum += i;
        }
        expect(sum === 10).toBe(false);
        expect(typeof sum).toBe("string");
    });

    it("for of will work with a string", function () {

        var result = "";
        var message = "Hello";
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = message[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var c = _step.value;

                result += c;
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

        expect(result).toBe("Hello");
    });

    it("for in only gets available index", function () {
        var sum = 0;
        var numbers = [1, 2, 3, 4];

        for (var i in numbers) {
            sum += numbers[i]; // notice the indexer
        }
        expect(sum).toBe(10);
    });

    it("can 'for of' over iterable", function () {
        var sum = 0;
        var numbers = [1, 2, 3, 4];

        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
            for (var _iterator2 = numbers[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var n = _step2.value;

                sum += n;
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

        expect(sum).toBe(10);
    });

    it("can get an iterator from array the hard way", function () {

        var sum = 0;
        var numbers = [1, 2, 3, 4];
        var iterator = numbers[Symbol.iterator]();

        var next = iterator.next();
        while (!next.done) {
            sum += next.value;
            next = iterator.next();
        }
        expect(sum).toBe(10);
    });

    it("can build your own", function () {
        var Classroom = (function () {
            function Classroom() {
                _classCallCheck(this, Classroom);

                this.students = ["Tim", "Joy", "Sue"];
            }

            _createClass(Classroom, [{
                key: Symbol.iterator,
                value: function () {
                    var _this = this;

                    var index = 0;
                    return {
                        next: function next() {
                            if (index < _this.students.length) {
                                index += 1;
                                return { done: false, value: _this.students[index - 1] };
                            }
                            return { value: undefined, done: true };
                        }
                    };
                }
            }]);

            return Classroom;
        })();

        var scienceClass = new Classroom();
        var result = [];
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
            for (var _iterator3 = scienceClass[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                var _name = _step3.value;

                result.push(_name);
            }
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

        expect(result).toEqual(["Tim", "Joy", "Sue"]);
    });

    it("can build your own with a class", function () {
        var Classroom = (function () {
            function Classroom() {
                _classCallCheck(this, Classroom);

                this.students = ["Tim", "Joy", "Sue"];
            }

            _createClass(Classroom, [{
                key: Symbol.iterator,
                value: function () {
                    return new ArrayIterator(this.students);
                }
            }]);

            return Classroom;
        })();

        var ArrayIterator = (function () {
            function ArrayIterator(array) {
                _classCallCheck(this, ArrayIterator);

                this.array = array;
                this.index = 0;
            }

            _createClass(ArrayIterator, [{
                key: "next",
                value: function next() {
                    var result = { value: undefined, done: true };
                    if (this.index < this.array.length) {
                        result.value = this.array[this.index];
                        result.done = false;
                        this.index += 1;
                    }
                    return result;
                }
            }]);

            return ArrayIterator;
        })();

        var scienceClass = new Classroom();
        var result = [];
        var _iteratorNormalCompletion4 = true;
        var _didIteratorError4 = false;
        var _iteratorError4 = undefined;

        try {
            for (var _iterator4 = scienceClass[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                var _name2 = _step4.value;

                result.push(_name2);
            }
        } catch (err) {
            _didIteratorError4 = true;
            _iteratorError4 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion4 && _iterator4["return"]) {
                    _iterator4["return"]();
                }
            } finally {
                if (_didIteratorError4) {
                    throw _iteratorError4;
                }
            }
        }

        expect(result).toEqual(["Tim", "Joy", "Sue"]);
    });

    it("can process exceptions", function () {

        var stockTicker = regeneratorRuntime.mark(function stockTicker() {
            return regeneratorRuntime.wrap(function stockTicker$(context$3$0) {
                while (1) switch (context$3$0.prev = context$3$0.next) {
                    case 0:
                        context$3$0.next = 2;
                        return 10;

                    case 2:
                        context$3$0.next = 4;
                        return 11;

                    case 4:
                        throw new Error("oops!");

                    case 5:
                    case "end":
                        return context$3$0.stop();
                }
            }, stockTicker, this);
        });

        var iterator = stockTicker();
        expect(iterator.next().value).toBe(10);
        expect(iterator.next().value).toBe(11);
        expect(function () {
            return iterator.next();
        }).toThrow();
    });

    it("can take a parameter from next(param)", function () {

        var range0 = regeneratorRuntime.mark(function range0(start, end) {
            var current, delta;
            return regeneratorRuntime.wrap(function range0$(context$3$0) {
                while (1) switch (context$3$0.prev = context$3$0.next) {
                    case 0:
                        current = start;

                    case 1:
                        if (!(current <= end)) {
                            context$3$0.next = 8;
                            break;
                        }

                        context$3$0.next = 4;
                        return current;

                    case 4:
                        delta = context$3$0.sent;

                        current += delta || 1;
                        context$3$0.next = 1;
                        break;

                    case 8:
                    case "end":
                        return context$3$0.stop();
                }
            }, range0, this);
        });

        var range1 = regeneratorRuntime.mark(function range1(start, end) {
            var current, delta;
            return regeneratorRuntime.wrap(function range1$(context$3$0) {
                while (1) switch (context$3$0.prev = context$3$0.next) {
                    case 0:
                        current = start;

                    case 1:
                        if (!(current <= end)) {
                            context$3$0.next = 8;
                            break;
                        }

                        context$3$0.next = 4;
                        return current;

                    case 4:
                        delta = context$3$0.sent;

                        current += delta || 1;
                        context$3$0.next = 1;
                        break;

                    case 8:
                    case "end":
                        return context$3$0.stop();
                }
            }, range1, this);
        });

        var range2 = function range2(start, end) {
            var firstCall = true;
            var current = start;
            return {
                next: function next() {
                    var delta = arguments[0] === undefined ? 1 : arguments[0];

                    var result = { value: undefined, done: true };

                    if (firstCall) {
                        firstCall = false;
                    } else {
                        current += delta;
                    }

                    if (current <= end) {
                        result.value = current;
                        result.done = false;
                    }
                    return result;
                }
            };
        };

        var iterate1 = function iterate1(iterator) {
            var result = [];
            var next = iterator.next();
            while (!next.done) {
                result.push(next.value);
                next = iterator.next(next.value);
            }
            return result;
        };

        var iterate2 = function iterate2(iterator) {
            var result = [];
            var next = iterator.next();
            while (!next.done) {
                result.push(next.value);
                next = iterator.next();
            }
            return result;
        };

        var result = [];
        var iterator = range0(1, 10);
        var next = iterator.next();

        while (!next.done) {
            result.push(next.value);
            next = iterator.next(next.value);
        }

        expect(result).toEqual([1, 2, 4, 8]);

        expect(iterate1(range1(1, 10))).toEqual([1, 2, 4, 8]);
        expect(iterate2(range1(1, 10))).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

        expect(iterate1(range2(1, 10))).toEqual([1, 2, 4, 8]);
        expect(iterate2(range2(1, 10))).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });
});