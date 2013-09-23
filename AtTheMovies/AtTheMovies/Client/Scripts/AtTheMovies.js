﻿(function (app) {

    var config = function ($routeProvider) {
        $routeProvider
            .when("/list", { templateUrl: "/client/views/list.html" })
            .when("/details/:id", { templateUrl: "/client/views/details.html" })
            .otherwise({ redirectTo: "/list" });
    };
    config.$inject = ["$routeProvider"];

    app.config(config);

}(angular.module("AtTheMovies", ["ngRoute", "ngResource"])));