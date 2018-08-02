const util = require('gulp-util');

const production = util.env.production || util.env.prod || false;
const appPath = 'app';
const assetsPath = `${appPath}/assets`;
const srcPath = `${assetsPath}/_src`;
const engineModulesPath = '../../modules';

const config = {
  env: 'development',
  production,

  src: {
    root: srcPath,
    templates: `${srcPath}/templates`,
    sass: `${srcPath}/scss`,
    js: `${srcPath}/js`,
    lib: `${srcPath}/vendor`,
    engineModules: engineModulesPath,
  },
  dest: {
    root: appPath,
    html: appPath,
    css: `${assetsPath}/css`,
    js: `${assetsPath}/js`,
  },
  setEnv: (env) => {
    if (typeof env !== 'string') return;
    config.env = env;
    config.production = env === 'production';
    process.env.NODE_ENV = env;
  },
  logEnv: () => {
    util.log(
      'Environment:',
      util.colors.white.bgRed(` ${process.env.NODE_ENV} `),
    );
  },

  errorHandler: require('./util/handle-errors'),
};

config.setEnv(production ? 'production' : 'development');

module.exports = config;
