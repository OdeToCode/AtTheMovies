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

        var developer = new Employee();
        developer.hire();
        expect(developer.hired).toBe(true);
        expect(developer.getStatus()).toBe("hired");

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

        var developer = new Employee("Scott");
        expect(developer.name).toBe("Scott");
        expect(developer.getName()).toBe("SCOTT");

    });

    it("can have getters and setters", function(){


        class Employee {
            constructor(name) {
                this._name = name;
            }

            doWork() {
                return `${this._name} is working`;
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

        var developer = new Employee("Scott");

        expect(developer.name).toBe("SCOTT");

        developer.name = "Alex";
        expect(developer.doWork()).toBe("Alex is working");

    });

    it("mimic a class", function() {

        let Employee = function(name) {
            this._name = name;
        };

        Employee.prototype = {
            doWork: function() {
                return `${this._name} is working`;
            },
            get name() {
                return this._name.toUpperCase();
            },
            set name(newName) {
                if(newName) {
                    this._name = newName;
                }
            }
        };

        let developer = new Employee("Scott");
        expect(developer.name).toBe("SCOTT");
        developer.name = "Alex";
        expect(developer.doWork()).toBe("Alex is working");
    });

    it("super constructor", function() {
        class Person {

            constructor(name) {
                this._name = name;
            }
            get name() {
                return this._name;
            }
        }


        class Employee extends Person {
            constructor(name, title) {
                this._title = title;
                super(name);
            }

            get title() {
                return this._title;
            }
        }

        var p1 = new Person("Scott");
        var e1 = new Employee("Alex", "Developer");
        expect(p1.name).toBe("Scott");
        expect(e1.name).toBe("Alex");
        expect(e1.title).toBe("Developer");

    });

    it("simpler class example", function(){

        class Person {

            constructor(name) {
                this._name = name;
            }

            get name() {
                return this._name;
            }

            set name(newName){
                if(newName){
                    this._name = newName;
                }
            }

            doWork() {
                return this.name + " works for free";
            }

        }

        var p1 = new Person();
        p1.name = "Scott";
        expect(p1.doWork()).toBe("Scott works for free");

        class Employee extends Person {

            get title() {
                return this._title;
            }

            set title(newTitle) {
                this._title = newTitle;
            }

            doWork() {
                return super.doWork() + "!";
            }

        }

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
                return this.title + " " + super.name;
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

    it("does not manage 'this' like arrow functions", function(){

        class Employee{
            constructor(name) {
                this._name = name;
            }

            getName() {
                if(this._name) {
                    return this._name;
                }
            }
        }

        var e = new Employee("Scott");
        var f = e.getName;
        var failed = false;
        try {
            f();
        }
        catch(ex){
            failed = true;
        }
        expect(failed).toBe(true);
   });


    it("still uses prototype", function(){

        class A {
            doWork() {
                return "complete!";
            }
        }

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

    it("overrides", function(){

        class A {
            doWork() {
                return "work a";
            }
        }

        class B extends A {
            doWork(){
                return "work b";
            }
            doMoreWork() {
                return this.doWork() + super.doWork();
            }
        }

        class C extends B {
            constructor() {
                this.work = this.doWork();
            }
        }

        expect(new A().doWork()).toBe("work a");
        expect(new B().doWork()).toBe("work b");
        expect(new B().doMoreWork()).toBe("work bwork a");
        expect(new C().work).toBe("work b");

    });


    it("instanceof works", function(){

        class A {
            constructor(){
                this.aisa = this instanceof A;
                this.aisb = this instanceof B;
                this.aiso = this instanceof Object;
            }
        }

        class B extends A {
            constructor() {
                this.bisa = this instanceof A;
                this.bisb = this instanceof B;
                this.biso = this instanceof Object;
                super();
            }
        }

        let a = new A();
        let b = new B();

        expect(a.aisa).toBe(true);
        expect(a.aisb).toBe(false);
        expect(b.aisa).toBe(true);
        expect(b.aisb).toBe(true);
        expect(b.bisa).toBe(true);
        expect(b.bisb).toBe(true);
        expect(a.aiso).toBe(true);
        expect(b.biso).toBe(true);

    });

    it("constructs objects in a specific fashion", function(){

        class A{

            constructor(name){
                this.name = name;
            }

            upper(name) {
                return (this.name || name).toUpperCase();
            }
        }

        class B extends A {
            constructor(name) {
                super(name);
               this.superName = this.upper(name);
            }
        }

        var b = new B("Scott");
        expect(b.superName).toBe("SCOTT");
        expect(b.name).toBe("Scott");

    });

    it("can have static members", () => {

        class Employee {
            constructor(name) {
                this._name = name;
            }

            get name() {
                return this._name;
            }

            static convert(thing) {
                if(thing.name) {
                    return new Employee(thing.name);
                }
            }

        }

        expect(Employee.convert).toBeDefined();
        expect(new Employee().convert).toBeUndefined();

        let person = { name: "Scott" };
        let newHire = Employee.convert(person);
        expect(newHire.name).toBe("Scott");

    });

    it("can have private properties with Symbols", function(){

        var _name = Symbol();

        class A {
            constructor(name){
                this[_name] = name;
            }

            get name(){
                return this[_name];
            }
        }

        var a = new A("Scott");
        expect(a.name).toBe("Scott");

    })

});
