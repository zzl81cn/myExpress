const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, '../public/js/index.js'),
    output: {
        filename: 'script/index.js',
        path: path.resolve(__dirname, '../public/dist'),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        "presets": ["@babel/preset-env"]
                    }
                },
                exclude: __dirname + 'node_modules',
                include: __dirname + 'public'
            }
        ]
    },
    resolve: {
        extensions: [".js"],
        alias: {
            '@': path.resolve(__dirname, '../public/'),
        }
    },
    plugins: [
        new CleanWebpackPlugin()
    ]
};
