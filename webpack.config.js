const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, './src/main.js'), // 入口

  output: { // 出口
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },

  module: { // loader
    rules: [
      // { test: /\.txt$/, use: 'raw-loader' },

      // Babel的安装与配置
      // npm install --save-dev babel-core babel-loader babel-preset-env babel-preset-react
      // {
      //   test: /(\.jsx|\.js)$/,
      //   use: {
      //     loader: "babel-loader",
      //     options: {
      //       presets: [
      //         "env", "react"
      //       ]
      //     }
      //   },
      //   exclude: /node_modules/
      // }
    ]
  },

  plugins: [ // 插件
    // new HtmlWebpackPlugin({template: './src/index.html'})
  ],

  mode: 'production', // development

  devtool: 'eval-source-map',

  // 使用webpack构建本地服务器-热加载(让浏览器监听代码的修改，并自动刷新显示修改后的结果)
  // npm install --save-dev webpack-dev-server
  devServer: {
    contentBase: "./public",//本地服务器所加载的页面所在的目录
    historyApiFallback: true,//不跳转
    inline: true//实时刷新
  },
}