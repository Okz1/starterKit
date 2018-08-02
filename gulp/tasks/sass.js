const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const gutil = require('gulp-util');
const chalk = require('chalk');
const config = require('../config');

gulp.task('sass', () => gulp
  .src(`${config.src.sass}/*.{sass,scss}`)
  .pipe(sourcemaps.init())
  .pipe(sass({
    outputStyle: config.production ? 'compact' : 'expanded', // nested, expanded, compact, compressed
    precision: 5,
  }))
  .on('error', (e) => {
    gutil.log(chalk.red(e));
    gulp.emit('end');
  })
  .pipe(sourcemaps.write('./'))
  .pipe(gulp.dest(config.dest.css)));

gulp.task('sass:build', () => gulp
  .src(`${config.src.sass}/*.{sass,scss}`)
  .pipe(sass({
    outputStyle: config.production ? 'compact' : 'expanded', // nested, expanded, compact, compressed
    precision: 5,
  }))
  .on('error', (e) => {
    gutil.log(chalk.red(e));
    gulp.emit('end');
  })
  .pipe(autoprefixer({
    browsers: ['last 15 versions'],
    cascade: false,
  }))
  .pipe(gulp.dest(config.dest.css)));

gulp.task('sass:watch', () => {
  gulp.watch(`${config.src.sass}/**/*.{sass,scss}`, ['sass']);
});
