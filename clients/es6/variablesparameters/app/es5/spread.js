"use strict";
describe("the spread", function() {
  it("can spread an array across parameters", function() {
    var doWork = function(x, y, z) {
      return x + y + z;
    };
    var result = doWork.apply(null, $traceurRuntime.toObject([1, 2, 3]));
    expect(result).toBe(6);
  });
});

//# sourceMappingURL=spread.js.map