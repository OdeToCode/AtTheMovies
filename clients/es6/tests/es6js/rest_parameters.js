describe("rest parameter", function() {

    var sum = function(...args) {
        var result = 0;
        for (var i = 0; i < args.length; i++) {
            result += args[i];
        }
        return result;
    };

    it("is like varargs!", function() {
        var result = sum(-2, 5, 1, 2);
        expect(result).toBe(6);
    });

});