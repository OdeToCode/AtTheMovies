var serverJs = [
              "*.js", 
              "routes/*.js", 
              "controllers/*.js", 
              "data/*.js", 
              "models/*.js"
              ];

var clientJs = [
            "../../clients/ng/**/*.js",
            "../../clients/ember/**/*.js",
            "../../clients/durandal/**/*.js"
            ];

var html = [
            "../../clients/index.html", 
            "../../clients/ng/**/*.html",
            "../../clients/ember/**/*.html",
            "../../clients/durandal/**/*.html"
            ];

module.exports = function(grunt){

  grunt.initConfig({

    express: {
      dev:{
        options:{
          script: "app.js"
        }
      }
    },
    
    jshint: {
      files: serverJs
    },

    watch:{
     
      options: {
        livereload: true
      },

      express:{
        files: serverJs,
        tasks: [ "express:dev"],
        options: {
          spawn:false
        }
      },

      jshint: {
        files: serverJs.concat(clientJs),
        tasks: [ "jshint"]
      },

      html: {
        files: html
      }

    } 

  });

  grunt.registerTask("default", ["jshint", "express:dev", "watch"]);

  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-express-server");
};