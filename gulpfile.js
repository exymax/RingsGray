const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const htmlmin = require('gulp-html-minifier');
const rename = require("gulp-rename");
const uglify = require('gulp-uglify-es').default;
const image = require('gulp-image');
const path = require("path");

gulp.task('images', function() {
  gulp.src('src/images/*')
    .pipe(gulp.dest('docs/images/'));
});

gulp.task('html', function() {
  gulp.src('src/*.html')
    .pipe(htmlmin({collapseWhitespace:true}))
    .pipe(gulp.dest('docs/'))
});

gulp.task('css', () => {
  return gulp.src('src/styles/*.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('docs/styles'));
});

gulp.task("js", function () {
  return gulp.src("src/js/*.js")
    .pipe(uglify(/* options */))
    .pipe(gulp.dest("docs/js"));
});

gulp.task('image', function () {
  gulp.src('src/images/**/*')
    .pipe(image())
    .pipe(gulp.dest('docs/images'));
});

gulp.task('fonts', function () {
  gulp.src('src/fonts/**/*')
    .pipe(gulp.dest('docs/fonts'));
});

gulp.task('replaceslick', function () {
  gulp.src('src/slick/**/*')
    .pipe(gulp.dest('docs/slick'));
});


gulp.task('default', () =>
  gulp.src('src/styles/index.css')
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(cleanCSS())
    .pipe(gulp.dest('docs'))
);
