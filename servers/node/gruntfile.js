var serverFiles = ["*.js", "routes/*.js", "controllers/*.js", "data/*.js", "models/*.js"];

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
      files: serverFiles
    },

    watch:{
      express:{
        files: serverFiles,
        tasks: [ "express:dev"],
        options: {
          spawn:false
        }
      },
      
      jshint: {
        files: serverFiles,
        tasks: [ "jshint"]
      }
    } 

  });

  grunt.registerTask("default", ["jshint", "express:dev", "watch"]);

  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-express-server");
};