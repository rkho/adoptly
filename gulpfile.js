// node modules
// ============

var gulp = require('gulp'),
  bower = require('gulp-bower'),
  plumber = require('gulp-plumber'),
  uglify = require('gulp-uglify'),
  concat = require('gulp-concat');

// directories
// ===========
var path = {};
path.BOWER_COMPONENTS_DIR = './bower_components';
path.DIST_JS_DIR = './client/dist/js';
path.DIST_CSS_DIR = './client/dist/css';
path.DIST_VEN_DIR = './client/dist/vendor';

// build src code
// ==============

path.APP_JS_SRC = [
  './client/build/js/*.js'
];
path.APP_JS_MIN = 'app.min.js';

path.APP_CSS_SRC = [
  './client/build/css/*.css'
];
path.APP_CSS_MIN = 'app.min.css';

// build vendor src code
// =====================

path.VEN_JS_SRC = [
  './bower_components/*/*.js',
  './bower_components/*/*/*.js'
]

path.VEN_JS_MIN = 'vendor.min.js';

// build task: fetch, uglify, concat code
// ======================================

gulp.task('build', ['app', 'ven']);

gulp.task('app', function() {
  gulp.src(path.APP_JS_SRC)
    .pipe(plumber())
    .pipe(uglify())
    .pipe(concat(path.APP_JS_MIN))
    .pipe(gulp.dest(path.DIST_JS_DIR));
});

gulp.task('ven', function() {
  gulp.src(path.VEN_JS_SRC)
    .pipe(plumber())
    .pipe(uglify())
    .pipe(concat(path.VEN_JS_MIN))
    .pipe(gulp.dest(path.DIST_VEN_DIR));
});