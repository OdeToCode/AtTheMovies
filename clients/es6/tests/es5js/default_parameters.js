"use strict";
var __moduleName = "../../clients/es6/tests/es5js/default_parameters";
describe("default parameters", function() {
  var getXValue = function() {
    return 2;
  };
  var doWork = function() {
    var x = arguments[0] !== (void 0) ? arguments[0] : getXValue();
    var y = arguments[1] !== (void 0) ? arguments[1] : 3;
    return x + y;
  };
  it("will provide defaults for missing params", function() {
    var result = doWork();
    expect(result).toBe(5);
  });
  it("will not provide defaults when params exist", function() {
    var result = doWork(3, 4);
    expect(result).toBe(7);
  });
});

//# sourceMappingURL=default_parameters.js.map
