describe("The movieList component", function () {

    beforeEach(module("psMovies"));
    
    var moviesList;
    beforeEach(inject(function ($componentController) {
        moviesList = $componentController("movieList",{
           $scope: {} 
        });
    }));

    it("can be created", function () {
        expect(moviesList).toBeDefined();
        expect(moviesList.$onInit).toBeDefined();
    });

});