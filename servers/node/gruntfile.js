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
      files: ["*.js"]
    },

    watch:{
      express:{
        files: [ "app.js" ],
        tasks: [ "express:dev"],
        options: {
          spawn:false
        }
      },
      
      jshint: {
        files: ["*.js"],
        tasks: [ "jshint"]
      }
    } 

  });

  grunt.registerTask("default", ["jshint", "express:dev", "watch"]);

  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-express-server");
};