"use strict";
describe("generators", function() {
  it("are one way to make iterables", function() {
    var numbers = $traceurRuntime.initGeneratorFunction(function $__5() {
      return $traceurRuntime.createGeneratorInstance(function($ctx) {
        while (true)
          switch ($ctx.state) {
            case 0:
              $ctx.state = 2;
              return 1;
            case 2:
              $ctx.maybeThrow();
              $ctx.state = 4;
              break;
            case 4:
              $ctx.state = 6;
              return 2;
            case 6:
              $ctx.maybeThrow();
              $ctx.state = 8;
              break;
            case 8:
              $ctx.state = 10;
              return 3;
            case 10:
              $ctx.maybeThrow();
              $ctx.state = -2;
              break;
            default:
              return $ctx.end();
          }
      }, $__5, this);
    });
    var sum = 0;
    for (var $__2 = numbers()[$traceurRuntime.toProperty(Symbol.iterator)](),
        $__3; !($__3 = $__2.next()).done; ) {
      var n = $__3.value;
      {
        sum += n;
      }
    }
    expect(sum).toBe(6);
  });
  it("you can build an iterable object", function() {
    var $__1;
    var Classroom = function Classroom() {
      for (var students = [],
          $__4 = 0; $__4 < arguments.length; $__4++)
        students[$__4] = arguments[$__4];
      this.students = students;
    };
    ($traceurRuntime.createClass)(Classroom, ($__1 = {}, Object.defineProperty($__1, Symbol.iterator, {
      value: $traceurRuntime.initGeneratorFunction(function $__5() {
        var $__2,
            $__3,
            s;
        return $traceurRuntime.createGeneratorInstance(function($ctx) {
          while (true)
            switch ($ctx.state) {
              case 0:
                $__2 = this.students[$traceurRuntime.toProperty(Symbol.iterator)]();
                $ctx.state = 4;
                break;
              case 4:
                $ctx.state = (!($__3 = $__2.next()).done) ? 5 : -2;
                break;
              case 5:
                s = $__3.value;
                $ctx.state = 6;
                break;
              case 6:
                $ctx.state = 2;
                return s;
              case 2:
                $ctx.maybeThrow();
                $ctx.state = 4;
                break;
              default:
                return $ctx.end();
            }
        }, $__5, this);
      }),
      configurable: true,
      enumerable: true,
      writable: true
    }), $__1), {});
    var scienceClass = new Classroom("Tim", "Sue", "Joy");
    var students = [];
    for (var $__2 = scienceClass[$traceurRuntime.toProperty(Symbol.iterator)](),
        $__3; !($__3 = $__2.next()).done; ) {
      var student = $__3.value;
      {
        students.push(student);
      }
    }
    expect(students).toEqual(["Tim", "Sue", "Joy"]);
  });
  it("can build your own iterable", function() {
    var random = $traceurRuntime.initGeneratorFunction(function $__5() {
      return $traceurRuntime.createGeneratorInstance(function($ctx) {
        while (true)
          switch ($ctx.state) {
            case 0:
              $ctx.state = (true) ? 1 : -2;
              break;
            case 1:
              $ctx.state = 2;
              return Math.random();
            case 2:
              $ctx.maybeThrow();
              $ctx.state = 0;
              break;
            default:
              return $ctx.end();
          }
      }, $__5, this);
    });
    var filter = $traceurRuntime.initGeneratorFunction(function $__6(items, predicate) {
      var $__2,
          $__3,
          item;
      return $traceurRuntime.createGeneratorInstance(function($ctx) {
        while (true)
          switch ($ctx.state) {
            case 0:
              $__2 = items[$traceurRuntime.toProperty(Symbol.iterator)]();
              $ctx.state = 4;
              break;
            case 4:
              $ctx.state = (!($__3 = $__2.next()).done) ? 8 : -2;
              break;
            case 8:
              item = $__3.value;
              $ctx.state = 9;
              break;
            case 9:
              console.log("filter", item);
              $ctx.state = 7;
              break;
            case 7:
              $ctx.state = (predicate(item)) ? 1 : 4;
              break;
            case 1:
              $ctx.state = 2;
              return item;
            case 2:
              $ctx.maybeThrow();
              $ctx.state = 4;
              break;
            default:
              return $ctx.end();
          }
      }, $__6, this);
    });
    var take = $traceurRuntime.initGeneratorFunction(function $__7(items, number) {
      var count,
          $__2,
          $__3,
          item;
      return $traceurRuntime.createGeneratorInstance(function($ctx) {
        while (true)
          switch ($ctx.state) {
            case 0:
              count = 0;
              $ctx.state = 20;
              break;
            case 20:
              $ctx.state = (number < 1) ? 1 : 2;
              break;
            case 1:
              $ctx.state = -2;
              break;
            case 2:
              $__2 = items[$traceurRuntime.toProperty(Symbol.iterator)]();
              $ctx.state = 9;
              break;
            case 9:
              $ctx.state = (!($__3 = $__2.next()).done) ? 15 : -2;
              break;
            case 15:
              item = $__3.value;
              $ctx.state = 16;
              break;
            case 16:
              console.log("take", item);
              $ctx.state = 12;
              break;
            case 12:
              $ctx.state = 5;
              return item;
            case 5:
              $ctx.maybeThrow();
              $ctx.state = 7;
              break;
            case 7:
              count += 1;
              $ctx.state = 14;
              break;
            case 14:
              $ctx.state = (count >= number) ? 8 : 9;
              break;
            case 8:
              $ctx.state = -2;
              break;
            default:
              return $ctx.end();
          }
      }, $__7, this);
    });
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var result = take(filter(numbers, (function(n) {
      return n % 2;
    })), 2);
    expect(Array.from(result)).toEqual([1, 3]);
    var result2 = take(filter(random(), (function(n) {
      return n < 0.5;
    })), 2);
    expect(Array.from(result2).length).toBe(2);
  });
  it("can be delegated", function() {
    var inner = $traceurRuntime.initGeneratorFunction(function $__5() {
      return $traceurRuntime.createGeneratorInstance(function($ctx) {
        while (true)
          switch ($ctx.state) {
            case 0:
              $ctx.state = 2;
              return "Hello";
            case 2:
              $ctx.maybeThrow();
              $ctx.state = -2;
              break;
            default:
              return $ctx.end();
          }
      }, $__5, this);
    });
    var outer = $traceurRuntime.initGeneratorFunction(function $__6() {
      var $__8,
          $__9;
      return $traceurRuntime.createGeneratorInstance(function($ctx) {
        while (true)
          switch ($ctx.state) {
            case 0:
              $__8 = inner()[Symbol.iterator]();
              $ctx.sent = void 0;
              $ctx.action = 'next';
              $ctx.state = 12;
              break;
            case 12:
              $__9 = $__8[$ctx.action]($ctx.sentIgnoreThrow);
              $ctx.state = 9;
              break;
            case 9:
              $ctx.state = ($__9.done) ? 3 : 2;
              break;
            case 3:
              $ctx.sent = $__9.value;
              $ctx.state = 10;
              break;
            case 2:
              $ctx.state = 12;
              return $__9.value;
            case 10:
              $ctx.state = 14;
              return "World";
            case 14:
              $ctx.maybeThrow();
              $ctx.state = -2;
              break;
            default:
              return $ctx.end();
          }
      }, $__6, this);
    });
    var result = Array.from(outer());
    expect(result).toEqual(["Hello", "World"]);
  });
  it("can call into next", function() {
    var range = $traceurRuntime.initGeneratorFunction(function $__5(start, end) {
      var current,
          newValue;
      return $traceurRuntime.createGeneratorInstance(function($ctx) {
        while (true)
          switch ($ctx.state) {
            case 0:
              current = start;
              $ctx.state = 9;
              break;
            case 9:
              $ctx.state = (current < end) ? 1 : -2;
              break;
            case 1:
              $ctx.state = 2;
              return current;
            case 2:
              newValue = $ctx.sent;
              $ctx.state = 4;
              break;
            case 4:
              current = newValue ? newValue : current + 1;
              $ctx.state = 9;
              break;
            default:
              return $ctx.end();
          }
      }, $__5, this);
    });
    var results = [];
    var iterator = range(0, 3);
    results.push(iterator.next().value);
    results.push(iterator.next(2).value);
    results.push(iterator.next().value);
    expect(results).toEqual([0, 2, undefined]);
  });
  it("generator iterators can throw", function() {
    expect(true).toBe(false);
  });
});
