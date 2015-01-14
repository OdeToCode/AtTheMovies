describe("iterators", function(){

    it("works with iterator method at low level", function(){
        let sum = 0;
        let numbers = [1,2,3,4];

        let iterator = numbers.values();
        let next = iterator.next();
        while(!next.done){
            sum += next.value;
            next = iterator.next();
        }
        expect(sum).toBe(10);
    });

    it("doesn't have problems when the sequence changes", () => {
      let count = 0;
      let sum = 0;
      let numbers = [1,2,3,4];


      let iterator = numbers.values();
      let next = iterator.next();
      while(!next.done) {
        if(++count == 2) {
          numbers.push(5);
          numbers.unshift(1);
        }
        sum += next.value;
        console.log(next.value);
        next = iterator.next();
      }
      expect(sum).toBe(17);
    });

    it("cannot 'for in' over iterable", function(){
        let sum = 0;
        let numbers = [1,2,3,4];

        for(let i in numbers.values()) {
            sum += i;
        }
        expect(sum === 10).toBe(false);
    });

    it("can 'for of' over iterable", function(){
        let sum = 0;
        let numbers = [1,2,3,4];

        for(let n of numbers) {
            sum += n;
        }
        expect(sum).toBe(10);
    });

    it("can get an iterator from array the hard way", function(){

        let sum = 0;
        let numbers = [1,2,3,4];
        let iterator = numbers[Symbol.iterator]();

        let next = iterator.next();
        while(!next.done){
            sum += next.value;
            next = iterator.next();
        }
        expect(sum).toBe(10);

    });

    it("can build your own", function(){

        class Classroom {

            constructor() {
                this.students = ["Tim", "Joy", "Sue"];
            }

            [Symbol.iterator]() {
                var index = 0;
                return {
                    next: () => {
                        if(index < this.students.length){
                            index += 1;
                            return {done: false, value: this.students[index-1]};
                        }
                        return { value: undefined, done: true };
                    }
                }
            }
        }

        let scienceClass = new Classroom();
        let result = [];
        for(let name of scienceClass){
            result.push(name);
        }
        expect(result).toEqual(["Tim", "Joy", "Sue"]);

    });

    it("can build your own with a class", function(){

        class Classroom {

            constructor() {
                this.students = ["Tim", "Joy", "Sue"];
            }

            [Symbol.iterator]() {
                return new ArrayIterator(this.students);
            }
        }

        class ArrayIterator {
            constructor(array) {
                this.array = array;
                this.index = 0;
            }
            next() {
                let result = { value: undefined, done: true};
                if(this.index < this.array.length) {
                    result.value = this.array[this.index];
                    result.done = false;
                    this.index += 1;
                }
                return result;
            }
        }

        let scienceClass = new Classroom();
        let result = [];
        for(let name of scienceClass){
            result.push(name);
        }
        expect(result).toEqual(["Tim", "Joy", "Sue"]);

    });

    it("can take a parameter from next(param)", function() {

		let range = function*(start, end) {
			let current = start;
			while(current <= end) {
				let delta = yield current;
				current += delta || 1;
			}
		}

		let range2 = function(start, end) {
		    let current = start;
		    return {
		    	next(delta = 0) {
		    		let result = { value: undefined, done: true };
                    current += delta;
		    		if(current <= end) {
                        result.value = current;
		    		    result.done = false;
		    		}
		    		return result;
		    	}
		    }
		}


		let result = [];
		let iterator = range2(1,10);
		let next = iterator.next();
		while(!next.done) {
			result.push(next.value);
			next = iterator.next(next.value);
		}

		expect(result).toEqual([1, 2, 4, 8]);
	});

});
