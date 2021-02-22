const path = require('path');
const {VueLoaderPlugin} = require('vue-loader');
const {HotModuleReplacementPlugin} = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const BundleTracker = require('webpack-bundle-tracker');

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
    // entry: join(__dirname, 'src/main.js'),
    // entry: 'main.js',
    // index
    // publicPath: '/',
    entry: {
        app: './src/main.js'
    },
    output: {
        path: resolve('./frontend/bundles'),
        publicPath: '/static/bundles/',
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }, {
                test: /.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
            },
            //
            // {
            //     test: /\.scss$/,
            //     use: [
            //         'sass-loader'
            //     ]
            // }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['*', '.js', '.vue', '.json']
    },
    plugins: [
        new HotModuleReplacementPlugin(),
        new VueLoaderPlugin(),
        new HTMLWebpackPlugin({
            showErrors: true,
            cache: true,
            template: path.join(__dirname, 'public/index.html')
        }),
        new BundleTracker({filename: './webpack-stats.json'}),
    ],
    devServer: {
        historyApiFallback: true
    }
}
