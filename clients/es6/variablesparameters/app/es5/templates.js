"use strict";
var $__0 = Object.freeze(Object.defineProperties(["Hello, ", " ", "!!"], {raw: {value: Object.freeze(["Hello, ", " ", "!!"])}})),
    $__1 = Object.freeze(Object.defineProperties(["", " + ", " is ", ""], {raw: {value: Object.freeze(["", " + ", " is ", ""])}}));
describe("template literals", function() {
  it("can easily combine literals and data", function() {
    var showTheMath = function(x, y) {
      return (x + " + " + y + " is " + (x + y));
    };
    var result = showTheMath(3, 4);
    expect(result).toBe("3 + 4 is 7");
  });
  it("can be multi-line", function() {
    var message = "This is\r\n                       a short, but multi-line message";
    console.log(message);
    expect(message.length).toBe(63);
  });
  it("can help build URLs", function() {
    var category = "music";
    var id = 2112;
    var url = ("http://apiserver/" + category + "/" + id);
    expect(url).toBe("http://apiserver/music/2112");
  });
  it("breaking down tags", function() {
    var test = function(literals) {
      for (var values = [],
          $__2 = 1; $__2 < arguments.length; $__2++)
        $traceurRuntime.setProperty(values, $__2 - 1, arguments[$traceurRuntime.toProperty($__2)]);
      expect(literals.length).toBe(3);
      expect(literals[0]).toBe("Hello, ");
      expect(literals[1]).toBe(" ");
      expect(literals[2]).toBe("!!");
      expect(values.length).toBe(2);
      expect(values[0]).toBe("Allen");
      expect(values[1]).toBe("Scott");
      return "test";
    };
    var firstName = "Scott";
    var lastName = "Allen";
    var result = test($__0, lastName, firstName);
    expect(result).toBe("test");
  });
  it("can use tags", function() {
    var upper = function(strings) {
      for (var values = [],
          $__2 = 1; $__2 < arguments.length; $__2++)
        $traceurRuntime.setProperty(values, $__2 - 1, arguments[$traceurRuntime.toProperty($__2)]);
      var result = "";
      {
        try {
          throw undefined;
        } catch ($i) {
          $i = 0;
          for (; $i < strings.length; $i++) {
            try {
              throw undefined;
            } catch (i) {
              i = $i;
              try {
                result += strings[$traceurRuntime.toProperty(i)];
                if (i < values.length) {
                  result += values[$traceurRuntime.toProperty(i)];
                }
              } finally {
                $i = i;
              }
            }
          }
        }
      }
      return result.toUpperCase();
    };
    var x = 1;
    var y = 3;
    var result = upper($__1, x, y, (x + y));
    expect(result).toBe("1 + 3 IS 4");
  });
});

//# sourceMappingURL=templates.js.map