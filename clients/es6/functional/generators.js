describe("generators", function(){

    it("are one way to make iterables", function(){

        let numbers = function*(){
            yield 1;
            yield 2;
            yield 3;
        };

        var sum = 0;


        for(let n of numbers()){
            sum += n;
        }
        expect(sum).toBe(6);

    });

    it("you can build an iterable object", function(){

        class Classroom {
            constructor(...students) {
                this.students = students;
            }

            *[Symbol.iterator]() {
                for(let s of this.students) yield s;
            }
        }

        var scienceClass = new Classroom("Tim", "Sue", "Joy");
        var students = [];
        for(let student of scienceClass){
            students.push(student);
        }
        expect(students).toEqual(["Tim", "Sue", "Joy"])

    });

    it("can build your own iterable", function(){

        let random = function*() {
            while(true) {
                yield Math.random();
            }
        }

        let filter = function*(items, predicate) {
            for(let item of items){
                console.log("filter", item);
                if(predicate(item)){
                    yield item;
                }
            }
        };

        let take = function*(items, number) {
            let count = 0;
            if(number < 1) return;
            for(let item of items){
                console.log("take", item);
                yield item;
                count += 1;
                if(count >= number){
                    return;
                }
            }
        };

        let numbers = [1,2,3,4,5,6,7,8,9,10];
        let result = take(filter(numbers, n => n % 2),2);
        expect(Array.from(result)).toEqual([1,3]);

        let result2 = take(filter(random(), n => n < 0.5), 2);
        expect(Array.from(result2).length).toBe(2);
    });

    it("can be delegated", function(){

        let inner = function*() {
            yield "Hello";
        }

        let outer = function*() {
            yield* inner();
            yield "World";
        }

        var result = Array.from(outer());
        expect(result).toEqual(["Hello", "World"]);

    });

    it("can call into next", function(){
        let range = function*(start, end){
            var current = start;
            while(current < end){
                var newValue = yield current;
                current = newValue ? newValue : current + 1;
            }
        };

        let results = [];
        let iterator = range(0,3);
        results.push(iterator.next().value);
        results.push(iterator.next(2).value);
        results.push(iterator.next().value);

        expect(results).toEqual([0,2,undefined]);

    });

});
