 "use strict"
var gulp = require('gulp');
var gls = require('gulp-live-server');
var jshint = require('gulp-jshint');
var less = require('gulp-less');
var livereload = require('gulp-livereload');
var connect = require('gulp-connect');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var gulp = require('gulp');
var uglify = require('gulp-uglify');

gulp.task('server', function() {
	var server = gls.static(['/'], 5000);
	console.log('Сервер запущен, перейдите по адресу http://localhost:5000/');
	server.start();
});

gulp.task('connect', function() {
  connect.server({
    root: './',
    livereload: true
  });
});

gulp.task('less', function() {
  gulp.src('less/*.less')
    // .pipe(livereload())
    .pipe(less())
    .pipe(gulp.dest('css/'));
});

gulp.task('autoprefix', () =>
    gulp.src('css/*.css')
        .pipe(autoprefixer({
            browsers: ['last 25 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('css/'))
);

gulp.task('minify-css', function() {
  return gulp.src('css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist'))
    .pipe(livereload());
});

gulp.task('compress', function () {
  return gulp.src('script/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

gulp.task('html', function () {
  gulp.src('/')
    .pipe(livereload());
});

gulp.task('js', function () {
  gulp.src('script/*.js')
    .pipe(livereload());
});
 
gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('less/*.less', ['less'])
  gulp.watch('css/*.css', ['autoprefix'])
  gulp.watch('css/*.css', ['minify-css'])
  gulp.watch('script/*.js', ['js'])
  gulp.watch('*.html', ['html']);
});

gulp.task('default', ['connect', "watch",'less','autoprefix','compress','minify-css']);