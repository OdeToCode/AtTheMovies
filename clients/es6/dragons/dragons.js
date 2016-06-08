describe("arrow functions", () => {

    it("has basic syntax", () => {

        const square = x => x * x;

        const add = (x, y) => x + y;

        const log = result => {
            console.log(result);
            return result;
        };

        const result = log(square(add(3, 5)));
        // 64

        expect(result).toBe(64);

    });

    it("works well with arrays", () => {

        const numbers = [1, 2, 3];

        const result = numbers.map(n => n * 2);
        // [2,4,6]

        expect(result).toEqual([2, 4, 6]);

    });

    it("doesn't return object literal w/o parens", () => {

        const numbers = [1, 2, 3];

        const result = numbers.map(n => { value: n });
        // [undefined], [undefined], [undefined]

        expect(result.length).toBe(3);
        for (const entry of result) {
            expect(entry).toBeUndefined();
        }



    });

    it("does return object literal w parens", () => {

        const numbers = [1, 2, 3];

        const result = numbers.map(n => ({ value: n }));
        // [{value: 1}, {value:2}, {value:3}]

        expect(result.length).toBe(3);
        for (const entry of result) {
            expect(entry.value).toBeDefined();
        }


    });

    it("preseves the this reference", () => {

        const adder = {
            sum: 0,
            add(numbers) {
                numbers.forEach(n => {
                    this.sum += n;
                });
            }

        };

        adder.add([1, 2, 3]);
        // adder.sum === 6

        expect(adder.sum).toBe(6);

    });


    it("cannot change 'this'", function () {

        const adder = {
            sum: 0
        };

        const add = (numbers) => numbers.forEach(n => this.sum += 1);

        adder.add = add.bind(adder);

        adder.add([1, 2, 3]);
        // adder.sum == 0

        expect(adder.sum).toBe(0);
    });

    it("has no arguments", function () {

        const add = (x, y) => {
            return arguments;
        };

        const result = add(3, 5);
        // result.length === 0

        expect(result.length).toBe(0);

    });

    it("careful with the definition", function () {

        const adder = {
            sum: 0,
            add: (numbers) => {
                numbers.forEach(n => {
                    this.sum += n;
                });
            }

        };

        adder.add([1, 2, 3]);

        expect(adder.sum).toBe(0);

    });


});

describe("template literals", function () {

    it("is reusable if you wrap it", function () {

        const template = ({x, y}) => `${x} + ${y} = ${x + y}`;

        const four = template({ x: 2, y: 2 });
        // "2 + 2 = 4"

        const eight = template({ x: 6, y: 2 });
        // "6 + 2 = 8"


        expect(four).toBe("2 + 2 = 4");
        expect(eight).toBe("6 + 2 = 8");


    });

});

describe("destructuring", function () {

    it("can be unreadable?", function () {

        const {length} = "Wut?";


        expect(length).toBe(4);


    });

});

describe("crazy operators", function () {

    it("can be the bang bang", function () {

        const value = 1;
        const result = !!value;
        // true

        expect(result).toBe(true);
    });


    it("can be the spread", function () {

        const map = new Map([[1, "one"], [2, "two"]]);

        const numbers = [1, 2, 3];
        const result = [...numbers, 4, 5, 6];
        // [1, 2, 3, 4, 5, 6]

        expect(result).toEqual([1, 2, 3, 4, 5, 6]);

    });

    it("obscure number generator", function () {
        const numbers = Array.from({ length: 5 }, (v, k) => k);
        // [0, 1, 2, 3, 4] 

        expect(numbers).toEqual([0, 1, 2, 3, 4]);
    });

    // it("can be the object spread", function() {

    //     const data = { x:1, y:2 };

    //    const result = {
    //         name: "results",
    //         ...!!data ? data : { default: true }
    //     };

    //     // { name: "results", x:1, y:2}

    // });


});

describe("const and let", function () {

    //    const x = 2;
    //    x = 3;
    //    // TypeError: Assignment to constant variable

    const numbers = [1, 2, 3];
    Object.freeze(numbers);
    //numbers.push(4);
    // TypeError


});

describe("tdz", function () {

    function doWork() {
        x = 1;

        let x = 2;

        return x;
    }

    doWork();
    // ReferenceError

});

describe("collections", function () {

    it("has sets", function () {

        const set = new Set();
        const array = [9];
        set.add(array);
        set.add(array);
        // set.size === 1

        expect(set.size).toBe(1);
    });


    it("has a safer Array constructor", function () {

        const good = Array(1, 2, 3);
        // [1, 2, 3]

        const bad = Array(10);
        // [undefined x 10]

        const alternate = Array.of(10);
        // [10]

        expect(good).toEqual([1, 2, 3]);
        expect(bad.length).toBe(10);
        expect(alternate).toEqual([10]);

    });

});

describe("Classes", function () {

    it("can use hoisted functions", function () {

        const e = new Employee();
        // { name:"Scott"}

        function Employee() {
            this.name = "Scott";
        }

        expect(e.name).toBe("Scott");
    });

    // it("cannot use hoisted classes", function() {

    //    const e = new Employee();
    //    // ReferenceError

    //    class Employee {               
    //    }                       
    // });

    it("enumerate methods", function () {

        const Human = function () { }
        Human.prototype.doWork = function () { };

        let names = [];
        for (const p in new Human()) {
            names.push(p);
        }
        // ["doWork"]
        
        expect(names).toEqual(["doWork"]);


        class Horse {
            
            constructor() {
                
            }
            
            doWork() { }
        }

        

        names = [];
        for (const p in new Horse()) {
            names.push(p);
        }
        // []
        
        expect(names.length).toBe(0);
        
        names = [];
        const prototype = Object.getPrototypeOf(new Horse());
        for(const name of Object.getOwnPropertyNames(prototype)) {
            names.push(name);
        }
        // ["constructor", "doWork"]
        
       expect(names).toEqual(["constructor", "doWork"]);

    });

});