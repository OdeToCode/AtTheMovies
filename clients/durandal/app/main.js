requirejs.config({
    paths: {
        "text": "/bower_components/requirejs-text/text",
        "durandal": "/bower_components/durandal/js",
        "plugins": "/bower_components/durandal/js/plugins",
        "transitions": "/bower_components/durandal/js/transitions",
        "knockout": "/bower_components/knockout.js/knockout",
        "jquery": "/bower_components/jquery/jquery"
    }
});

define(function(require) {
    var system = require("durandal/system");
    var app = require("durandal/app")

    system.debug(true);

    app.title = "Durandal Starter Kit";

    app.configurePlugins({
        router: true,
        dialog: true
    });

    app.start().then(function() {
        app.setRoot("shell");
    });
});