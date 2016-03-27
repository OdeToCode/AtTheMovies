(function () {

    var module = angular.module("atTheMovies");
        
    module.component("rating", {

        bindings: {
            value: "<"
        },

        templateUrl: "movies-app/rating.component.html",
        controllerAs: "model",
        transclude: true,
        controller: function () {
            var model = this;

            model.$onInit = function () {
                model.entries = new Array(this.value)
            };

            model.$onChanges = function () {
                model.entries = new Array(this.value);
            };
        }

    });


} ());