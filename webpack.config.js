const path = require('path');
const { WebPlugin } = require('web-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HappyPack = require('happypack');
module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name]_[chunkhash:8].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['happypack/loader?id=babel']
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: ['happypack/loader?id=css']
                })
            }
        ]
    },
    plugins: [
        new WebPlugin({
            template: path.resolve(__dirname, 'index.html'),
            filename: 'index.html',
            requires: ['app']
        }),
        new HappyPack({
            id: 'babel',
            loaders: ['babel-loader?cacheDirectory']
        }),
        new HappyPack({
            id: 'css',
            loaders: ['css-loader']
        })
    ],
    watchOptions: {
        ignored: /node_modules/
    }
}
