var gulp = require('gulp');
var lrserver = require('tiny-lr');
var livereload = require('gulp-livereload');
var connect = require('connect');
var traceur = require('gulp-traceur');

var WEB_PORT = 9000;
var lrs = lrserver();

gulp.task('lr-server', function() {
    lrs.listen(35729, function(err) {
        if (err) return console.log(err);
    });
});

gulp.task('http-server', function() {
    connect()
    .use(require('connect-livereload')())
    .use(connect.static('app'))
    .use(connect.static('bower_components'))
    .listen(WEB_PORT);
    console.log('Server listening on http://localhost:' + WEB_PORT);
});

gulp.task('traceur', function(){
    return gulp.src('app/es6/**/*.js')
               .pipe(traceur({sourceMap:true, experimental:true, blockBinding: true}))
               .pipe(gulp.dest('app/es5'));
});

gulp.task('server', function() {
    gulp.run('lr-server');

    var traceurFiles = ['app/es6/**/*.js']
    gulp.watch(traceurFiles, function(){
        gulp.run('traceur');
    });

    var browserFiles = ['app/**/*.html', 'app/es5/**/*.js'];
    gulp.watch(browserFiles, function() {
        console.log('Files changed. Reloading...');
        gulp.src(browserFiles)
        .pipe(livereload(lrs));
    });

    gulp.run('http-server');
});

gulp.task('default', function() {
    gulp.run('server');
});