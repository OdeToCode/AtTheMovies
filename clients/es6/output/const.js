"use strict";

describe("using const", function () {
  "use strict";

  it("will make a variable read-only", function () {

    var MAX_SIZE = 10;

    // MAX_SIZE = 12; //SyntaxError

    expect(MAX_SIZE).toBe(10);
  });

  it("can shadow outer declaration", function () {

    var x = 12;
    var doWork = function doWork() {

      var x = 10;
      return x;
    };

    var result = doWork();
    expect(result).toBe(10);
    expect(x).toBe(12);
  });
});