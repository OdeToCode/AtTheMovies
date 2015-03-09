angular.module("social", []);

(function(module) {

    module.controller("MainController", function($http){

        var model = this;

        var onPosts = function(response) {
            console.log(response.data);
            model.posts = response.data;
        };

        var onError = function(response) {
            model.error = "Could not fetch posts";
        };

        var refreshPosts = function() {
            $http.get("/api/posts").then(onPosts, onError);
        };

        var initialize = function() {
            model.newPost = {};
            refreshPosts();
        };

        model.savePost = function() {
            $http.post("/api/posts", model.newPost).then(initialize);
        };

        initialize();

    });

}(angular.module("social")));
