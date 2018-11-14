const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractPlugin = new ExtractTextPlugin({
    filename: './style.css'
});
module.exports = {
    entry: "./index.js",
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    context: path.resolve(__dirname, 'src'),
    devServer: {
        contentBase: path.resolve(__dirname, 'public/assets'),
        stats: 'errors-only',
        open: true,
        port: 4321,
        compress: true
    },
    plugins: [
        new CleanWebpackPlugin(['public']),
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
        extractPlugin
    ],
    module: {
        rules: [{
            test: /\.(jpg|png|gif|svg)$/,
            use: [
            {
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: './assets/',
                }
            }]
        }, {
            test: /\.(scss|css)$/,
            use: extractPlugin.extract({
             use: ["css-loader", "sass-loader", "postcss-loader"],
             fallback: 'style-loader'
            })
        }, {
         test: /\.(js|jsx)$/,
         use: {
          loader: 'babel-loader',
          options: {
           presets: ['es2015', 'react', 'stage-0']
          }
         }
        }]
    }
}