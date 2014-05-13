describe("arrow functions", function(){

    it("should look like c#!", function(){
        var square = x => x * x;
        var result = square(3);

        expect(result).toBe(9);
    });

    it("can work with map", function() {
        var numbers = [1,2,3,4];
        var result = numbers.map(x => x * x);

        expect(result).toEqual([1,4,9,16]);
    });

    it("should remember this", function(done) {
        this.name = "Scott";
        setTimeout(() => {
            expect(this.name).toBe("Scott");
            done();
        }, 0);
    });

    it("which usually doesn't happen", function (done) {
        this.name = "Scott";
        setTimeout(function () {
            expect(this.name).toBe("");
            done();
        }, 0);
    });
});