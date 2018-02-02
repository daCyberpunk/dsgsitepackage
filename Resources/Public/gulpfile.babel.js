var gulp = require('gulp'),
    babel = require('gulp-babel'),
    sourcemaps = require('gulp-sourcemaps'),
    compass = require('gulp-compass'),
    prefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    babelcore = require('babel-core');
var count = require('gulp-count');
var debug = require('gulp-debug');

gulp.task('sass', function () {
  return gulp.src('Sass/*.sass')
      .pipe(compass({
          config_file: './config.rb',
          css: './Css',
          sass: './Sass'
      }))
      .pipe(prefixer({
          browsers: ['last 2 versions', 'ie >= 9', 'and_chr >= 2.3']
      }))
      .pipe(gulp.dest('Css'))
      // .pipe(sourcemaps.init())
      .pipe(minifycss())
      // .pipe(sourcemaps.write())
      .pipe(rename({
          suffix: ".min"
      }))
      .pipe(gulp.dest('Css'));
});


/* Concat and uglify JavaScript*/
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var extJsonVendor = require('./JavaScript/Vendor/Vendor.json');

gulp.task( 'scripts', [ 'scripts:modules:browserify', 'scripts:vendor'] );



gulp.task('scripts:modules:browserify', function() {
    return browserify({ entries: ['JavaScript/Modules/Main.js'] })
        .bundle()
        .pipe(source('Modules.min.js'))
        .pipe(buffer())
        .pipe(babel())
        // .pipe(sourcemaps.init())
        .pipe(concat('Modules.min.js'))
        .pipe(uglify())
        // .pipe(sourcemaps.write())
        .pipe(gulp.dest("JavaScript/Dist/"));
});

gulp.task('scripts:vendor', function() {
  return gulp.src( extJsonVendor.vendorScripts )
      .pipe(debug())
      .pipe(babel())
      // .pipe(sourcemaps.init())
      .pipe(concat('Vendor.min.js'))
      .pipe(uglify())
      // .pipe(sourcemaps.write())
      .pipe(gulp.dest("JavaScript/Dist/"));
});
