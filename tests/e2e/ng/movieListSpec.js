describe("The home page movie list", function() {

    beforeEach(function() {
        browser.get("/ng/default.html");
    });

    it("should have an 'at the movies' title", function() {
        expect(true).toEqual(false);
    });

    it("should display the movies", function() {
        var title = element(by.repeater("movie in movies").row(0).column("title"));
        expect(title.getText()).toEqual("Star Wars");
    });

});

it('saves to the tracking url', inject(function(eventTracker, $http) {
      postSpy = spyOn($http, 'post');

      model.save();

    expect(postSpy).toHaveBeenCalled();
    expect(postSpy.mostRecentCall.args[0]).not.toEqual('/track');
    expect(postSpy.mostRecentCall.args[1]).toEqual({ 'name': 'Scott' });
}));