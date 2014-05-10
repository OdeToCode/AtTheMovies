"use strict";
var __moduleName = "../../clients/es6/tests/es5js/spread_parameters";
describe("spread parameters", function() {
  it("should spread when calling a function", function() {
    var f = function(x, y, z) {
      return x + y + z;
    };
    var data = [1, 2, 3];
    var result = f.apply(null, $traceurRuntime.toObject(data));
    expect(result).toEqual(6);
  });
  it("should spread into an array", function() {
    var data = [1, 2, 3];
    var result = $traceurRuntime.spread([0], data, [4]);
    expect(result).toEqual([0, 1, 2, 3, 4]);
  });
});

//# sourceMappingURL=spread_parameters.js.map
