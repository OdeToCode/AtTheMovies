describe("a symbol", () => {

    it("has a type of symbol", ()=> {
        let s = Symbol();
        expect(typeof s).toBe("symbol");
    });

    it("is always unique and immutable", () => {
        let s1 = Symbol("some text");
        let s2 = Symbol("some text");

        expect(s1).toEqual(s1);
        expect(s1).not.toEqual(s2);

        expect(s1.toString()).toBe("Symbol(some text)");
        expect(s2.toString()).toBe("Symbol(some text)");
    });

    it("cannot use new", () => {
        let makeSymbol = () => new Symbol();
        expect(makeSymbol).toThrow();
    });

    it("can add entry to an object", () => {
        let firstName = Symbol();

         let person = {
             ["lastName"]: "Allen",
             [firstName]: "Scott",
        };

        expect(person.lastName).toBe("Allen");
        expect(person[firstName]).toBe("Scott");
    });

    it("won't see symbol with for in, getOwnProps, or JSON, but can see with special symbol methods", () => {
        let firstName = Symbol();

        let person = {
            lastName: "Allen",
            [firstName]: "Scott",
        };

        expect(person.lastName).toBe("Allen");
        expect(person[firstName]).toBe("Scott");

        let names = [];
        for(var p in person) {
            names.push(p);
        }
        expect(names.length).toBe(1);
        expect(names[0]).toBe("lastName");

        expect(Object.getOwnPropertyNames(person)).toEqual(["lastName"]);
        expect(JSON.stringify(person)).toBe('{"lastName":"Allen"}');

        expect(Object.getOwnPropertySymbols(person)).toEqual([firstName]);

        let symbol0 = Object.getOwnPropertySymbols(person)[0];
        expect(person[symbol0]).toBe("Scott");
    });

    it("provides Symbol.iterator for the @@iterator method", () => {

        var site = "OdeToCode.com";
        var values = [1,2,3,4];
        var number = 45;

        expect(site[Symbol.iterator]).toBeDefined();
        expect(values[Symbol.iterator]).toBeDefined();
        expect(number[Symbol.iterator]).toBeUndefined();
    });

    it("can sum up numbers", () => {
        let sum = 0;
        let numbers = [1,2,3,4];

        let iterator = numbers[Symbol.iterator]();
        let next = iterator.next();
        while(!next.done) {
            sum += next.value;
            next = iterator.next();
        }

        expect(sum).toBe(10);
    });

});
