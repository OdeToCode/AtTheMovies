"use strict";

describe("new array methods", function () {

  it("has values, key, and entries", function () {
    var names = ["Scott", "Alex"];

    var values = names.values();
    var keys = names.keys();
    var entries = names.entries();

    expect(values.next().value).toBe("Scott");
    expect(keys.next().value).toBe(0);
    expect(entries.next().value[1]).toBe("Scott");

    expect(names.values).toBeDefined();
    expect(names.keys).toBeDefined();
    expect(names.entries).toBeDefined();

    expect(names.wat).toBeUndefined();
  });

  it("adds find and findIndex", function () {

    var numbers = [15, 11, 3];
    var people = [{ name: "Scott" }, { name: "Allen" }];

    var eleven = numbers.find(function (n) {
      return n === 11;
    });
    var index = people.findIndex(function (p) {
      return p.name === "Allen";
    });

    expect(eleven).toBe(11);
    expect(index).toBe(1);
  });

  it("create new arrays with of and from", function () {

    var numbers = Array.of(15, 11, 3);
    expect(numbers.length).toBe(3);

    var squared = Array.from(numbers, function (n) {
      return n * n;
    });
    expect(squared[2]).toBe(9);
  });
});