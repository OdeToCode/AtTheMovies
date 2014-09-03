"use strict";
describe("the spread", function() {
  it("can spread an array across parameters", function() {
    var doWork = function(x, y, z) {
      return x + y + z;
    };
    var result = doWork.apply(null, $traceurRuntime.toObject([1, 2, 3]));
    expect(result).toBe(6);
  });
  it("can build arrays", function() {
    var a = [4, 5, 6];
    var b = $traceurRuntime.spread([1, 2, 3], a, [7, 8, 9]);
    expect(b).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
  it("can spread a rest paramter", function() {
    var doWork = function(x, y, z) {
      return x + y + z;
    };
    var doSomething = function() {
      for (var args = [],
          $__0 = 0; $__0 < arguments.length; $__0++)
        $traceurRuntime.setProperty(args, $__0, arguments[$traceurRuntime.toProperty($__0)]);
      return doWork.apply(null, $traceurRuntime.toObject(args));
    };
    var result = doSomething.apply(null, $traceurRuntime.toObject([1, 2, 3, 4, 5]));
    expect(result).toBe(6);
  });
  it("is better than apply", function() {
    var doWork = function(x, y, z) {
      return x + y + z;
    };
    var doSomething = function() {
      return doWork.apply(null, arguments);
    };
    var result = doSomething.apply(null, $traceurRuntime.toObject([1, 2, 3, 4, 5]));
    expect(result).toBe(6);
  });
});

//# sourceMappingURL=spread.js.map