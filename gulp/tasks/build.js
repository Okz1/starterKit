const gulp = require('gulp');
const runSequence = require('run-sequence');
const config = require('../config');

function build(cb) {
  runSequence(
    'clean',
    'sass:build',
    'nunjucks',
    'webpack',
    cb,
  );
}

gulp.task('build', (cb) => {
  config.setEnv('production');
  config.logEnv();
  build(cb);
});

gulp.task('build:dev', (cb) => {
  config.setEnv('development');
  config.logEnv();
  build(cb);
});
