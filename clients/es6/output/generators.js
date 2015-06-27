"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

describe("generators", function () {

    it("are one way to make iterables", function () {

        var numbers = regeneratorRuntime.mark(function numbers() {
            return regeneratorRuntime.wrap(function numbers$(context$3$0) {
                while (1) switch (context$3$0.prev = context$3$0.next) {
                    case 0:
                        context$3$0.next = 2;
                        return 1;

                    case 2:
                        context$3$0.next = 4;
                        return 2;

                    case 4:
                        context$3$0.next = 6;
                        return 3;

                    case 6:
                    case "end":
                        return context$3$0.stop();
                }
            }, numbers, this);
        });

        var sum = 0;

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = numbers()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var n = _step.value;

                sum += n;
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

        expect(sum).toBe(6);
    });

    it("you can build an iterable object", function () {
        var Classroom = (function () {
            function Classroom() {
                _classCallCheck(this, Classroom);

                for (var _len = arguments.length, students = Array(_len), _key = 0; _key < _len; _key++) {
                    students[_key] = arguments[_key];
                }

                this.students = students;
            }

            _createClass(Classroom, [{
                key: Symbol.iterator,
                value: regeneratorRuntime.mark(function value() {
                    var _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, s;

                    return regeneratorRuntime.wrap(function value$(context$4$0) {
                        while (1) switch (context$4$0.prev = context$4$0.next) {
                            case 0:
                                _iteratorNormalCompletion2 = true;
                                _didIteratorError2 = false;
                                _iteratorError2 = undefined;
                                context$4$0.prev = 3;
                                _iterator2 = this.students[Symbol.iterator]();

                            case 5:
                                if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
                                    context$4$0.next = 12;
                                    break;
                                }

                                s = _step2.value;
                                context$4$0.next = 9;
                                return s;

                            case 9:
                                _iteratorNormalCompletion2 = true;
                                context$4$0.next = 5;
                                break;

                            case 12:
                                context$4$0.next = 18;
                                break;

                            case 14:
                                context$4$0.prev = 14;
                                context$4$0.t0 = context$4$0["catch"](3);
                                _didIteratorError2 = true;
                                _iteratorError2 = context$4$0.t0;

                            case 18:
                                context$4$0.prev = 18;
                                context$4$0.prev = 19;

                                if (!_iteratorNormalCompletion2 && _iterator2["return"]) {
                                    _iterator2["return"]();
                                }

                            case 21:
                                context$4$0.prev = 21;

                                if (!_didIteratorError2) {
                                    context$4$0.next = 24;
                                    break;
                                }

                                throw _iteratorError2;

                            case 24:
                                return context$4$0.finish(21);

                            case 25:
                                return context$4$0.finish(18);

                            case 26:
                            case "end":
                                return context$4$0.stop();
                        }
                    }, value, this, [[3, 14, 18, 26], [19,, 21, 25]]);
                })
            }]);

            return Classroom;
        })();

        var scienceClass = new Classroom("Tim", "Sue", "Joy");
        var students = [];
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
            for (var _iterator3 = scienceClass[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                var student = _step3.value;

                students.push(student);
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

        expect(students).toEqual(["Tim", "Sue", "Joy"]);
    });

    it("generators are lazy", function () {

        var random = regeneratorRuntime.mark(function random() {
            return regeneratorRuntime.wrap(function random$(context$3$0) {
                while (1) switch (context$3$0.prev = context$3$0.next) {
                    case 0:
                        if (!true) {
                            context$3$0.next = 6;
                            break;
                        }

                        console.log("make random");
                        context$3$0.next = 4;
                        return Math.random();

                    case 4:
                        context$3$0.next = 0;
                        break;

                    case 6:
                    case "end":
                        return context$3$0.stop();
                }
            }, random, this);
        });

        var filter = regeneratorRuntime.mark(function filter(items, predicate) {
            var _iteratorNormalCompletion4, _didIteratorError4, _iteratorError4, _iterator4, _step4, item;

            return regeneratorRuntime.wrap(function filter$(context$3$0) {
                while (1) switch (context$3$0.prev = context$3$0.next) {
                    case 0:
                        _iteratorNormalCompletion4 = true;
                        _didIteratorError4 = false;
                        _iteratorError4 = undefined;
                        context$3$0.prev = 3;
                        _iterator4 = items[Symbol.iterator]();

                    case 5:
                        if (_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done) {
                            context$3$0.next = 14;
                            break;
                        }

                        item = _step4.value;

                        console.log("filter", item);

                        if (!predicate(item)) {
                            context$3$0.next = 11;
                            break;
                        }

                        context$3$0.next = 11;
                        return item;

                    case 11:
                        _iteratorNormalCompletion4 = true;
                        context$3$0.next = 5;
                        break;

                    case 14:
                        context$3$0.next = 20;
                        break;

                    case 16:
                        context$3$0.prev = 16;
                        context$3$0.t0 = context$3$0["catch"](3);
                        _didIteratorError4 = true;
                        _iteratorError4 = context$3$0.t0;

                    case 20:
                        context$3$0.prev = 20;
                        context$3$0.prev = 21;

                        if (!_iteratorNormalCompletion4 && _iterator4["return"]) {
                            _iterator4["return"]();
                        }

                    case 23:
                        context$3$0.prev = 23;

                        if (!_didIteratorError4) {
                            context$3$0.next = 26;
                            break;
                        }

                        throw _iteratorError4;

                    case 26:
                        return context$3$0.finish(23);

                    case 27:
                        return context$3$0.finish(20);

                    case 28:
                    case "end":
                        return context$3$0.stop();
                }
            }, filter, this, [[3, 16, 20, 28], [21,, 23, 27]]);
        });

        var take = regeneratorRuntime.mark(function take(items, number) {
            var count, _iteratorNormalCompletion5, _didIteratorError5, _iteratorError5, _iterator5, _step5, item;

            return regeneratorRuntime.wrap(function take$(context$3$0) {
                while (1) switch (context$3$0.prev = context$3$0.next) {
                    case 0:
                        count = 0;

                        if (!(number < 1)) {
                            context$3$0.next = 3;
                            break;
                        }

                        return context$3$0.abrupt("return");

                    case 3:
                        _iteratorNormalCompletion5 = true;
                        _didIteratorError5 = false;
                        _iteratorError5 = undefined;
                        context$3$0.prev = 6;
                        _iterator5 = items[Symbol.iterator]();

                    case 8:
                        if (_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done) {
                            context$3$0.next = 19;
                            break;
                        }

                        item = _step5.value;

                        console.log("take", item);
                        context$3$0.next = 13;
                        return item;

                    case 13:
                        count += 1;

                        if (!(count >= number)) {
                            context$3$0.next = 16;
                            break;
                        }

                        return context$3$0.abrupt("return");

                    case 16:
                        _iteratorNormalCompletion5 = true;
                        context$3$0.next = 8;
                        break;

                    case 19:
                        context$3$0.next = 25;
                        break;

                    case 21:
                        context$3$0.prev = 21;
                        context$3$0.t0 = context$3$0["catch"](6);
                        _didIteratorError5 = true;
                        _iteratorError5 = context$3$0.t0;

                    case 25:
                        context$3$0.prev = 25;
                        context$3$0.prev = 26;

                        if (!_iteratorNormalCompletion5 && _iterator5["return"]) {
                            _iterator5["return"]();
                        }

                    case 28:
                        context$3$0.prev = 28;

                        if (!_didIteratorError5) {
                            context$3$0.next = 31;
                            break;
                        }

                        throw _iteratorError5;

                    case 31:
                        return context$3$0.finish(28);

                    case 32:
                        return context$3$0.finish(25);

                    case 33:
                    case "end":
                        return context$3$0.stop();
                }
            }, take, this, [[6, 21, 25, 33], [26,, 28, 32]]);
        });

        var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        var result = take(filter(numbers, function (n) {
            return n % 2;
        }), 2);
        expect(Array.from(result)).toEqual([1, 3]);

        var result2 = take(filter(random(), function (n) {
            return n < 0.5;
        }), 2);
        expect(Array.from(result2).length).toBe(2);
    });

    it("can be delegated", function () {

        var inner = regeneratorRuntime.mark(function inner() {
            return regeneratorRuntime.wrap(function inner$(context$3$0) {
                while (1) switch (context$3$0.prev = context$3$0.next) {
                    case 0:
                        context$3$0.next = 2;
                        return "Hello";

                    case 2:
                    case "end":
                        return context$3$0.stop();
                }
            }, inner, this);
        });

        var outer = regeneratorRuntime.mark(function outer() {
            return regeneratorRuntime.wrap(function outer$(context$3$0) {
                while (1) switch (context$3$0.prev = context$3$0.next) {
                    case 0:
                        return context$3$0.delegateYield(inner(), "t0", 1);

                    case 1:
                        context$3$0.next = 3;
                        return "World";

                    case 3:
                    case "end":
                        return context$3$0.stop();
                }
            }, outer, this);
        });

        var result = Array.from(outer());
        expect(result).toEqual(["Hello", "World"]);
    });

    it("can call into next", function () {
        var range = regeneratorRuntime.mark(function range(start, end) {
            var current, newValue;
            return regeneratorRuntime.wrap(function range$(context$3$0) {
                while (1) switch (context$3$0.prev = context$3$0.next) {
                    case 0:
                        current = start;

                    case 1:
                        if (!(current < end)) {
                            context$3$0.next = 8;
                            break;
                        }

                        context$3$0.next = 4;
                        return current;

                    case 4:
                        newValue = context$3$0.sent;

                        current = newValue ? newValue : current + 1;
                        context$3$0.next = 1;
                        break;

                    case 8:
                    case "end":
                        return context$3$0.stop();
                }
            }, range, this);
        });

        var results = [];
        var iterator = range(0, 3);
        results.push(iterator.next().value);
        results.push(iterator.next(2).value);
        results.push(iterator.next().value);

        expect(results).toEqual([0, 2, undefined]);
    });

    it("generator iterators can throw", function () {});
});

// todo