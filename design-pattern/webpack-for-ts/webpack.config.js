const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const srcPath = path.join(__dirname, 'src')
const tplPath = path.join(__dirname, 'tpl')

module.exports = {
    mode: 'development',
    entry: path.resolve(srcPath, 'index'),
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader'],
                include: srcPath,
                exclude: /node_modules/
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(tplPath, 'index.html'),
            filename: 'index.html'
        })
    ],
    devServer: {
        port: 3000,

        // proxy: {
        //     '/api': 'http://localhost:8081', // nodejs server
        // }
    },
}