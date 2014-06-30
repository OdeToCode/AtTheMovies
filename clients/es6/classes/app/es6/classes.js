/*
    intro
    what are classes
    a simple class
    a class with a method
    a class with state
    a class with ctor
    a class with get and set (accessor functions)
    a class with a superclass
      (ctor, methods, properties inherited)
    conclusion

 */

describe("classes", function(){

    it("can have methods", function(){

        class Employee {
           hire(){
               this.hired = true;
           }

           getStatus() {
               if(this.hired){
                   return "hired";
               }
           }
        }

        var e = new Employee();
        e.hire();
        expect(e.hired).toBe(true);
        expect(e.getStatus()).toBe("hired");

    });

    it("can have a constructor and properties", function(){

        class Employee {
            constructor(name) {
                this.name = name;
            }

            getName() {
                return this.name.toUpperCase();
            }
        }

        var e = new Employee("Scott");
        expect(e.name).toBe("Scott");
        expect(e.getName()).toBe("SCOTT");

    });

    it("can have getters and setters", function(){

        class Employee {
            constructor(name) {
                this._name = name;
            }

            get name() {
                return this._name.toUpperCase();
            }

            set name(newName){
                if(newName){
                    this._name = newName;
                }
            }
        }

        var e = new Employee("Scott");
        expect(e.name).toBe("SCOTT");

        e.name = "";
        expect(e.name).toBe("SCOTT");

        e.name = "Alex";
        expect(e.name).toBe("ALEX");

    });

    it("can have a base class", function(){

        class Person{
            constructor(name) {
                this.name = name;
            }

            get name() {
                return this._name.toUpperCase();
            }

            set name(newName){
                if(newName){
                    this._name = newName;
                }
            }

            toString() {
                return this.name;
            }
        }

        class Employee extends Person {
            constructor(name, title){
                super(name);
                this._title = title;
            }

            get title(){
                return this._title;
            }

            toString() {
                // super is available from methods or constructor
                return this.title + " " + super();
            }
        }

        var e = new Employee("Scott", "Developer");
        expect(e.name).toBe("SCOTT");
        expect(e.title).toBe("Developer");
        expect(e.toString()).toBe("Developer SCOTT");
    });

    it("must call super for base class ctor when derived has ctor", function(){

        class A {

            constructor(name){
                this._name = "A";
            }

            test(){
                return "test";
            }
        }

        class B extends A {
            constructor(){
                this._test = super.test();
            }
        }

        class C extends A {

        }

        expect(new A()._name).toBe("A");
        expect(new B()._name).toBeUndefined();
        expect(new B()._test).toBe("test");
        expect(new C()._name).toBe("A");

    });

    it("can use symbol for private state", function(){

        class A {
            constructor(){
                var name = Symbol();
                this[name] = "Scott";
            }
        }

        expect(new A()).toBeDefined();

    })

    it("still uses prototype", function(){

        class A {
            doWork() {
                return "complete!";
            }
        }

        var a = new A();
        var result = A.prototype.doWork.call(a);
        expect(result).toBe("complete!");

    });

});