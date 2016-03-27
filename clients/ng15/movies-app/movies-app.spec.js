describe("The movies-app component", function () {

    beforeEach(module("atTheMovies"));
    
    var moviesApp;
    beforeEach(inject(function ($componentController, $rootScope) {
        moviesApp = $componentController("moviesApp", { 
            $scope: $rootScope.$new()
        });
    }));

    it("can create component", function () {
        expect(moviesApp).toBeDefined();
    });

});