(function(){

    var app = angular.module("app", []);

    app.controller("mainController", function($scope, movieData) {

        $scope.movies = movieData.getAll();

        $scope.genres = _.chain($scope.movies).pluck("genre").uniq().sortBy().value();
        $scope.years = _.chain($scope.movies).pluck("released").uniq().sortBy().value();

        $scope.clearFilters = function(){
            $scope.selectedGenre =  undefined;
            $scope.selectedYear = undefined;
        };

    });

    app.factory("movieData", function(){

        var movies = [
            { title: "Godzilla", genre:"Action", released: 2014},
            { title: "Tarzan", genre: "Action", released: 2013},
            { title: "Edge Of Tomorrow", genre: "Action", released: 2014},
            { title: "Neighbors", genre: "Comedy", released: 2014},
            { title: "Frozen", genre: "Comedy", released: 2013},
            { title: "Into The Woods", genre: "Musical", released: 2014},
            { title: "Tangled", genre: "Musical", released: 2010 }
        ];

        return {
            getAll: function(){
                return movies;
            }
       };
    });
}());
