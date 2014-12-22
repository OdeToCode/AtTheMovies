"use strict";
describe("arrow functions", function() {
  it("provide a short syntax for defining functions", function() {
    var add = (function(x, y) {
      return x + y;
    });
    var square = (function(x) {
      return x * x;
    });
    var log = (function() {
      return console.log("hello!");
    });
    log();
    var result = square(add(3, 5));
    expect(result).toBe(64);
  });
  it("can be used with map and forEach", function() {
    var result = [1, 2, 3, 4].map((function(n) {
      return n * 2;
    }));
    expect(result).toEqual([2, 4, 6, 8]);
    var sum = 0;
    [1, 2, 3, 4].forEach((function(n) {
      return sum += n;
    }));
    expect(sum).toBe(10);
  });
  it("lexically binds to this", function(done) {
    var $__0 = this;
    this.userName = "Scott";
    console.log(this);
    setTimeout((function() {
      console.log($__0);
      expect($__0.userName).toBe("Scott");
      done();
    }), 0);
  });
  it("lexically binds to this (with class)", function(done) {
    var $__0 = this;
    this.userName = "Scott";
    console.log(this);
    setTimeout((function() {
      console.log($__0);
      expect($__0.userName).toBe("Scott");
      done();
    }), 0);
  });
});
