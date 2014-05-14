(function () {

    var app = angular.module("app", ["ngRoute"]);

    app.run(function(){
        console.log("Running");
    });

    app.config(function ($routeProvider) {

        $routeProvider
            .when("/1", {
                templateUrl: "view1.html",
                controller: "Controller1",
                resolve: {
                    initialData: function(Controller1InitialData){
                        return Controller1InitialData();
                    }
                }
            })
            .when("/2", {
                templateUrl: "view2.html",
                controller: "Controller2",
                resolve: {
                    message: function(messageService){
                        return messageService.getMessage();
                    }
                }
            })
            .otherwise({redirectTo: "/1"});
    });


    app.controller("Controller1", function ($scope, initialData) {
        $scope.message = initialData.message;
        $scope.greeting = initialData.greeting;
    });

    app.factory("Controller1InitialData", function(messageService, greetingService, $q) {
        return function() {
            var message = messageService.getMessage();
            var greeting = greetingService.getGreeting();

            return $q.all([message, greeting]).then(function(results){
                return {
                    message: results[0],
                    greeting: results[1]
                };
            });
        }
    });

    app.controller("Controller2", function ($scope, message) {
        $scope.message = message;
    });

    app.factory("greetingService", function($q, $timeout){
       return {
           getGreeting: function(){
                var deferred = $q.defer();
               $timeout(function(){
                   deferred.resolve("Allo!");
               },2000);
               return deferred.promise;
           }
       }
    });

    app.factory("messageService", function($q){
        return {
            getMessage: function(){
                return $q.when("Hello World!");
            }
        };
    });

}());
