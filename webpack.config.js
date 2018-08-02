const webpack = require('webpack');
const path = require('path');
const config = require('./gulp/config');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

function createConfig(envParam) {
  const env = envParam !== 'undefined' ? envParam : process.env.NODE_ENV;
  const isProduction = env === 'production';
  const webpackConfig = {
    context: path.join(__dirname, config.src.js),
    entry: {
      // vendor: ['jquery'],
      main: './main.js',
    },
    output: {
      path: path.join(__dirname, config.dest.js),
      filename: '[name].js',
      publicPath: path.join(__dirname, config.dest.js),
    },
    plugins: [
      // new webpack.optimize.CommonsChunkPlugin({
      //     name: 'vendor',
      //     filename: '[name].js',
      //     minChunks: Infinity
      // }),
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
      }),
      new webpack.NoEmitOnErrorsPlugin(),
      // new webpack.HotModuleReplacementPlugin({
      //   multiStep: true,
      // }),
    ],
    resolve: {
      extensions: ['.js'],
      alias: {},
    },
    module: {
      rules: [
        // {
        //   enforce: 'pre',
        //   test: /\.js$/,
        //   exclude: [
        //     path.resolve(__dirname, 'node_modules'),
        //   ],
        //   loader: 'eslint-loader',
        //   options: {
        //     configFile: path.resolve('./.eslintrc'),
        //     fix: false,
        //     cache: true,
        //     ignorePattern: `${__dirname}/src/js/lib/`,
        //   },
        // },
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: [
            path.resolve(__dirname, 'node_modules'),
          ],
        }],
    },
    devtool: isProduction ? '#source-map' : '#cheap-module-eval-source-map',
  };

  if (isProduction) {
    webpackConfig.plugins.push(
      new webpack.LoaderOptionsPlugin({
        minimize: true,
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
        },
      }),
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        analyzerPort: 4000,
        openAnalyzer: false,
      }),
    );
  }

  return webpackConfig;
}

module.exports = createConfig();
module.exports.createConfig = createConfig;
