const webpack = require('webpack');
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')

const devWebpackConfig = merge(baseWebpackConfig, {
  mode: 'development',

  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: '[file].map'
    })
  ],
  devServer: {
    contentBase: baseWebpackConfig.externals.paths.dist,
    overlay: {
      warnings: true,
      errors: true
    },
  }
});

module.exports = new Promise((resolve, reject) => {
    resolve(devWebpackConfig)
  })