"use strict";

function _defineProperty(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); }

describe("a symbol", function () {

    it("has a type of symbol", function () {
        var s = Symbol();
        expect(typeof s).toBe("symbol");
    });

    it("is always unique and immutable", function () {
        var s1 = Symbol("some text");
        var s2 = Symbol("some text");

        expect(s1).toEqual(s1);
        expect(s1).not.toEqual(s2);

        expect(s1.toString()).toBe("Symbol(some text)");
        expect(s2.toString()).toBe("Symbol(some text)");
    });

    it("cannot use new", function () {
        var makeSymbol = function makeSymbol() {
            return new Symbol();
        };
        expect(makeSymbol).toThrow();
    });

    it("can add entry to an object", function () {
        var _person;

        var firstName = Symbol();

        var person = (_person = {}, _defineProperty(_person, "lastName", "Allen"), _defineProperty(_person, firstName, "Scott"), _person);

        expect(person.lastName).toBe("Allen");
        expect(person[firstName]).toBe("Scott");
    });

    it("won't see symbol with for in, getOwnProps, or JSON, but can see with special symbol methods", function () {
        var firstName = Symbol();

        var person = _defineProperty({
            lastName: "Allen" }, firstName, "Scott");

        expect(person.lastName).toBe("Allen");
        expect(person[firstName]).toBe("Scott");

        var names = [];
        for (var p in person) {
            names.push(p);
        }
        expect(names.length).toBe(1);
        expect(names[0]).toBe("lastName");

        expect(Object.getOwnPropertyNames(person)).toEqual(["lastName"]);
        expect(JSON.stringify(person)).toBe("{\"lastName\":\"Allen\"}");

        expect(Object.getOwnPropertySymbols(person)).toEqual([firstName]);

        var symbol0 = Object.getOwnPropertySymbols(person)[0];
        expect(person[symbol0]).toBe("Scott");
    });

    it("provides Symbol.iterator for the @@iterator method", function () {

        var site = "OdeToCode.com";
        var values = [1, 2, 3, 4];
        var number = 45;

        expect(site[Symbol.iterator]).toBeDefined();
        expect(values[Symbol.iterator]).toBeDefined();
        expect(number[Symbol.iterator]).toBeUndefined();
    });

    it("can sum up numbers", function () {
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
});