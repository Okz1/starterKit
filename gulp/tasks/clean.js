const gulp = require('gulp');
const del = require('del');
const util = require('gulp-util');
const config = require('../config');

gulp.task('clean', () => del([config.dest.css, config.dest.js])
  .then((paths) => {
    util.log('Deleted:', util.colors.magenta(paths.join('\n')));
  }));
