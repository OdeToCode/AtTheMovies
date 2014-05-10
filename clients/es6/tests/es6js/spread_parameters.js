describe("spread parameters", function() {

    it("should spread when calling a function", function() {

        var f = function(x, y, z) {
            return x + y + z;
        }

        var data = [1, 2, 3];
        var result = f(...data);

        expect(result).toEqual(6);
    });

    it("should spread into an array", function() {

        var data = [1, 2, 3];
        var result = [0, ...data, 4];

        expect(result).toEqual([0, 1, 2, 3, 4]);

    });

});