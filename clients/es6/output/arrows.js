"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

describe("arrow functions", function () {

    it("provide a short syntax for defining functions", function () {

        var add = function add(x, y) {
            return x + y;
        };
        var square = function square(x) {
            return x * x;
        };
        var log = function log() {
            return console.log("hello!");
        };

        var result = square(add(3, 5));
        expect(result).toBe(64);
    });

    it("can be used with map and forEach", function () {

        var result = [1, 2, 3, 4].map(function (n) {
            return n * 2;
        });
        expect(result).toEqual([2, 4, 6, 8]);

        var sum = 0;
        [1, 2, 3, 4].forEach(function (n) {
            return sum += n;
        });
        expect(sum).toBe(10);
    });

    it("lexically binds to this with a class", function (done) {
        var Person = (function () {
            function Person(name) {
                _classCallCheck(this, Person);

                this.name = name;
            }

            _createClass(Person, [{
                key: "doWork",
                value: function doWork(callback) {
                    var _this = this;

                    setTimeout(function () {
                        return callback(_this.name);
                    }, 15);
                }
            }]);

            return Person;
        })();

        var person = new Person("Scott");
        person.doWork(function (result) {
            expect(result).toBe("Scott");
            done();
        });
    });

    it("lexically binds to this", function (done) {
        var _this2 = this;

        this.userName = "Scott";
        setTimeout(function () {
            expect(_this2.userName).toBe("Scott");
            done();
        }, 0);
    });

    it("can be used in jasmine", function () {
        var numbers = [1, 3, 4];
        expect(numbers.length).toBe(3);
    });

    it("also works with lodash", function () {
        var characters = [{ name: "barney", age: 36, blocked: false }, { name: "fred", age: 40, blocked: true }, { name: "pebbles", age: 1, blocked: false }];

        var result1 = _.find(characters, function (character) {
            return character.age < 40;
        });

        var result2 = _.find(characters, function (c) {
            return c.age < 40;
        });

        expect(result2.name).toBe("barney");
    });
});