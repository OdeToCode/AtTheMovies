"use strict";
describe("iterators", function() {
  it("works with iterator method at low level", function() {
    var sum = 0;
    var numbers = [1, 2, 3, 4];
    var iterator = numbers.values();
    var next = iterator.next();
    while (!next.done) {
      sum += next.value;
      next = iterator.next();
    }
    expect(sum).toBe(10);
  });
  it("doesn't have problems when the sequence changes", (function() {
    var count = 0;
    var sum = 0;
    var numbers = [1, 2, 3, 4];
    var iterator = numbers.values();
    var next = iterator.next();
    while (!next.done) {
      if (++count == 2) {
        numbers.push(5);
        numbers.unshift(1);
      }
      sum += next.value;
      console.log(next.value);
      next = iterator.next();
    }
    expect(sum).toBe(17);
  }));
  it("cannot 'for in' over iterable", function() {
    var sum = 0;
    var numbers = [1, 2, 3, 4];
    for (var i in numbers) {
      sum += i;
    }
    expect(sum === 10).toBe(false);
    expect(typeof sum).toBe("string");
  });
  it("for of will work with a string", function() {
    var result = "";
    var message = "Hello";
    for (var $__3 = message[$traceurRuntime.toProperty(Symbol.iterator)](),
        $__4; !($__4 = $__3.next()).done; ) {
      var c = $__4.value;
      {
        result += c;
      }
    }
    expect(result).toBe("Hello");
  });
  it("for in only gets available index", function() {
    var sum = 0;
    var numbers = [1, 2, 3, 4];
    for (var i in numbers) {
      sum += numbers[i];
    }
    expect(sum).toBe(10);
  });
  it("can 'for of' over iterable", function() {
    var sum = 0;
    var numbers = [1, 2, 3, 4];
    for (var $__3 = numbers[$traceurRuntime.toProperty(Symbol.iterator)](),
        $__4; !($__4 = $__3.next()).done; ) {
      var n = $__4.value;
      {
        sum += n;
      }
    }
    expect(sum).toBe(10);
  });
  it("can get an iterator from array the hard way", function() {
    var sum = 0;
    var numbers = [1, 2, 3, 4];
    var iterator = numbers[Symbol.iterator]();
    var next = iterator.next();
    while (!next.done) {
      sum += next.value;
      next = iterator.next();
    }
    expect(sum).toBe(10);
  });
  it("can build your own", function() {
    var $__2;
    var Classroom = function Classroom() {
      this.students = ["Tim", "Joy", "Sue"];
    };
    ($traceurRuntime.createClass)(Classroom, ($__2 = {}, Object.defineProperty($__2, Symbol.iterator, {
      value: function() {
        var $__0 = this;
        var index = 0;
        return {next: (function() {
            if (index < $__0.students.length) {
              index += 1;
              return {
                done: false,
                value: $__0.students[index - 1]
              };
            }
            return {
              value: undefined,
              done: true
            };
          })};
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), $__2), {});
    var scienceClass = new Classroom();
    var result = [];
    for (var $__3 = scienceClass[$traceurRuntime.toProperty(Symbol.iterator)](),
        $__4; !($__4 = $__3.next()).done; ) {
      var name = $__4.value;
      {
        result.push(name);
      }
    }
    expect(result).toEqual(["Tim", "Joy", "Sue"]);
  });
  it("can build your own with a class", function() {
    var $__2;
    var Classroom = function Classroom() {
      this.students = ["Tim", "Joy", "Sue"];
    };
    ($traceurRuntime.createClass)(Classroom, ($__2 = {}, Object.defineProperty($__2, Symbol.iterator, {
      value: function() {
        return new ArrayIterator(this.students);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), $__2), {});
    var ArrayIterator = function ArrayIterator(array) {
      this.array = array;
      this.index = 0;
    };
    ($traceurRuntime.createClass)(ArrayIterator, {next: function() {
        var result = {
          value: undefined,
          done: true
        };
        if (this.index < this.array.length) {
          result.value = this.array[this.index];
          result.done = false;
          this.index += 1;
        }
        return result;
      }}, {});
    var scienceClass = new Classroom();
    var result = [];
    for (var $__3 = scienceClass[$traceurRuntime.toProperty(Symbol.iterator)](),
        $__4; !($__4 = $__3.next()).done; ) {
      var name = $__4.value;
      {
        result.push(name);
      }
    }
    expect(result).toEqual(["Tim", "Joy", "Sue"]);
  });
  it("can take a parameter from next(param)", function() {
    var range = $traceurRuntime.initGeneratorFunction(function $__5(start, end) {
      var current,
          delta;
      return $traceurRuntime.createGeneratorInstance(function($ctx) {
        while (true)
          switch ($ctx.state) {
            case 0:
              current = start;
              $ctx.state = 9;
              break;
            case 9:
              $ctx.state = (current <= end) ? 1 : -2;
              break;
            case 1:
              $ctx.state = 2;
              return current;
            case 2:
              delta = $ctx.sent;
              $ctx.state = 4;
              break;
            case 4:
              current += delta || 1;
              $ctx.state = 9;
              break;
            default:
              return $ctx.end();
          }
      }, $__5, this);
    });
    var range2 = function(start, end) {
      var current = start;
      return {next: function() {
          var delta = arguments[0] !== (void 0) ? arguments[0] : 0;
          var result = {
            value: undefined,
            done: true
          };
          current += delta;
          if (current <= end) {
            result.value = current;
            result.done = false;
          }
          return result;
        }};
    };
    var result = [];
    var iterator = range2(1, 10);
    var next = iterator.next();
    while (!next.done) {
      result.push(next.value);
      next = iterator.next(next.value);
    }
    expect(result).toEqual([1, 2, 4, 8]);
  });
});
