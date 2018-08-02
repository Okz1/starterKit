const gulp = require('gulp');

gulp.task('watch', [
  'nunjucks:watch',
  'webpack:watch',
  'sass:watch',
]);
