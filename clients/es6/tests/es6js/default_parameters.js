describe("default parameters", function() {

    var getDefaultName = function() {
        return "Scott";
    };

    var getGreeting = function(name = getDefaultName()) {

        return "Hello, " + name;
    };

    it("will provide defaults for missing params", function() {

        var result = getGreeting();

        expect(result).toBe("Hello, Scott");

    });

    it("will not provide defaults for params", function() {

        var result = getGreeting("Alex");

        expect(result).toBe("Hello, Alex");

    });


})