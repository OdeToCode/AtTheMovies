"use strict";
describe("how let works", function() {
  it("will not have block scope with var", function() {
    var doWork = function() {
      for (var x = 0; x < 3; x++) {}
      return x;
    };
    var result = doWork(true);
    expect(result).toBe(3);
  });
  it("will provide block scoping, unlike var", function() {
    var doWork = function(flag) {
      if (flag) {
        var x = 3;
        return x;
      }
    };
    var result = doWork(true);
    expect(result).toBe(3);
  });
  it("will provide block scoping with for", function() {
    var doWork = function() {
      for (var i = 0; i < 10; i++) {}
      return 0;
    };
    var result = doWork();
    expect(result).toBe(0);
  });
});
