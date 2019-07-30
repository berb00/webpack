const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const WorkboxPlugin = require('workbox-webpack-plugin');


module.exports = {
  entry: {
    // polyfills: './src/polyfills.js',
		app: './src/index.js',
    // moduleA: './src/moduleA.js',
    // ts: './src/index.ts'
	},

  output: {
    filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
    chunkFilename: '[name].bundle.js', // 决定非入口 chunk 的名称
		// 使用 webpack-dev-middleware 
		// npm install --save-dev express webpack-dev-middleware
		// publicPath: '/'
  },

  devtool: 'inline-source-map',

	// 使用 webpack-dev-server (webpack --watch需刷新)
	// npm install --save-dev webpack-dev-server
	devServer: {
    hot: true, // 热更新，无需手动刷新 
    host: '0.0.0.0', // host地址 
    port: 8080, // 服务器端口 
    historyApiFallback: true, // 该选项的作用所用404都连接到index.html 
    proxy: { "/api": "http://localhost:3000"}, // 代理到后端的服务地址，会拦截所有以api开头的请求地址
		contentBase: './dist'
	},

  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },

  module: {
		rules: [
			{	// 加载 CSS
				// npm install --save-dev style-loader css-loader
				test: /\.css/,
				use: [
					'style-loader',
					'css-loader'
				]
			},
			{	// 加载图片
				// npm install --save-dev file-loader
				test: /\.(png|svg|jpg|gif)$/,
				use: [
					'file-loader'
				]
			},
			{	// 加载字体
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: [
					'file-loader'
				]
			},
			{	// 加载数据
				test: /\.(csv|tsv)$/,
				use: [
					'csv-loader'
				]
      },
      { // 加载typeScript
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
			{
				test: /\.xml$/,
				use: [
					'xml-loader'
				]
      },
      // { // 使用 imports-loader 覆写 this
      //   test: require.resolve('index.js'),
      //   use: 'imports-loader?this=>window'
      // },

      // { // 使用 exports-loader，将一个全局变量作为一个普通的模块来导出
      //   test: require.resolve('globals.js'),
      //   use: 'exports-loader?file,parse=helpers.parse'
      // },
		]
	},
	
	plugins: [
		// 清理 /dist 文件夹
		// npm install clean-webpack-plugin --save-dev
		new CleanWebpackPlugin(),

		// 设定 HtmlWebpackPlugin
		// npm install --save-dev html-webpack-plugin
		new HtmlWebpackPlugin({
			title: 'Progressive Web Application'
    }),
    
    // 防止重复(prevent duplication)
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'common' // 指定公共 bundle 的名称。
    // }),

    new webpack.ProvidePlugin({
      _: 'lodash',
      $: 'jquery'
    }),

    new WorkboxPlugin.GenerateSW({
      // 这些选项帮助 ServiceWorkers 快速启用
      // 不允许遗留任何“旧的” ServiceWorkers
      clientsClaim: true,
      skipWaiting: true
    })
	]
};


/*
	三种热加载方法:
		1.webpack's Watch Mode		(观察模式) 需刷新
		2.webpack-dev-server
		3.webpack-dev-middleware						需刷新
*/



/* Npm

npm install http-server --save-dev
npm install workbox-webpack-plugin --save-dev

npm install imports-loader --save-dev
npm install exports-loader --save-dev

npm install --save babel-polyfill
npm install --save whatwg-fetch

npm install --save-dev typescript ts-loader

npm install --save-dev @types/lodash
*/