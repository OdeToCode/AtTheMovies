describe("The home page movie list", function() {

    it("should display the movies", function() {
        browser.get("/ng/default.html");
        var title = element(by.repeater("movie in movies").row(0).column("title"));
        expect(title.getText()).toEqual("Star Wars");
    });

});