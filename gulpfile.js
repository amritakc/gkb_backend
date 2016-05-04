var gulp = require('gulp');

var sass = require('gulp-sass');
var concat = require('gulp-concat');

// Compile our SASS
gulp.task('sass', function() {
    return gulp.src('./client/static/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./client/static/css'));
});

// Concatenate JS Files
gulp.task('scripts', function() {
    return gulp.src(['./client/js/config/app.module.js', './client/js/config/*.js', './client/js/models/*.js', './client/js/controllers/*.js'])
        .pipe(concat('app.js'))
        .pipe(gulp.dest('./client/js/full'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch(['./client/js/config/*.js', './client/js/controllers/*.js', './client/js/models/*.js'], ['scripts']);
    gulp.watch('./client/static/scss/*.scss', ['sass']);
});

// Default Task
gulp.task('default', ['sass', 'scripts', 'watch']);