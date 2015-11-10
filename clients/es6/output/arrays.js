"use strict";

describe("new array methods", function () {

  it("has values, key, and entries", function () {
    var names = ["Scott", "Alex"];

    expect(names.values).toBeDefined();
    expect(names.keys).toBeDefined();
    expect(names.entries).toBeDefined();

    expect(names.wat).toBeUndefined();
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