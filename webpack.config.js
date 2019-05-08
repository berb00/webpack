const path = require('path')

// Babel默认只转换新的JavaScript句法，而不转换新的API，比如Iterator、Generator、Set、Maps、Proxy、Reflect、Symbol、Promise等全局对象，以及一些定义在全局对象上的方法（比如Object.assign）都不会转码
// npm install --save babel-polyfill
import 'babel-polyfill';
/**
 * npm init
 * npm install --save-dev webpack
 *  
 * */
module.exports = {

  // 入口
  entry: [path.resolve(__dirname, './src/main.js'), 'babel-polyfill'],

  // 出口
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },

  // loader: 本质上做的是一个anything to JS的转换
  module: { 
    rules: [
      // { test: /\.txt$/, use: 'raw-loader' },

      // JSON 转换已内置 无需配置

      // Babel的安装与配置
      // npm install --save-dev babel-core babel-loader babel-preset-env babel-preset-react
      // babel-loader：在import或加载模块时，对es6代码进行预处理，es6语法转化为es5语法。
      // babel-core：允许我们去调用babel的api，可以将js代码分析成ast（抽象语法树），方便各个插件分析语法进行相应的处理.
      // babel-preset-env：指定规范，比如es2015，es2016，es2017，latest，env（包含前面全部）
      // babel-polyfill：它效仿一个完整的ES2015+环境，使得我们能够使用新的内置对象比如 Promise，静态方法比如Array.from 或者 Object.assign, 实例方法比如 Array.prototype.includes 和生成器函数（提供给你使用 regenerator 插件）。为了达到这一点， polyfill 添加到了全局范围，就像原生类型比如 String 一样。
      // babel-runtime babel-plugin-transform-runtime：与babel-polyfill作用一样，使用场景不一样。
      {
        test: /(\.jsx|\.js)$/, // 用以匹配loaders所处理文件的拓展名的正则表达式
        use: {
          loader: "babel-loader",
          options: {
            presets: [ "env"] // 转码规则 presets: [ "env", "react"]
          }
        },
        exclude: /node_modules/, // include/exclude:手动添加必须处理的文件（文件夹）或屏蔽不需要处理的文件（文件夹）（可选）；
        query: {  // 可以使用query来指定参数，也可以在loader中用和require一样的用法指定参数，如`jade?p1=1`
          p1: '1'
        }
      },

      // {
      //   test: /\.css$/,
      //   loader: 'style!css'             //  loader可以和require用法一样串联
      //   // loaders: ['style', 'css']    //  也可以用数组指定loader
      // }
    ]
  },

  // 插件
  plugins: [ 
    // new HtmlWebpackPlugin({template: './src/index.html'})
  ],

  // production   压缩版
  // development  webpack版
  mode: 'production', 


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