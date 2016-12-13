var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concatCss = require('gulp-concat-css'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat');

// styles //
gulp.task('css', function() {
  return gulp.src('assets/css/*.css')
    .pipe(autoprefixer({
			browsers: ['last 12 versions'],
			cascade: false
		}))
    .pipe(concatCss("all.css"))
    // .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('app/css/'));
});

// SASS //
gulp.task('sass', function () {
  return gulp.src('assets/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('assets/css/'));
});

// SCRIPTS //
gulp.task('js', function() {
  gulp.src([
    'assets/js/jquery.min.js',
    'assets/js/moment.min.js',
    'assets/js/bootstrap.min.js',
    'assets/js/bootstrap-datetimepicker.js',
    'assets/js/crop.js',
    'assets/js/swiper.jquery.js',
    'assets/js/toastr.js',
    'assets/js/main.js',
    'assets/js/app.js',
    'assets/js/count.js',
    'assets/js/avatar.js',
    // 'assets/js/retina.js',
    ])

    // .pipe(uglify())

    .pipe(gulp.dest('assets/js/concat/'))
    .on('error', function (error) {
        console.error('' + error);
    })
});

gulp.task('concat', function(){
    gulp.src([
    'assets/js/concat/jquery.min.js',
    'assets/js/concat/moment.min.js',
    'assets/js/concat/bootstrap.min.js',
    'assets/js/concat/bootstrap-datetimepicker.js',
    'assets/js/concat/crop.js',
    'assets/js/concat/swiper.jquery.js',
    'assets/js/concat/toastr.js',
    'assets/js/concat/main.js',
    'assets/js/concat/app.js',
    'assets/js/concat/count.js',
    'assets/js/concat/avatar.js',
    // 'assets/js/concat/retina.js',
    ])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('app/js/'))
});
 
// watch OPEN //
gulp.task('default', function() {
  gulp.watch([
    'assets/js/jquery.min.js',
    'assets/js/moment.min.js',
    'assets/js/bootstrap.min.js',
    'assets/js/bootstrap-datetimepicker.js',
    'assets/js/crop.js',
    'assets/js/swiper.jquery.js',
    'assets/js/toastr.js',
    'assets/js/main.js',
    'assets/js/app.js',
    'assets/js/count.js',
    'assets/js/avatar.js',
    // 'assets/js/retina.js',
    ], ['js']);

  // styles
  gulp.watch('assets/scss/*.scss', ['sass']);
  gulp.watch('assets/js/concat/*.js', ['concat']);
  gulp.watch('assets/css/*.css', ['css']);
});
