var gulp = require('gulp');
var mocha = require('gulp-mocha');
var jshint = require('gulp-jshint');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('test', function () {
    return gulp.src('square-month.tests.js', {read: false})
        .pipe(mocha({reporter: 'nyan'}));
});

gulp.task('lint', function() {
    return gulp.src(['./*.js', '!./*.min.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('default', ['lint', 'test'], function () {
    return gulp.src('./square-month.js')
        .pipe(rename({suffix: ".min"}))
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./'));
});
