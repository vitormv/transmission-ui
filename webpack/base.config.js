const path = require('path');
const config = require('./config');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { TsConfigPathsPlugin } = require('awesome-typescript-loader');

module.exports = {
    entry: config.jsEntry,
    resolve: {
        alias: {
            src: path.resolve(__dirname, '../src/'),
            vendor: path.resolve(__dirname, '../node_modules/'),
        },
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
        mainFields: ['browser', 'main'],
        plugins: [
            new TsConfigPathsPlugin(),
        ],
    },
    mode: 'development',
    stats: {
        assets: false,
        chunks: false,
        children: false,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: config.htmlEntry,
        }),
    ],
    output: {
        path: config.buildPath,
    },
};
