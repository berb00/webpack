const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
		app: './src/js/index.js',
	},

  output: {
    filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
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
			{
				test: /\.xml$/,
				use: [
					'xml-loader'
				]
			}
		]
	},
	
	plugins: [
		// 清理 /dist 文件夹
		// npm install clean-webpack-plugin --save-dev
		new CleanWebpackPlugin(),

		// 设定 HtmlWebpackPlugin
		// npm install --save-dev html-webpack-plugin
		new HtmlWebpackPlugin({
			title: 'Output Management'
		}),
	]
};


/*
	三种热加载方法:
		1.webpack's Watch Mode		(观察模式) 需刷新
		2.webpack-dev-server
		3.webpack-dev-middleware						需刷新
*/