const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.js');

module.exports = merge(webpackBaseConfig ,{
    devtool: 'inline-source-map',
    // devtool : 'source-map'
});
