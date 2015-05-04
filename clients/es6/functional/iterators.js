describe("iterators", function() {

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
        next = iterator.next();
      }
      expect(sum).toBe(17);
    });

    it("cannot 'for in' over iterable", function(){
        let sum = 0;
        let numbers = [1,2,3,4];

        // 0, 1, 2, 3
        // numbers[i]
        for(let i in numbers) {
            sum += i;
        }
        expect(sum === 10).toBe(false);
        expect(typeof sum).toBe("string");
    });

    it("for of will work with a string", function(){

        let result = "";
        let message = "Hello";
        for(let c of message) {
            result += c;
        }
        expect(result).toBe("Hello");

    });

    it("for in only gets available index", function(){
        let sum = 0;
        let numbers = [1,2,3,4];

        for(let i in numbers) {
            sum += numbers[i]; // notice the indexer
        }
        expect(sum).toBe(10);
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

    it("can process exceptions", function() {

        let stockTicker = function*() {
            yield 10;
            yield 11;
            throw new Error("oops!");
        };

        var iterator = stockTicker();
        expect(iterator.next().value).toBe(10);
        expect(iterator.next().value).toBe(11);
        expect(() => iterator.next()).toThrow();
    });

    it("can take a parameter from next(param)", function() {

		let range1 = function*(start, end) {
			let current = start;
			while(current <= end) {
				let delta = yield current;
				current += delta || 1;
			}
		}

		let range2 = function(start, end) {
		    let firstCall = true;
            let current = start;
		    return {
		    	next(delta = 1) {                    		                  		    		
		    		let result = { value: current, done: true};
                    
                    if(firstCall){
                        firstCall = false;
                    }
                    else {
                        current += delta;
                    }
                    
                    if(current <= end) {
                        result.value = current;
                        result.done = false;
                    }
                    return result;
		    	}
		    }
		}

        let iterate1 = function(iterator) {
          let result = [];
          let next = iterator.next();
          while(!next.done) {
              result.push(next.value);
              next = iterator.next(next.value);
          }
          return result;
        };

        let iterate2 = function(iterator) {
          let result = [];
          let next = iterator.next();
          while(!next.done) {
              result.push(next.value);
              next = iterator.next();
          }
          return result;
        };

		expect(iterate1(range1(1,10))).toEqual([1,2,4,8]);
        expect(iterate2(range1(1,10))).toEqual([1,2,3,4,5,6,7,8,9,10]);
        
        expect(iterate1(range2(1,10))).toEqual([1,2,4,8]);
        expect(iterate2(range2(1,10))).toEqual([1,2,3,4,5,6,7,8,9,10]);
	});

});
