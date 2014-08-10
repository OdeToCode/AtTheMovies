"use strict";
describe("how let works", function() {
  it("will not have block scope with var", function() {
    var doWork = function() {
      {
        try {
          throw undefined;
        } catch ($x) {
          $x = 0;
          for (; $x < 3; $x++) {
            try {
              throw undefined;
            } catch (x) {
              x = $x;
              try {} finally {
                $x = x;
              }
            }
          }
        }
      }
      return x;
    };
    var result = doWork(true);
    expect(result).toBe(3);
  });
  it("will provide block scoping, unlike var", function() {
    var doWork = function(flag) {
      if (flag) {
        try {
          throw undefined;
        } catch (x) {
          x = 3;
          return x;
        }
      }
    };
    var result = doWork(true);
    expect(result).toBe(3);
  });
  it("will provide block scoping with for", function() {
    var doWork = function() {
      {
        try {
          throw undefined;
        } catch ($i) {
          $i = 0;
          for (; $i < 10; $i++) {
            try {
              throw undefined;
            } catch (i) {
              i = $i;
              try {} finally {
                $i = i;
              }
            }
          }
        }
      }
      return 0;
    };
    var result = doWork();
    expect(result).toBe(0);
  });
});

//# sourceMappingURL=let.js.map