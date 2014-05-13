var serverJs = [
    "*.js",
    "routes/*.js",
    "controllers/*.js",
    "data/*.js",
    "models/*.js"
];

var clientJs = [
    "../../clients/ng/**/*.js",
    "../../clients/es6/**/*.js",
    "../../clients/ember/**/*.js",
    "../../clients/durandal/**/*.js"
];

var html = [
    "../../clients/index.html",
    "../../clients/ng/**/*.html",
    "../../clients/ember/**/*.html",
    "../../clients/es6/**/*.html",
    "../../clients/durandal/**/*.html"
];

var emberTemplates = [
    "../../clients/ember/templates/**/*.hbs"
];

var es6js = [
    "../../clients/es6/tests/es6js/*.js"
];

module.exports = function(grunt) {

    grunt.initConfig({

        express: {
            dev: {
                options: {
                    script: "app.js"
                }
            }
        },

        jshint: {
            files: serverJs
        },

        emberTemplates: {
            compile: {
                options: {
                    templateBasePath: "../../clients/ember/templates/"
                },
                files: {
                    "../../clients/ember/js/templates.js": emberTemplates
                }
            }
        },

        traceur: {
            options: {
                experimental: true
            },
            custom: {
                files: {
                    "../../clients/es6/tests/es5js/default_parameters.js": "../../clients/es6/tests/es6js/default_parameters.js",
                    "../../clients/es6/tests/es5js/spread_parameters.js": "../../clients/es6/tests/es6js/spread_parameters.js",
                    "../../clients/es6/tests/es5js/rest_parameters.js": "../../clients/es6/tests/es6js/rest_parameters.js",
                    "../../clients/es6/tests/es5js/template_strings.js": "../../clients/es6/tests/es6js/template_strings.js",
                    "../../clients/es6/tests/es5js/arrow_functions.js": "../../clients/es6/tests/es6js/arrow_functions.js"
                }
            }
        },

        watch: {

            options: {
                livereload: true
            },

            jshint: {
                files: serverJs.concat(clientJs),
                tasks: ["jshint"]
            },

            traceur: {
                files: es6js,
                tasks: ["traceur"]
            },

            express: {
                files: serverJs,
                tasks: ["express:dev"],
                options: {
                    spawn: false
                }
            },

            emberTemplates: {
                files: emberTemplates,
                tasks: ["emberTemplates"]
            },

            html: {
                files: html
            }

        }

    });

    grunt.registerTask("default", ["express:dev", "watch"]);

    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-express-server");
    grunt.loadNpmTasks("grunt-ember-templates");
    grunt.loadNpmTasks("grunt-traceur");
};