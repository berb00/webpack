const merge = require('webpack-merge'); // npm install --save-dev webpack-merge
const common = require('./webpack.common.js');
module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: '../dist'
  }
});
