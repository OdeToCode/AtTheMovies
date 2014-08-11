"use strict";
describe("default parameters", function() {
  it("provides defaults", function() {
    var doWork = function() {
      var name = arguments[0] !== (void 0) ? arguments[0] : "Scott";
      return name;
    };
    var result = doWork();
    expect(result).toBe("Scott");
  });
  it("old way", function() {
    var doWork = function() {
      var name = arguments[0] !== (void 0) ? arguments[0] : "Scott";
      return name;
    };
    expect(doWork()).toBe("Scott");
  });
  it("will provide a value for undefined", function() {
    var doWork = function() {
      var a = arguments[0] !== (void 0) ? arguments[0] : 1;
      var b = arguments[1] !== (void 0) ? arguments[1] : 2;
      var c = arguments[2] !== (void 0) ? arguments[2] : 3;
      return [a, b, c];
    };
    var $__0 = $traceurRuntime.assertObject(doWork(5, undefined)),
        a = $__0[0],
        b = $__0[1],
        c = $__0[2];
    expect(a).toBe(5);
    expect(b).toBe(2);
    expect(c).toBe(3);
  });
  it("works with destructuring", function() {
    var $__1;
    var doWork = function(url, $__0) {
      var data = ($__1 = $__0.data) === void 0 ? "Scott" : $__1,
          cache = ($__1 = $__0.cache) === void 0 ? true : $__1;
      return data;
    };
    var result = doWork("api/test", {cache: false});
    expect(result).toBe("Scott");
  });
});

//# sourceMappingURL=defaults.js.map