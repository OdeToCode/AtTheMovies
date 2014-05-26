(function(){

    var app = angular.module("compiler", []);

    app.controller("mainController", function($scope){
        $scope.message = "Hello!";

        $scope.getMessage = function(){
          return "Allo!";
        };
    });

    app.config(function($provide){
        $provide.decorator("$interpolate", function($delegate){

            var interpolateWrap = function(){
                var interpolationFn = $delegate.apply(this, arguments);
                if(interpolationFn) {
                    return interpolationFnWrap(interpolationFn, arguments);
                }
            };

            var interpolationFnWrap = function(interpolationFn, interpolationArgs){
                return function(){
                    var result = interpolationFn.apply(this, arguments);
                    var log = result ? console.log : console.warn;
                    log.call(console, "interpolation of  " + interpolationArgs[0].trim(), result.trim());
                    return result;
                };
            };

            angular.extend(interpolateWrap, $delegate);
            return interpolateWrap;

        });
    });

}());
