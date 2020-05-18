const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin') // css抽离
const OptimizeCss = require('optimize-css-assets-webpack-plugin') // css压缩 production模式下
const UglifyJsPlugin = require('uglifyjs-webpack-plugin') // 压缩js 可能和新版本babel-loader不兼容
const CopyWebpackPlugin = require('copy-webpack-plugin') // 拷贝文件

// const utils = require('./utils')

function resolve (dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    context: path.resolve(__dirname, '../'),

    entry: {
        app: path.resolve(__dirname, '../src/index.js')
    },

    watch: true, // 热重载监听build

    watchOptions: {
        poll: 1000, // 每秒检查一次变动
        aggregateTimeout: 500, // 防抖 编辑代码过程中不打包
        ignored: /node_modules/ // 忽略打包文件
    },

    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].bundle.[hash:8].js',
        chunkFilename: '[name].bundle.js' // 决定非入口 chunk 的名称
        // publicPath: '' // 添加所有资源路径baseURL
        // 使用 webpack-dev-middleware
        // npm install --save-dev express webpack-dev-middleware
        // publicPath: '/'
    },

    // 源码映射 会单独生成一个sourcemap文件 报错时会标识错误行号 可以调试源码(生产环境下代码被压缩为一行无法调试)
    // eval-source-map 不会产生单独的map文件，但显示报错行列位置
    // cheap-module-source-map
    devtool: 'source-map',

    // 使用 webpack-dev-server (webpack --watch需刷新)
    // npm install --save-dev webpack-dev-server
    devServer: {
        hot: true, // 热更新，无需手动刷新
        host: 'localhost', // host地址
        port: 8080, // 服务器端口
        progress: true, // 进度条
        historyApiFallback: true, // 该选项的作用所用404都连接到index.html
        contentBase: path.join(__dirname, '../dist'), // 指定运行目录
        compress: true, // gzip压缩
        proxy: { // 代理到后端的服务地址，会拦截所有以api开头的请求地址
            '/api': {
                target: 'http://localhost:3000',
                pathRewrite: {
                    '/api': ''
                }
            }
        }
    },

    resolve: { // 解析第三方包 common
        extensions: ['.js', '.vue', '.json', '.tsx', '.ts', '.js', '.css'], // 添加扩展名 自左向右匹配
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': resolve('src')
        }
        // modules: [path.resolve('node_modules')], // 配置第三方包查找路径
    },

    module: {
        rules: [
            {	// 加载 CSS
                // npm install --save-dev style-loader css-loader(接续@import)
                // style-loader 把css插入到head标签
                // css-loader		接续@import
                // loader：从右至左 从下到上执行
                // npm i -D postcss-loader autoprefixer // css兼容前缀
                test: /\.css$/,
                use: [
                    // {
                    // 	loader: 'style-loader',
                    // 	options: {
                    // 		insertAt: 'top' // 在顶部插入 这样在index.html中写的style标签样式优先级更高
                    // 	}
                    // },
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader'
                ]
            },
            { // 加载less
                // npm install --save-dev less less-loader
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader', // @import 解析路径
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                            config: {
                                path: 'postcss.config.js'
                            }
                        }
                    },
                    'less-loader' // less -> css
                ]
            },
            { // 加载scss
                // npm install --save-dev scss node-sass scss-loader
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader', // @import 解析路径
                    'postcss-loader',
                    'sass-loader' // scss -> css
                ]
            },
            { // 加载JS babel转换
                // npm i -D babel-loader @babel/core @babel/preset-env

                // npm install --save-dev @babel/plugin-proposal-class-properties
                // npm install --save-dev @babel/plugin-proposal-decorators 装饰器
                // npm install --save-dev @babel/plugin-transform-runtime
                // npm install --save @babel/runtime
                test: /\.js$/,
                include: [resolve('src')], //path.resolve(__dirname, '../src'),
                exclude: resolve('node_modules'), // /node_modules/, // 不在该文件下查找js
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env' // es6 ->es5
                            ],
                            plugins: [
                                ['@babel/plugin-proposal-decorators', { 'legacy': true }],
                                ['@babel/plugin-proposal-class-properties', { 'loose': true }],
                                '@babel/plugin-transform-runtime'
                            ]
                            // formatter: require('eslint-friendly-formatter') // 指定错误报告的格式规范
                        }
                    },
                    {
                        loader: 'eslint-loader',
                        options: { // 这里的配置项参数将会被传递到 eslint 的 CLIEngine
                            formatter: require('eslint-friendly-formatter') // 指定错误报告的格式规范
                        }
                    }
                ]
            },
            {	// 加载图片
                // npm install --save-dev file-loader
                test: /\.(png|svg|jpg|gif)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        outputPath: './img/' // 打包到dist子目录下
                    }
                }
            },
            {	// 加载字体
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        outputPath: 'fonts/'
                    }
                }
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

            {
                // 前置(在执行编译之前去执行eslint-loader检查代码规范，有报错就不执行编译)
                enforce: 'pre',
                test: /.(js|jsx)$/,
                loader: 'eslint-loader',
                exclude: [
                    path.join(__dirname, '../node_modules')
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
        // 多页应用new多次(需chunks属性)
        new HtmlWebpackPlugin({ // 打包输出html
            title: 'Progressive Web Application',
            template: path.join(__dirname, '../src/index.html'),
            filename: 'index.html',
            // chunks: ['index'], // 多页应用区分代码块
            hash: true,
            minify: {
                removeAttributeQuotes: true, // 删除模版中的双引号
                removeComments: true, // 删除空白符与换行符
                collapseWhitespace: true, // 压缩成一行
                minifyCSS: true // 压缩内联css
            }
        }),

        // 抽离css
        new MiniCssExtractPlugin({
            filename: 'css/main.css'
        }),

        // 防止重复(prevent duplication)
        // new webpack.optimize.CommonsChunkPlugin({
        //   name: 'common' // 指定公共 bundle 的名称。
        // }),

        new webpack.ProvidePlugin({ // 在每个模块中都注入	$
            _: 'lodash',
            $: 'jquery'
        }),

        // 文件开头加上作者版权时间等注释
        new webpack.BannerPlugin('create by berb00'),

        new webpack.DefinePlugin({
            DEV: JSON.stringify('development'),
            FLAG: 'true'
        }),

        new WorkboxPlugin.GenerateSW({
            // 这些选项帮助 ServiceWorkers 快速启用
            // 不允许遗留任何“旧的” ServiceWorkers
            clientsClaim: true,
            skipWaiting: true
        }),

        new CopyWebpackPlugin([
            { from: './src/js/util', to: './' }
        ])

    ],

    optimization: { // 优化项
        minimizer: [
            new UglifyJsPlugin({ // 压缩js
                cache: true,
                parallel: true, // 并发打包
                sourceMap: true // 源码映射 便于调试
            }),
            new OptimizeCss() // 压缩css 压缩css后js不会被压缩，需再次压缩css

        ]
    },

    performance: {
        hints: false
    },

    externals: {
        'AMap': 'AMap',
        jquery: '$'
    }

}

/*
	三种热加载方法:
		1.webpack's Watch Mode		(观察模式) 需刷新
		2.webpack-dev-server
		3.webpack-dev-middleware						需刷新
*/

/* Npm
npm install webpack webpack-cli -D

npm install http-server --save-dev
npm install workbox-webpack-plugin --save-dev

npm install imports-loader --save-dev
npm install exports-loader --save-dev

npm install --save babel-polyfill
npm install --save whatwg-fetch

npm install --save-dev typescript ts-loader

npm install --save-dev @types/lodash
*/

/*

css:
加载css/less/scss
抽离css
postcss
压缩css
*/

/**
 引入第三方模块的方式:
    1、expose-loader            使插件暴露到window上
    2、webpack.providePlugin    给每个模块提供一个插件(如$符)
    3、引入不打包
 */
