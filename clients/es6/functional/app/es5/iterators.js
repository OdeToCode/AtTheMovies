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
  it("cannot 'for in' over iterable", function() {
    var sum = 0;
    var numbers = [1, 2, 3, 4];
    for (var $i in numbers.values()) {
      try {
        throw undefined;
      } catch (i) {
        i = $i;
        sum += i;
      }
    }
    expect(sum === 10).toBe(false);
  });
  it("can 'for of' over iterable", function() {
    var sum = 0;
    var numbers = [1, 2, 3, 4];
    for (var $__3 = numbers[$traceurRuntime.toProperty(Symbol.iterator)](),
        $__4; !($__4 = $__3.next()).done; ) {
      try {
        throw undefined;
      } catch (n) {
        n = $__4.value;
        {
          sum += n;
        }
      }
    }
    expect(sum).toBe(10);
  });
  it("can get an iterator from array the hard way", function() {
    var sum = 0;
    var numbers = [1, 2, 3, 4];
    var iterator = numbers[$traceurRuntime.toProperty(Symbol.iterator)]();
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
                value: $__0.students[$traceurRuntime.toProperty(index - 1)]
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
      try {
        throw undefined;
      } catch (name) {
        name = $__4.value;
        {
          result.push(name);
        }
      }
    }
    expect(result).toEqual(["Tim", "Joy", "Sue"]);
  });
});

//# sourceMappingURL=iterators.js.map