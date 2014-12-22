var gulp = require('gulp');
var lrserver = require('tiny-lr');
var livereload = require('gulp-livereload');
var connect = require('connect');
var serveStatic = require('serve-static');
var traceur = require('gulp-traceur');
var plumber = require('gulp-plumber');

var WEB_PORT = 9000;
var lrs = lrserver();
var sources = ['classes/*.js', 'functional/*.js', 'variablesparameters/*.js'];

gulp.task('lr-server', function() {
    lrs.listen(35729, function(err) {
        if (err) return console.log(err);
    });
});

gulp.task('http-server', function() {
    connect()
    .use(require('connect-livereload')())
    .use(serveStatic('output'))
    .use(serveStatic('bower_components'))
    .listen(WEB_PORT);
    console.log('Server listening on http://localhost:' + WEB_PORT);
});

gulp.task('traceur', function(){
    return gulp.src(sources)
               .pipe(plumber())
               .pipe(traceur({sourceMap:true, experimental:true, blockBinding: true}))
               .pipe(gulp.dest('output'));
});

gulp.task('server', function() {
    gulp.run('lr-server');
    gulp.run('traceur');
    gulp.watch(sources, function(){
        gulp.run('traceur');
        gulp.src(sources)
            .pipe(livereload(lrs));
    });
    gulp.run('http-server');
});

gulp.task('default', function() {
    gulp.run('server');
});