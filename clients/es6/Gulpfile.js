var gulp = require('gulp');
var connect = require('gulp-connect');
var traceur = require('gulp-traceur');
var plumber = require('gulp-plumber');
var open = require('gulp-open');
var to5 = require('gulp-6to5');

var WEB_PORT = 9000;
var output = ['output/*.*']
var sources = ['classes/*.js', 'functional/*.js',
               'variablesparameters/*.js', 'apis/*.js'];

gulp.task('connect', function() {
    return connect.server({
        root: ["output", "bower_components"],
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

gulp.task('sixtofive', function () {
    return gulp.src(sources)
        .pipe(plumber())
        .pipe(to5())
        .pipe(gulp.dest("output"));
});


gulp.task('open', function() {
    var options = { url: 'http://localhost:9000/default.html'};
    return gulp.src("output/default.html").pipe(open("", options));
});

gulp.task('reload', function(){
    return gulp.src(output)
        .pipe(connect.reload());
})

gulp.task('watch', function(){
    gulp.watch(sources, ['traceur']);
    gulp.watch(output, ['reload']);
});

gulp.task('default', ['connect', 'sixtofive', 'open', 'watch']);
