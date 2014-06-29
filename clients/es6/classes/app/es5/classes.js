"use strict";
describe("classes", function() {
  it("can have methods", function() {
    var Employee = function Employee() {};
    ($traceurRuntime.createClass)(Employee, {
      hire: function() {
        this.hired = true;
      },
      getStatus: function() {
        if (this.hired) {
          return "hired";
        }
      }
    }, {});
    var e = new Employee();
    e.hire();
    expect(e.hired).toBe(true);
    expect(e.getStatus()).toBe("hired");
  });
  it("can have a constructor and properties", function() {
    var Employee = function Employee(name) {
      this.name = name;
    };
    ($traceurRuntime.createClass)(Employee, {getName: function() {
        return this.name.toUpperCase();
      }}, {});
    var e = new Employee("Scott");
    expect(e.name).toBe("Scott");
    expect(e.getName()).toBe("SCOTT");
  });
  it("can have getters and setters", function() {
    var Employee = function Employee(name) {
      this._name = name;
    };
    ($traceurRuntime.createClass)(Employee, {
      get name() {
        return this._name.toUpperCase();
      },
      set name(newName) {
        if (newName) {
          this._name = newName;
        }
      }
    }, {});
    var e = new Employee("Scott");
    expect(e.name).toBe("SCOTT");
    e.name = "";
    expect(e.name).toBe("SCOTT");
    e.name = "Priya";
    expect(e.name).toBe("PRIYA");
  });
  it("can have a base class", function() {
    var Person = function Person(name) {
      this.name = name;
    };
    ($traceurRuntime.createClass)(Person, {
      get name() {
        return this._name.toUpperCase();
      },
      set name(newName) {
        if (newName) {
          this._name = newName;
        }
      },
      toString: function() {
        return this.name;
      }
    }, {});
    var Employee = function Employee(name, title) {
      $traceurRuntime.superCall(this, $Employee.prototype, "constructor", [name]);
      this._title = title;
    };
    var $Employee = Employee;
    ($traceurRuntime.createClass)(Employee, {
      get title() {
        return this._title;
      },
      toString: function() {
        return this.title + " " + $traceurRuntime.superCall(this, $Employee.prototype, "toString", []);
      }
    }, {}, Person);
    var e = new Employee("Scott", "Developer");
    expect(e.name).toBe("SCOTT");
    expect(e.title).toBe("Developer");
    expect(e.toString()).toBe("Developer SCOTT");
  });
  it("must call super for base class ctor when derived has ctor", function() {
    var A = function A(name) {
      this._name = "A";
    };
    ($traceurRuntime.createClass)(A, {test: function() {
        return "test";
      }}, {});
    var B = function B() {
      this._test = $traceurRuntime.superCall(this, $B.prototype, "test", []);
    };
    var $B = B;
    ($traceurRuntime.createClass)(B, {}, {}, A);
    var C = function C() {
      $traceurRuntime.defaultSuperCall(this, $C.prototype, arguments);
    };
    var $C = C;
    ($traceurRuntime.createClass)(C, {}, {}, A);
    expect(new A()._name).toBe("A");
    expect(new B()._name).toBeUndefined();
    expect(new B()._test).toBe("test");
    expect(new C()._name).toBe("A");
  });
  it("can use symbol for private state", function() {
    var A = function A() {
      var name = Symbol();
      $traceurRuntime.setProperty(this, name, "Scott");
    };
    ($traceurRuntime.createClass)(A, {}, {});
    expect(new A()).toBeDefined();
  });
});

//# sourceMappingURL=classes.js.map