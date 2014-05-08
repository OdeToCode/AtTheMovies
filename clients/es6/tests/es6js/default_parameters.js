describe("default parameters", function() {

    var getXValue = function() {
        return 2;
    };

    var doWork = function(x = getXValue(), y = 3) {

        return x + y;
    };

    it("will provide defaults for missing params", function() {

        var result = doWork();

        expect(result).toBe(5);
    });

    it("will not provide defaults when params exist", function() {

        var result = doWork(3, 4);

        expect(result).toBe(7);
    });
})