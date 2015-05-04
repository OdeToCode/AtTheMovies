"use strict";

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { desc = parent = getter = undefined; _again = false; var object = _x,
    property = _x2,
    receiver = _x3; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

describe("classes", function () {

    it("can have methods", function () {
        var Employee = (function () {
            function Employee() {
                _classCallCheck(this, Employee);
            }

            _createClass(Employee, [{
                key: "hire",
                value: function hire() {
                    this.hired = true;
                }
            }, {
                key: "getStatus",
                value: function getStatus() {
                    if (this.hired) {
                        return "hired";
                    }
                }
            }]);

            return Employee;
        })();

        var developer = new Employee();
        developer.hire();
        expect(developer.hired).toBe(true);
        expect(developer.getStatus()).toBe("hired");
    });

    it("can have a constructor and properties", function () {
        var Employee = (function () {
            function Employee(name) {
                _classCallCheck(this, Employee);

                this.name = name;
            }

            _createClass(Employee, [{
                key: "getName",
                value: function getName() {
                    return this.name.toUpperCase();
                }
            }]);

            return Employee;
        })();

        var developer = new Employee("Scott");
        expect(developer.name).toBe("Scott");
        expect(developer.getName()).toBe("SCOTT");
    });

    it("can have getters and setters", function () {
        var Employee = (function () {
            function Employee(name) {
                _classCallCheck(this, Employee);

                this._name = name;
            }

            _createClass(Employee, [{
                key: "doWork",
                value: function doWork() {
                    return "" + this._name + " is working";
                }
            }, {
                key: "name",
                get: function () {
                    return this._name.toUpperCase();
                },
                set: function (newName) {
                    if (newName) {
                        this._name = newName;
                    }
                }
            }]);

            return Employee;
        })();

        var developer = new Employee("Scott");

        expect(developer.name).toBe("SCOTT");

        developer.name = "Alex";
        expect(developer.doWork()).toBe("Alex is working");
    });

    it("mimic a class", function () {

        var Employee = function Employee(name) {
            this._name = name;
        };

        Employee.prototype = Object.defineProperties({
            doWork: function doWork() {
                return "" + this._name + " is working";
            } }, {
            name: {
                get: function () {
                    return this._name.toUpperCase();
                },
                set: function (newName) {
                    if (newName) {
                        this._name = newName;
                    }
                },
                configurable: true,
                enumerable: true
            }
        });

        var developer = new Employee("Scott");
        expect(developer.name).toBe("SCOTT");
        developer.name = "Alex";
        expect(developer.doWork()).toBe("Alex is working");
    });

    it("super constructor", function () {
        var Person = (function () {
            function Person(name) {
                _classCallCheck(this, Person);

                this._name = name;
            }

            _createClass(Person, [{
                key: "name",
                get: function () {
                    return this._name;
                }
            }]);

            return Person;
        })();

        var Employee = (function (_Person) {
            function Employee(name, title) {
                _classCallCheck(this, Employee);

                _get(Object.getPrototypeOf(Employee.prototype), "constructor", this).call(this, name);
                this._title = title;
            }

            _inherits(Employee, _Person);

            _createClass(Employee, [{
                key: "title",
                get: function () {
                    return this._title;
                }
            }]);

            return Employee;
        })(Person);

        var p1 = new Person("Scott");
        var e1 = new Employee("Alex", "Developer");
        expect(p1.name).toBe("Scott");
        expect(e1.name).toBe("Alex");
        expect(e1.title).toBe("Developer");
    });

    it("simpler class example", function () {
        var Person = (function () {
            function Person(name) {
                _classCallCheck(this, Person);

                this._name = name;
            }

            _createClass(Person, [{
                key: "name",
                get: function () {
                    return this._name;
                },
                set: function (newName) {
                    if (newName) {
                        this._name = newName;
                    }
                }
            }, {
                key: "doWork",
                value: function doWork() {
                    return this.name + " works for free";
                }
            }]);

            return Person;
        })();

        var p1 = new Person();
        p1.name = "Scott";
        expect(p1.doWork()).toBe("Scott works for free");

        var Employee = (function (_Person2) {
            function Employee() {
                _classCallCheck(this, Employee);

                if (_Person2 != null) {
                    _Person2.apply(this, arguments);
                }
            }

            _inherits(Employee, _Person2);

            _createClass(Employee, [{
                key: "title",
                get: function () {
                    return this._title;
                },
                set: function (newTitle) {
                    this._title = newTitle;
                }
            }, {
                key: "doWork",
                value: function doWork() {
                    return _get(Object.getPrototypeOf(Employee.prototype), "doWork", this).call(this) + "!";
                }
            }]);

            return Employee;
        })(Person);

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

    it("can have a base class", function () {
        var Person = (function () {
            function Person(name) {
                _classCallCheck(this, Person);

                this.name = name;
            }

            _createClass(Person, [{
                key: "name",
                get: function () {
                    return this._name.toUpperCase();
                },
                set: function (newName) {
                    if (newName) {
                        this._name = newName;
                    }
                }
            }, {
                key: "toString",
                value: function toString() {
                    return this.name;
                }
            }]);

            return Person;
        })();

        var Employee = (function (_Person3) {
            function Employee(name, title) {
                _classCallCheck(this, Employee);

                _get(Object.getPrototypeOf(Employee.prototype), "constructor", this).call(this, name);
                this._title = title;
            }

            _inherits(Employee, _Person3);

            _createClass(Employee, [{
                key: "title",
                get: function () {
                    return this._title;
                }
            }, {
                key: "toString",
                value: function toString() {
                    // super is available from methods or constructor
                    return this.title + " " + _get(Object.getPrototypeOf(Employee.prototype), "name", this);
                }
            }]);

            return Employee;
        })(Person);

        var e = new Employee("Scott", "Developer");
        expect(e.name).toBe("SCOTT");
        expect(e.title).toBe("Developer");
        expect(e.toString()).toBe("Developer SCOTT");
    });

    it("must call super for base class ctor when derived has ctor", function () {
        var A = (function () {
            function A(name) {
                _classCallCheck(this, A);

                this._name = "A";
            }

            _createClass(A, [{
                key: "test",
                value: function test() {
                    return "test";
                }
            }]);

            return A;
        })();

        var B = (function (_A) {
            function B() {
                _classCallCheck(this, B);

                _get(Object.getPrototypeOf(B.prototype), "constructor", this).call(this);
                var result = _get(Object.getPrototypeOf(B.prototype), "test", this).call(this);
                this._test = result;
            }

            _inherits(B, _A);

            return B;
        })(A);

        var C = (function (_A2) {
            function C() {
                _classCallCheck(this, C);

                if (_A2 != null) {
                    _A2.apply(this, arguments);
                }
            }

            _inherits(C, _A2);

            return C;
        })(A);

        expect(new A()._name).toBe("A");
        //expect(new B()._name).toBeUndefined();
        expect(new B()._test).toBe("test");
        expect(new C()._name).toBe("A");
    });

    it("can use symbol for private state", function () {
        var A = function A() {
            _classCallCheck(this, A);

            var name = Symbol();
            this[name] = "Scott";
        };

        expect(new A()).toBeDefined();
    });

    it("does not manage 'this' like arrow functions", function () {
        var Employee = (function () {
            function Employee(name) {
                _classCallCheck(this, Employee);

                this._name = name;
            }

            _createClass(Employee, [{
                key: "getName",
                value: function getName() {
                    if (this._name) {
                        return this._name;
                    }
                }
            }]);

            return Employee;
        })();

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

    it("still uses prototype", function () {
        var A = (function () {
            function A() {
                _classCallCheck(this, A);
            }

            _createClass(A, [{
                key: "doWork",
                value: function doWork() {
                    return "complete!";
                }
            }]);

            return A;
        })();

        A.prototype.newMethod = function () {
            return "new!";
        };

        var result = A.prototype.doWork.call();
        expect(result).toBe("complete!");

        var a = new A();
        expect(a.newMethod()).toBe("new!");
        expect(a instanceof A).toBe(true);
        expect(a instanceof Object).toBe(true);
    });

    it("overrides", function () {
        var A = (function () {
            function A() {
                _classCallCheck(this, A);
            }

            _createClass(A, [{
                key: "doWork",
                value: function doWork() {
                    return "work a";
                }
            }]);

            return A;
        })();

        var B = (function (_A3) {
            function B() {
                _classCallCheck(this, B);

                if (_A3 != null) {
                    _A3.apply(this, arguments);
                }
            }

            _inherits(B, _A3);

            _createClass(B, [{
                key: "doWork",
                value: function doWork() {
                    return "work b";
                }
            }, {
                key: "doMoreWork",
                value: function doMoreWork() {

                    return this.doWork() + _get(Object.getPrototypeOf(B.prototype), "doWork", this).call(this);
                }
            }]);

            return B;
        })(A);

        var C = (function (_B) {
            function C() {
                _classCallCheck(this, C);

                _get(Object.getPrototypeOf(C.prototype), "constructor", this).call(this);
                this.work = this.doWork();
            }

            _inherits(C, _B);

            return C;
        })(B);

        expect(new A().doWork()).toBe("work a");
        expect(new B().doWork()).toBe("work b");
        expect(new B().doMoreWork()).toBe("work bwork a");
        expect(new C().work).toBe("work b");
    });

    it("instanceof works", function () {
        var A = function A() {
            _classCallCheck(this, A);

            this.aisa = this instanceof A;
            this.aisb = this instanceof B;
            this.aiso = this instanceof Object;
        };

        var B = (function (_A4) {
            function B() {
                _classCallCheck(this, B);

                _get(Object.getPrototypeOf(B.prototype), "constructor", this).call(this);
                this.bisa = this instanceof A;
                this.bisb = this instanceof B;
                this.biso = this instanceof Object;
            }

            _inherits(B, _A4);

            return B;
        })(A);

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

    it("constructs objects in a specific fashion", function () {
        var A = (function () {
            function A(name) {
                _classCallCheck(this, A);

                this.name = name;
            }

            _createClass(A, [{
                key: "upper",
                value: function upper(name) {
                    return (this.name || name).toUpperCase();
                }
            }]);

            return A;
        })();

        var B = (function (_A5) {
            function B(name) {
                _classCallCheck(this, B);

                _get(Object.getPrototypeOf(B.prototype), "constructor", this).call(this, name);
                this.superName = this.upper(name);
            }

            _inherits(B, _A5);

            return B;
        })(A);

        var b = new B("Scott");
        expect(b.superName).toBe("SCOTT");
        expect(b.name).toBe("Scott");
    });

    it("can have static members", function () {
        var Employee = (function () {
            function Employee(name) {
                _classCallCheck(this, Employee);

                this._name = name;
            }

            _createClass(Employee, [{
                key: "name",
                get: function () {
                    return this._name;
                }
            }], [{
                key: "convert",
                value: function convert(thing) {
                    if (thing.name) {
                        return new Employee(thing.name);
                    }
                }
            }]);

            return Employee;
        })();

        expect(Employee.convert).toBeDefined();
        expect(new Employee().convert).toBeUndefined();

        var person = { name: "Scott" };
        var newHire = Employee.convert(person);
        expect(newHire.name).toBe("Scott");
    });

    it("can have private properties with Symbols", function () {

        var _name = Symbol();

        var A = (function () {
            function A(name) {
                _classCallCheck(this, A);

                this[_name] = name;
            }

            _createClass(A, [{
                key: "name",
                get: function () {
                    return this[_name];
                }
            }]);

            return A;
        })();

        var a = new A("Scott");
        expect(a.name).toBe("Scott");
    });
});