(function () {

    var app = angular.module("validationApp", []);


    app.controller("mainController", function ($scope) {

    });

    app.directive("startsWithCapital", function () {
        return {
            restrict: "A",
            require: "ngModel"
            link: function(scope, element, attributes, ngModel){
                // ... use of validators will go here. ..
            }
        };
    });

}());