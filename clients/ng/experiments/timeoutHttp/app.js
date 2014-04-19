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

    app.controller("mainController", function($scope, $http, cancellations) {

        var cancelToken = null;

        $scope.message = "Not started";

        $scope.start = function(){
            $scope.message = "Started";

            cancelToken = cancellations.getToken();
            $http.get("/api/movies/slow/1", {
                timeout: cancelToken.promise
            }).then(function(response){
                $scope.message = response.data.title;
            });
        };

        $scope.cancel = function(){
            if(cancelToken){
                cancelToken.cancel();
                $scope.message = "Canceled";
            }
        };

    });

}());