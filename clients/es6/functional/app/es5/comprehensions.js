"use strict";
describe("array comprehensions", function() {
  it("can create arrays", function() {
    var range = $traceurRuntime.initGeneratorFunction(function $__6(start, end) {
      var i;
      return $traceurRuntime.createGeneratorInstance(function($ctx) {
        while (true)
          switch ($ctx.state) {
            case 0:
              i = start;
              $ctx.state = 7;
              break;
            case 7:
              $ctx.state = (i <= end) ? 1 : -2;
              break;
            case 4:
              i++;
              $ctx.state = 7;
              break;
            case 1:
              $ctx.state = 2;
              return i;
            case 2:
              $ctx.maybeThrow();
              $ctx.state = 4;
              break;
            default:
              return $ctx.end();
          }
      }, $__6, this);
    });
    var n1 = (function() {
      var $__0 = 0,
          $__1 = [];
      for (var $__2 = range(0, 3)[$traceurRuntime.toProperty(Symbol.iterator)](),
          $__3; !($__3 = $__2.next()).done; ) {
        try {
          throw undefined;
        } catch (x) {
          x = $__3.value;
          $traceurRuntime.setProperty($__1, $__0++, x);
        }
      }
      return $__1;
    }());
    expect(n1).toEqual([0, 1, 2, 3]);
    var n2 = (function() {
      var $__0 = 0,
          $__1 = [];
      for (var $__2 = range(0, 3)[$traceurRuntime.toProperty(Symbol.iterator)](),
          $__3; !($__3 = $__2.next()).done; ) {
        try {
          throw undefined;
        } catch (x) {
          x = $__3.value;
          if (x < 2)
            $traceurRuntime.setProperty($__1, $__0++, x);
        }
      }
      return $__1;
    }());
    expect(n2).toEqual([0, 1]);
    var n3 = (function() {
      var $__0 = 0,
          $__1 = [];
      for (var $__2 = range(0, 3)[$traceurRuntime.toProperty(Symbol.iterator)](),
          $__3; !($__3 = $__2.next()).done; ) {
        try {
          throw undefined;
        } catch (x) {
          x = $__3.value;
          if (x > 0)
            $traceurRuntime.setProperty($__1, $__0++, x * x);
        }
      }
      return $__1;
    }());
    expect(n3).toEqual([1, 4, 9]);
    var n4 = (function() {
      var $__0 = 0,
          $__1 = [];
      for (var $__4 = range(0, 1)[$traceurRuntime.toProperty(Symbol.iterator)](),
          $__5; !($__5 = $__4.next()).done; ) {
        try {
          throw undefined;
        } catch (x) {
          x = $__5.value;
          for (var $__2 = range(0, 1)[$traceurRuntime.toProperty(Symbol.iterator)](),
              $__3; !($__3 = $__2.next()).done; ) {
            try {
              throw undefined;
            } catch (y) {
              y = $__3.value;
              $traceurRuntime.setProperty($__1, $__0++, x + y);
            }
          }
        }
      }
      return $__1;
    }());
    expect(n4).toEqual([0, 1, 1, 2]);
    expect(n4.next).toBeUndefined();
  });
});
describe("generator comprehensions", function() {
  it("can create iterables", function() {
    var range = $traceurRuntime.initGeneratorFunction(function $__6(start, end) {
      var i;
      return $traceurRuntime.createGeneratorInstance(function($ctx) {
        while (true)
          switch ($ctx.state) {
            case 0:
              i = start;
              $ctx.state = 7;
              break;
            case 7:
              $ctx.state = (i <= end) ? 1 : -2;
              break;
            case 4:
              i++;
              $ctx.state = 7;
              break;
            case 1:
              $ctx.state = 2;
              return i;
            case 2:
              $ctx.maybeThrow();
              $ctx.state = 4;
              break;
            default:
              return $ctx.end();
          }
      }, $__6, this);
    });
    var n1 = ($traceurRuntime.initGeneratorFunction(function $__7() {
      var $__2,
          $__3,
          x;
      return $traceurRuntime.createGeneratorInstance(function($ctx) {
        while (true)
          switch ($ctx.state) {
            case 0:
              $__2 = [1, 2, 3][$traceurRuntime.toProperty(Symbol.iterator)]();
              $ctx.state = 4;
              break;
            case 4:
              $ctx.state = (!($__3 = $__2.next()).done) ? 5 : -2;
              break;
            case 5:
              x = $__3.value;
              $ctx.state = 6;
              break;
            case 6:
              $ctx.state = 2;
              return x;
            case 2:
              $ctx.maybeThrow();
              $ctx.state = 4;
              break;
            default:
              return $ctx.end();
          }
      }, $__7, this);
    })());
    expect(n1.next).toBeDefined();
    expect(Array.from(n1)).toEqual([1, 2, 3]);
  });
});

//# sourceMappingURL=comprehensions.js.map