describe("arrow functions", function(){

    it("provide a short syntax for defining functions", function(){

        let add = (x,y) => x + y;
        let square = x => x * x;
        let log = () => console.log("hello!");

        let result = square(add(3,5));
        expect(result).toBe(64);

    });

    it("can be used with map and forEach", function(){

        var result = [1,2,3,4].map(n => n * 2);
        expect(result).toEqual([2,4,6,8]);

        var sum = 0;
        [1,2,3,4].forEach(n => sum += n);
        expect(sum).toBe(10);

    });

    it("lexically binds to this with a class", function(done){

        class Person {
            constructor(name) {
                this.name = name;
            }

            doWork(callback) {
                setTimeout(() => callback(this.name), 15);
            }
        }

        var person = new Person("Scott");
        person.doWork(function(result) {
            expect(result).toBe("Scott");
            done();
        });

    });

    it("lexically binds to this", function(done){

        this.userName = "Scott";
        setTimeout(() => {
            expect(this.userName).toBe("Scott");
            done();
        }, 0);


    });

    it("can be used in jasmine", () => {
        var numbers = [1,3,4];
        expect(numbers.length).toBe(3);
    });

    it("also works with lodash", function() {
        let characters = [
            { name: "barney",  age: 36, blocked: false },
            { name: "fred",    age: 40, blocked: true },
            { name: "pebbles", age: 1,  blocked: false }
        ];

        let result1 = _.find(characters, function(character) {
            return character.age < 40;
        });

        let result2 = _.find(characters, character => character.age < 40);

        expect(result2.name).toBe("barney");
    });

});
