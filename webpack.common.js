const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        vendor: "./src/vendor.js",
        main: "./src/index.js"
    },
    module: {
        rules: [
            // {
            //     test: /\.html$/,
            //     use: ['html-loader']
            // }
        ]
    }
}