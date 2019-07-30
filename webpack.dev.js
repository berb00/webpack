const merge = require('webpack-merge'); // npm install --save-dev webpack-merge
const common = require('./webpack.common.js');
module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  }
});
