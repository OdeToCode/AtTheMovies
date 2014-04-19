/**
 * Created by bitmask on 4/19/14.
 */
(function(){

    var app = angular.module("timeoutApp", []);

    app.service("cancellations", function($q){

        var getToken = function(){

            var defer = $q.defer();

            return {

                promise: defer.promise,
                cancel: function(reason){
                    defer.resolve(reason);
                }
            }
        };

        return {
            getToken: getToken
        };

    });

    app.controller("mainController", function($scope, $http, $q) {

        var canceller = null;

        $scope.message = "Not started";

        $scope.start = function(){
            $scope.message = "Started";

            canceller = $q.defer();

            $http.get("/api/movies/slow/1", { timeout: canceller.promise })
                 .then(function(response){
                    $scope.message = response.data.title;
                 }, function(){
                    $scope.message = "Request failed";
                });
        };

        $scope.cancel = function(){
            if(canceller){
                canceller.resolve("User cancelled")
            }
        };

    });

}());