"use strict";
describe("rest parameters", function() {
  it("is like varargs", function() {
    var doWork = function(name) {
      for (var numbers = [],
          $__0 = 1; $__0 < arguments.length; $__0++)
        $traceurRuntime.setProperty(numbers, $__0 - 1, arguments[$traceurRuntime.toProperty($__0)]);
      var result = 0;
      numbers.forEach(function(n) {
        result += n;
      });
      return result;
    };
    var result = doWork("Scott", 1, 2, 3);
    expect(result).toBe(6);
  });
  it("will be empty if nothing passed", function() {
    var doWork = function() {
      for (var numbers = [],
          $__0 = 0; $__0 < arguments.length; $__0++)
        $traceurRuntime.setProperty(numbers, $__0, arguments[$traceurRuntime.toProperty($__0)]);
      return numbers;
    };
    var result = doWork();
    expect(result.length).toBe(0);
  });
});

//# sourceMappingURL=rest.js.map