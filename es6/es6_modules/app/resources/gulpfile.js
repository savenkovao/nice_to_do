var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    rename = require('gulp-rename'),
    babelify = require('babelify'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    less = require('gulp-less'),
    cssmin = require('gulp-minify-css'),
    autoprefixer = require('gulp-autoprefixer'),
    rename = require('gulp-rename');

    require("any-promise/register")("bluebird");

gulp.task('browserSync', function () {
    browserSync({
        server: {
            baseDir: './'
        }
    });
});

function es6toes5(src, dest) {
    return browserify({entries: src, extensions: ['.js'], debug: true})
        .transform(babelify, {
            "presets" : ["es2015"]
        })
        .bundle()
        .pipe(source(dest))
        .pipe(gulp.dest('./src/js'))
        .pipe(browserSync.reload({
            stream: true
        }));
}

gulp.task('less', function(){
    return gulp.src('src/less/index.less')

        .pipe(less()) // используем gulp-less
        .pipe(autoprefixer({
            browsers:
                [
                    'Chrome > 20',
                    'Firefox > 20',
                    'Safari > 8',
                    'iOS > 7',
                    'ie > 8'
                ]
        }))
        .pipe(cssmin())
        .pipe(rename('index.min.css'))
        .pipe(gulp.dest('./src/css'))
        .pipe(browserSync.reload({
            stream: true
        }));
});


gulp.task('script', function() {
   return es6toes5('src/js/index.js', 'app.js')

});

gulp.task('watch', function(){
    gulp.watch('src/js/**/*.js', ['script']);
    gulp.watch('src/less/**/*.less', ['less']);
    gulp.watch('*.html', browserSync.reload);
});

gulp.task('default', ['browserSync', 'less', 'script', 'watch']);