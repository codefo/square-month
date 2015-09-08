var gulp = require('gulp');
var mocha = require('gulp-mocha');
var jshint = require('gulp-jshint');

gulp.task('test', function () {
    return gulp.src('square-month.tests.js', {read: false})
        .pipe(mocha({reporter: 'nyan'}));
});

gulp.task('lint', function() {
    return gulp.src('./*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('default', ['lint', 'test']);
