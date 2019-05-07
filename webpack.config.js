const path = require('path')

module.exports = {

  // 入口
  entry: path.resolve(__dirname, './src/main.js'),

  // 出口
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },

  // loader
  module: { 
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

  // 插件
  plugins: [ 
    // new HtmlWebpackPlugin({template: './src/index.html'})
  ],


  mode: 'development', // production


  /*
    生成Source Maps（使调试更容易）

    source-map 	                  在一个单独的文件中产生一个完整且功能完全的文件。这个文件具有最好的source map，但是它会减慢打包速度；
    cheap-module-source-map 	    在一个单独的文件中生成一个不带列映射的map，不带列映射提高了打包速度，但是也使得浏览器开发者工具只能对应到具体的行，不能对应到具体的列（符号），会对调试造成不便；
    eval-source-map 	            使用eval打包源文件模块，在同一个文件中生成干净的完整的source map。这个选项可以在不影响构建速度的前提下生成完整的sourcemap，但是对打包后输出的JS文件的执行具有性能和安全的隐患。在开发阶段这是一个非常好的选项，在生产阶段则一定不要启用这个选项；
    cheap-module-eval-source-map 	这是在打包文件时最快的生成source map的方法，生成的Source Map 会和打包后的JavaScript文件同行显示，没有列映射，和eval-source-map选项具有相似的缺点；方法构建速度更快，但是不利于调试，推荐在大型项目考虑时间成本时使用。
   */
  devtool: 'eval-source-map',

  /*
    使用webpack构建本地服务器-热加载(让浏览器监听代码的修改，并自动刷新显示修改后的结果)
    npm install --save-dev webpack-dev-server
  */
  devServer: {
    contentBase: "./public",  // 本地服务器所加载的页面所在的目录
    historyApiFallback: true, // 在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html(不跳转)
    port: "8080", 	          // 设置默认监听端口，如果省略，默认为"8080"
    inline: true              // 设置为true，当源文件改变时会自动刷新页面
  },
}