"use strict";
var __moduleName = "../../clients/es6/tests/es5js/default_parameters";
describe("default parameters", function() {
  var getDefaultName = function() {
    return "Scott";
  };
  var getGreeting = function() {
    var name = arguments[0] !== (void 0) ? arguments[0] : getDefaultName();
    return "Hello, " + name;
  };
  it("will provide defaults for missing params", function() {
    var result = getGreeting();
    expect(result).toBe("Hello, Scott");
  });
  it("will not provide defaults for params", function() {
    var result = getGreeting("Alex");
    expect(result).toBe("Hello, Alex");
  });
});

//# sourceMappingURL=default_parameters.js.map
