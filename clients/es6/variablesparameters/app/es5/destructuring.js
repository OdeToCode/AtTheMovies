"use strict";
describe("destructuring", function() {
  "use strict";
  it("can destructure arrays", function() {
    var doWork = function() {
      return [1, 3, 2];
    };
    var $__0 = $traceurRuntime.assertObject(doWork()),
        x = $__0[1],
        y = $__0[2],
        z = $__0[3];
    expect(x).toBe(3);
    expect(y).toBe(2);
    expect(z).toBeUndefined();
  });
  it("can destructure objects", function() {
    var doWork = function() {
      return {
        firstName: "Scott",
        lastName: "Allen",
        handles: {twitter: "OdeToCode"}
      };
    };
    var $__0 = $traceurRuntime.assertObject(doWork()),
        firstName = $__0.firstName,
        twitter = $traceurRuntime.assertObject($__0.handles).twitter;
    expect(firstName).toBe("Scott");
    expect(twitter).toBe("OdeToCode");
  });
  it("works with parameters", function() {
    var doWork = function(url, $__0) {
      var data = $__0.data,
          cache = $__0.cache,
          headers = $__0.headers;
      return data;
    };
    var result = doWork("api/test", {
      data: "test",
      cache: false
    });
    expect(result).toBe("test");
  });
});

//# sourceMappingURL=destructuring.js.map