var gulp = require('gulp');
var connect = require('gulp-connect');
var traceur = require('gulp-traceur');
var plumber = require('gulp-plumber');
var open = require('gulp-open');
var babel = require('gulp-babel');
var webpack = require("gulp-webpack");
var named = require("vinyl-named");

var WEB_PORT = 9000;
var output = ['output/*.*']
var sources = ['classes/*.js', 'functional/*.js',
               'variablesparameters/*.js', 'apis/*.js'];

gulp.task('connect', function() {
    return connect.server({
        root: ["output", "bower_components", "node_modules"],
        port: WEB_PORT,
        livereload: true
    });
});

gulp.task('traceur', function(){
    return gulp.src(sources)
        .pipe(plumber())
        .pipe(traceur({sourceMap:true, experimental:true, blockBinding: true}))
        .pipe(gulp.dest("output"));
});

gulp.task('babel', function () {
    return gulp.src(sources)
        .pipe(plumber())
        .pipe(babel())
        .pipe(gulp.dest("output"));
});

gulp.task("webpack", function() {
    return gulp.src("modules/modules.js")
         .pipe(named())
         .pipe(webpack({
             module: {
                 loaders: [
                     { test: /\.js?$/, loader: 'babel' }
                 ]
             }
         })).pipe(gulp.dest("output/"));
});

gulp.task('open', ["webpack", "babel"], function() {
    var options = { url: 'http://localhost:9000/default.html'};
    return gulp.src("output/default.html").pipe(open("", options));
});

gulp.task('reload', ["babel", "webpack"], function(){
    return gulp.src(output)
        .pipe(connect.reload());
})

gulp.task('watch', function(){
    return gulp.watch(sources.concat("modules/**/*.js"), ['reload']);
});

gulp.task('default', ['connect', "open", "watch"]);
