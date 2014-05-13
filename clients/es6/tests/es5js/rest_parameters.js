"use strict";
var __moduleName = "../../clients/es6/tests/es5js/rest_parameters";
describe("rest parameter", function() {
  var sum = function() {
    for (var args = [],
        $__0 = 0; $__0 < arguments.length; $__0++)
      $traceurRuntime.setProperty(args, $__0, arguments[$traceurRuntime.toProperty($__0)]);
    var result = 0;
    for (var i = 0; i < args.length; i++) {
      result += args[$traceurRuntime.toProperty(i)];
    }
    return result;
  };
  it("is like varargs!", function() {
    var result = sum(-2, 5, 1, 2);
    expect(result).toBe(6);
  });
});

//# sourceMappingURL=rest_parameters.js.map
