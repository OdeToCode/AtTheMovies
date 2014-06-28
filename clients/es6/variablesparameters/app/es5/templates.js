"use strict";
var $__0 = Object.freeze(Object.defineProperties(["", " + ", " is ", ""], {raw: {value: Object.freeze(["", " + ", " is ", ""])}}));
describe("template literals", function() {
  it("can easily combine literals and data", function() {
    var doWork = function(name) {
      return ("Hello, " + name);
    };
    var result = doWork("Scott");
    expect(result).toBe("Hello, Scott");
  });
  it("can help build URLs", function() {
    var category = "music";
    var id = 2112;
    var url = ("http://apiserver/" + category + "/" + id);
    expect(url).toBe("http://apiserver/music/2112");
  });
  it("can use tags", function() {
    var upper = function(strings) {
      for (var values = [],
          $__1 = 1; $__1 < arguments.length; $__1++)
        $traceurRuntime.setProperty(values, $__1 - 1, arguments[$traceurRuntime.toProperty($__1)]);
      var result = "";
      for (var i = 0; i < strings.length; i++) {
        result += strings[$traceurRuntime.toProperty(i)];
        if (i < values.length) {
          result += values[$traceurRuntime.toProperty(i)];
        }
      }
      return result.toUpperCase();
    };
    var x = 1;
    var y = 3;
    var result = upper($__0, x, y, (x + y));
    expect(result).toBe("1 + 3 IS 4");
  });
});

//# sourceMappingURL=templates.js.map