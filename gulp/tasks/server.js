const gulp = require('gulp');
const server = require('browser-sync').create();
const util = require('gulp-util');
const config = require('../config');

gulp.task('server', () => {
  server.init({
    server: {
      baseDir: config.dest.root,
      directory: false,
      serveStaticOptions: {
        extensions: ['html'],
      },
    },
    files: [
      `${config.dest.html}/*.html`,
      `${config.dest.html}/*.css`,
      `${config.dest.html}/*.js`,
      `${config.dest.html}/**/*`,
    ],
    port: util.env.port || 3000,
    logLevel: 'info', // 'debug', 'info', 'silent', 'warn'
    logConnections: false,
    logFileChanges: true,
    open: Boolean(util.env.open),
    notify: false,
    ghostMode: false,
    online: Boolean(util.env.tunnel),
    tunnel: util.env.tunnel || null,
  });
});

module.exports = server;
