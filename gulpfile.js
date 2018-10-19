const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
  return gulp.src(['./node_modules/bulma/css/bulma.css', './src/scss/app.scss'])
    .pipe(sass().on('error', sass.logError))
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(concat('app.css'))
    .pipe(autoprefixer({
      browsers: ['last 2 versions', 'ie >= 9']
    }))
    .pipe(gulp.dest('./static/css'));
});

// gulp.task('minify', function () {
//   return gulp.src([
//       './node_modules/jquery/dist/jquery.min.js',
//       './node_modules/gsap/src/minified/easing/EasePack.min.js',
//       './node_modules/gsap/src/minified/TweenLite.min.js',
//       './src/js/app.js'
//     ])
//     .pipe(concat('app.js'))
//     .pipe(uglify())
//     .pipe(gulp.dest('./static/js'))
// });

gulp.task('watch', function () {
  gulp.watch('./src/**/*', ['sass']);
});