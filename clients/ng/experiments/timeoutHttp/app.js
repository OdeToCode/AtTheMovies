(function(){

    var app = angular.module("timeoutApp", []);

    app.factory("movies", function($http, $q){

        var getById = function(id){
            var canceller = $q.defer();
            var promise =
                $http.get("/api/movies/slow/" + id, { timeout: canceller.promise})
                    .then(function(response){
                       return response.data;
                    });
            console.log("get");
            return {
                promise: promise,
                cancel: canceller
            };
        };

        return {
            getById: getById
        };

    });

    app.controller("mainController", function($scope, movies) {

        var clearRequest = function(request){
            $scope.requests.splice($scope.requests.indexOf(request), 1);
        };

        $scope.movies = [];
        $scope.requests = [];
        $scope.id = 1;

        $scope.start = function(){

            var request = movies.getById($scope.id++);
            $scope.requests.push(request);
            request.promise.then(function(movie){
                $scope.movies.push(movie);
                clearRequest(request);
            });
        };

        $scope.cancel = function(request){
            request.cancel.resolve("cancelled");
            clearRequest()
        };
    });

}());