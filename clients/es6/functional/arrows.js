describe("arrow functions", function(){

    it("provide a short syntax for defining functions", function(){

        let add = (x,y) => x + y;
        let square = x => x * x;
        let log = () => console.log("hello!");

        log();
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

    it("lexically binds to this", function(done){

        this.userName = "Scott";
        console.log(this);
        setTimeout(() => {
            console.log(this);
            expect(this.userName).toBe("Scott");
            done();
        }, 0);


    });

    it("lexically binds to this (with class)", function(done){

        this.userName = "Scott";
        console.log(this);  
        setTimeout(() => {
            console.log(this);
            expect(this.userName).toBe("Scott");
            done();
        }, 0);


    });

});