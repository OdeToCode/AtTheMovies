(function(){

    var app = angular.module("timeoutApp", []);

    app.factory("movies", function($http, $q){

        var getById = function(id){
            var canceller = $q.defer();

            var cancel = function(reason){
                canceller.resolve(reason);
            };

            var promise =
                $http.get("/api/movies/slow/" + id, { timeout: canceller.promise})
                    .then(function(response){
                       return response.data;
                    });
            console.log("get");
            return {
                promise: promise,
                cancel: cancel
            };
        };

        return {
            getById: getById
        };

    });

    app.controller("mainController", function($scope, movies) {

        $scope.movies = [];
        $scope.requests = [];
        $scope.id = 1;

        $scope.start = function(){

            var request = movies.getById($scope.id++);
            $scope.requests.push(request);
            request.promise.then(function(movie){
                $scope.movies.push(movie);
                clearRequest(request);
            }, function(reason){
                console.log(reason);
            });
        };

        $scope.cancel = function(request){
            request.cancel("cancelled");
            clearRequest()
        };

        var clearRequest = function(request){
            $scope.requests.splice($scope.requests.indexOf(request), 1);
        };
    });

}());