const gulp = require('gulp');
const nunjucksRender = require('gulp-nunjucks-render');
const gulpif = require('gulp-if');
const changed = require('gulp-changed');
const prettify = require('gulp-prettify');
const gutil = require('gulp-util');
const chalk = require('chalk');
const config = require('../config');

function renderHtml(onlyChanged) {
  nunjucksRender.nunjucks.configure({
    watch: false,
    trimBlocks: true,
    lstripBlocks: false,
  });

  return gulp
    .src([`${config.src.templates}/**/[^_]*.njk`])
    .pipe(gulpif(onlyChanged, changed(config.dest.html)))
    .pipe(nunjucksRender({
      PRODUCTION: config.production,
      path: [config.src.templates],
    }))
    .on('error', (e) => {
      gutil.log(chalk.red(e));
      gulp.emit('end');
    })
    .pipe(prettify({
      indent_size: 4,
      wrap_attributes: 'auto',
      preserve_newlines: false,
      end_with_newline: true,
    }))
    .pipe(gulp.dest(config.dest.html));
}

gulp.task('nunjucks', () => renderHtml());

gulp.task('nunjucks:changed', () => renderHtml(true));

gulp.task('nunjucks:watch', () => {
  gulp.watch([`${config.src.templates}/**/[^_]*.njk`], ['nunjucks:changed']);
  gulp.watch([`${config.src.templates}/**/_*.njk`], ['nunjucks']);
});
