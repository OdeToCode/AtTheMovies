(function(){

    var app = angular.module("catchApp", []);

    app.factory("someService", function($q){

        return {
          doWork: function(){
              return $q.when("Hello, World!");
          },

          doError: function(){
              return $q.reject("Ooops!");
          }

        };

    });

    app.config(function($provide){

        $provide.decorator("$exceptionHandler", function($delegate, $injector){
            return function(exception, cause){
                var $rootScope = $injector.get("$rootScope");
                $rootScope.addError({message:"Exception", reason:exception});
                $delegate(exception, cause);
            };
        });

    });

    app.factory("errors", function($rootScope){
        return {
            catch: function(message){
                return function(reason){
                    $rootScope.addError({message: message, reason: reason})
                };
            }
        };
    });

    app.run(function($rootScope, $exceptionHandler){

        $rootScope.addError = function(error){
          $rootScope.errors.unshift(error);
        };

        $rootScope.errors = [];

        $exceptionHandler("foo2", "bar");

    });

   app.controller("mainController", function($scope, someService, $q, errors){

       var workComplete = function(result){
           return  $q.reject("Feeling lazy");
       };

       var workCompletePart2 = function(result){
           $scope.result = "work2";
       }

       var workError = function(reason){
           alert("blam");
           $scope.addError({message: "error", reason: reason});
       };

       $scope.doWork = function(){
           someService
               .doWork()
               .then(workComplete)
               .catch(errors.catch("Could not complete work!"));
       };

   });

}());

