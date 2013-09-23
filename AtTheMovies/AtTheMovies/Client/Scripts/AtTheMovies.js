(function (app) {

    var config = function ($routeProvider) {
        $routeProvider
            .when("/list", { templateUrl: "/client/views/list.html" })
            .otherwise({ redirectTo: "/list" });
    };
    config.$inject = ["$routeProvider"];


    app.config(config);

}(angular.module("AtTheMovies", ["ngRoute"])));