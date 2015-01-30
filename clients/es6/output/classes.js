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
    var developer = new Employee();
    developer.hire();
    expect(developer.hired).toBe(true);
    expect(developer.getStatus()).toBe("hired");
  });
  it("can have a constructor and properties", function() {
    var Employee = function Employee(name) {
      this.name = name;
    };
    ($traceurRuntime.createClass)(Employee, {getName: function() {
        return this.name.toUpperCase();
      }}, {});
    var developer = new Employee("Scott");
    expect(developer.name).toBe("Scott");
    expect(developer.getName()).toBe("SCOTT");
  });
  it("can have getters and setters", function() {
    var Employee = function Employee(name) {
      this._name = name;
    };
    ($traceurRuntime.createClass)(Employee, {
      doWork: function() {
        return (this._name + " is working");
      },
      get name() {
        return this._name.toUpperCase();
      },
      set name(newName) {
        if (newName) {
          this._name = newName;
        }
      }
    }, {});
    var developer = new Employee("Scott");
    expect(developer.name).toBe("SCOTT");
    developer.name = "Alex";
    expect(developer.doWork()).toBe("Alex is working");
  });
  it("mimic a class", function() {
    var Employee = function(name) {
      this._name = name;
    };
    Employee.prototype = {
      doWork: function() {
        return (this._name + " is working");
      },
      get name() {
        return this._name.toUpperCase();
      },
      set name(newName) {
        if (newName) {
          this._name = newName;
        }
      }
    };
    var developer = new Employee("Scott");
    expect(developer.name).toBe("SCOTT");
    developer.name = "Alex";
    expect(developer.doWork()).toBe("Alex is working");
  });
  it("super constructor", function() {
    var Person = function Person(name) {
      this._name = name;
    };
    ($traceurRuntime.createClass)(Person, {get name() {
        return this._name;
      }}, {});
    var Employee = function Employee(name, title) {
      this._title = title;
      $traceurRuntime.superConstructor($Employee).call(this, name);
    };
    var $Employee = Employee;
    ($traceurRuntime.createClass)(Employee, {get title() {
        return this._title;
      }}, {}, Person);
    var p1 = new Person("Scott");
    var e1 = new Employee("Alex", "Developer");
    expect(p1.name).toBe("Scott");
    expect(e1.name).toBe("Alex");
    expect(e1.title).toBe("Developer");
  });
  it("simpler class example", function() {
    var Person = function Person(name) {
      this._name = name;
    };
    ($traceurRuntime.createClass)(Person, {
      get name() {
        return this._name;
      },
      set name(newName) {
        if (newName) {
          this._name = newName;
        }
      },
      doWork: function() {
        return this.name + " works for free";
      }
    }, {});
    var p1 = new Person();
    p1.name = "Scott";
    expect(p1.doWork()).toBe("Scott works for free");
    var Employee = function Employee() {
      $traceurRuntime.superConstructor($Employee).apply(this, arguments);
    };
    var $Employee = Employee;
    ($traceurRuntime.createClass)(Employee, {
      get title() {
        return this._title;
      },
      set title(newTitle) {
        this._title = newTitle;
      },
      doWork: function() {
        return $traceurRuntime.superGet(this, $Employee.prototype, "doWork").call(this) + "!";
      }
    }, {}, Person);
    var p1 = new Person();
    p1.name = "Scott";
    expect(p1.doWork()).toBe("Scott works for free");
    var e1 = new Employee();
    e1.name = "Scott";
    e1.title = "Developer";
    expect(e1.doWork()).toBe("Scott works for free!");
    expect(e1.name).toBe("Scott");
    expect(e1.title).toBe("Developer");
    expect(e1 instanceof Employee).toBe(true);
    expect(e1 instanceof Person).toBe(true);
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
      $traceurRuntime.superConstructor($Employee).call(this, name);
      this._title = title;
    };
    var $Employee = Employee;
    ($traceurRuntime.createClass)(Employee, {
      get title() {
        return this._title;
      },
      toString: function() {
        return this.title + " " + $traceurRuntime.superGet(this, $Employee.prototype, "name");
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
      this._test = $traceurRuntime.superGet(this, $B.prototype, "test").call(this);
    };
    var $B = B;
    ($traceurRuntime.createClass)(B, {}, {}, A);
    var C = function C() {
      $traceurRuntime.superConstructor($C).apply(this, arguments);
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
      this[name] = "Scott";
    };
    ($traceurRuntime.createClass)(A, {}, {});
    expect(new A()).toBeDefined();
  });
  it("does not manage 'this' like arrow functions", function() {
    var Employee = function Employee(name) {
      this._name = name;
    };
    ($traceurRuntime.createClass)(Employee, {getName: function() {
        if (this._name) {
          return this._name;
        }
      }}, {});
    var e = new Employee("Scott");
    var f = e.getName;
    var failed = false;
    try {
      f();
    } catch (ex) {
      failed = true;
    }
    expect(failed).toBe(true);
  });
  it("still uses prototype", function() {
    var A = function A() {};
    ($traceurRuntime.createClass)(A, {doWork: function() {
        return "complete!";
      }}, {});
    A.prototype.newMethod = function() {
      return "new!";
    };
    var result = A.prototype.doWork.call();
    expect(result).toBe("complete!");
    var a = new A();
    expect(a.newMethod()).toBe("new!");
    expect(a instanceof A).toBe(true);
    expect(a instanceof Object).toBe(true);
  });
  it("overrides", function() {
    var A = function A() {};
    ($traceurRuntime.createClass)(A, {doWork: function() {
        return "work a";
      }}, {});
    var B = function B() {
      $traceurRuntime.superConstructor($B).apply(this, arguments);
    };
    var $B = B;
    ($traceurRuntime.createClass)(B, {
      doWork: function() {
        return "work b";
      },
      doMoreWork: function() {
        return this.doWork() + $traceurRuntime.superGet(this, $B.prototype, "doWork").call(this);
      }
    }, {}, A);
    var C = function C() {
      this.work = this.doWork();
    };
    ($traceurRuntime.createClass)(C, {}, {}, B);
    expect(new A().doWork()).toBe("work a");
    expect(new B().doWork()).toBe("work b");
    expect(new B().doMoreWork()).toBe("work bwork a");
    expect(new C().work).toBe("work b");
  });
  it("instanceof works", function() {
    var A = function A() {
      this.aisa = this instanceof $A;
      this.aisb = this instanceof B;
      this.aiso = this instanceof Object;
    };
    var $A = A;
    ($traceurRuntime.createClass)(A, {}, {});
    var B = function B() {
      this.bisa = this instanceof A;
      this.bisb = this instanceof $B;
      this.biso = this instanceof Object;
      $traceurRuntime.superConstructor($B).call(this);
    };
    var $B = B;
    ($traceurRuntime.createClass)(B, {}, {}, A);
    var a = new A();
    var b = new B();
    expect(a.aisa).toBe(true);
    expect(a.aisb).toBe(false);
    expect(b.aisa).toBe(true);
    expect(b.aisb).toBe(true);
    expect(b.bisa).toBe(true);
    expect(b.bisb).toBe(true);
    expect(a.aiso).toBe(true);
    expect(b.biso).toBe(true);
  });
  it("constructs objects in a specific fashion", function() {
    var A = function A(name) {
      this.name = name;
    };
    ($traceurRuntime.createClass)(A, {upper: function(name) {
        return (this.name || name).toUpperCase();
      }}, {});
    var B = function B(name) {
      $traceurRuntime.superConstructor($B).call(this, name);
      this.superName = this.upper(name);
    };
    var $B = B;
    ($traceurRuntime.createClass)(B, {}, {}, A);
    var b = new B("Scott");
    expect(b.superName).toBe("SCOTT");
    expect(b.name).toBe("Scott");
  });
  it("can have static members", (function() {
    var Employee = function Employee(name) {
      this._name = name;
    };
    var $Employee = Employee;
    ($traceurRuntime.createClass)(Employee, {get name() {
        return this._name;
      }}, {convert: function(thing) {
        if (thing.name) {
          return new $Employee(thing.name);
        }
      }});
    expect(Employee.convert).toBeDefined();
    expect(new Employee().convert).toBeUndefined();
    var person = {name: "Scott"};
    var newHire = Employee.convert(person);
    expect(newHire.name).toBe("Scott");
  }));
  it("can have private properties with Symbols", function() {
    var _name = Symbol();
    var A = function A(name) {
      this[_name] = name;
    };
    ($traceurRuntime.createClass)(A, {get name() {
        return this[_name];
      }}, {});
    var a = new A("Scott");
    expect(a.name).toBe("Scott");
  });
});
