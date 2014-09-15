module.exports = function (grunt) {
    "use strict";

    grunt.initConfig({
        express: {
            all: {
                options: {
                    port: 9000,
                    hostname: "0.0.0.0",
                    bases: ["app", "bower_components"]
                }
            }
        },
         traceur: {
            options: {
                experimental: true
            },
            custom: {
                files: [{
                    expand: true, 
                    src: ["app/es6/*.js"],
                    dest: "app/es5/",
                    ext: ".js", 
                    flatten: true
                }]
            }
        },
        karma: {
            unit: {
                configFile: 'specs/karma.conf.js',
                background: true 
            }
        },
        concat: {
            dist: {
                src: ["app/app.js", "app/es5/*.js"],
                dest: "app/dist/pong.js"
            }
        },
        watch: {
            all: {
                files: ["app/default.html", "app/*.js", "app/es5/**/*.js"],
                options: {
                    livereload: true
                }
            },
            js: {
                files: "app/es6/**/*.js",
                tasks: ["traceur"]                
            },
            concat: {
                files: ["app.js", "app/es5/**/*.js"],
                tasks: ["concat"]

            },
            karma: {
                files: ['app/dist/*.js', 'specs/*.js'],
                tasks: ['karma:unit:run'] 
            }
        },
        open: {
            all: {
                path: "http://localhost:9000/default.html"
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-karma");
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-express");
    grunt.loadNpmTasks("grunt-open");
    grunt.loadNpmTasks("grunt-traceur");
    grunt.registerTask("default", ["traceur", "concat", "express", "open", "karma", "watch"]);
};