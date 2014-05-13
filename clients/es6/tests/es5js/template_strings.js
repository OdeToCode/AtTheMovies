"use strict";
var __moduleName = "../../clients/es6/tests/es5js/template_strings";
var $__0 = Object.freeze(Object.defineProperties(["", " + ", " is ", ""], {raw: {value: Object.freeze(["", " + ", " is ", ""])}}));
describe("template literals", function() {
  it("provides interpolation features", function() {
    var name = "world";
    var result = ("Hello, " + name);
    expect(result).toBe("Hello, world");
  });
  it("can be tagged with a custom function", function() {
    var upper = function(strings) {
      for (var values = [],
          $__1 = 1; $__1 < arguments.length; $__1++)
        $traceurRuntime.setProperty(values, $__1 - 1, arguments[$traceurRuntime.toProperty($__1)]);
      console.log(strings, values);
      var result = '';
      for (var i = 0; i < strings.length; i++) {
        result = result + strings[$traceurRuntime.toProperty(i)];
        if (i < values.length) {
          result = result + values[$traceurRuntime.toProperty(i)];
        }
      }
      return result.toUpperCase();
    };
    var x = 1;
    var y = 3;
    var result = upper($__0, x, y, (x + y));
    expect(result).toEqual("1 + 3 IS 4");
  });
});

//# sourceMappingURL=template_strings.js.map
