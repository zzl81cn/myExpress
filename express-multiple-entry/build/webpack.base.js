const fs = require("fs");
const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const glob = require("glob");

const common = require('../bin/common');
const output = path.resolve(__dirname,'../public/dist'); //文件输出目录
// let entry = getEntry(path.resolve(__dirname,'../public/js/app'));
let entry = common.getEntry('../public/js/app', 'app');
let webpackConfig = {
    mode: common.getEnvMode(), // development || production
    entry: entry,
    output: {
        publicPath: "/",
        path: output,
        filename: "js/[name].js"
    },
    resolve:{
        extensions: [".js", ".css"],
        alias: {
            app: "../public/js/app"
        }
    },
    module:{
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                include: path.resolve("public/js"),
            },
            { test: /\.(hbs|html)$/, loader: "handlebars-loader" },
            /* {
                test: /\.css$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader
                },{
                    loader: 'css-loader',
                    options: {
                        sourceMap: mode==='development',
                        importLoaders: 1
                    }
                }]
            }, */
            // {
            //     test: /\.(png|jpg)$/,
            //     loader: "url-loader",
            //     query: {
            //         mimetype: "image/png" ,
            //         limit:8192,
            //         publicPath:'/xx/dist/',
            //         name: "imgs/[name].[ext]"
            //     }
            // },
            // {
            //     test : /\.css$/,
            //     loader : ExtractTextPlugin.extract('style-loader', 'css-loader')
            // }
        ],
    },
    plugins: [
        // new CleanWebpackPlugin([path.resolve(__dirname,'../dist/')])
        new CleanWebpackPlugin({
                root: path.resolve('../public/'), // root
                verbose: true // Write logs to console.
            }
        ),
        // new ExtractTextPlugin('css/[name].css')
    ]
};
module.exports = webpackConfig;
/* common.getRoot('views/*.hbs').forEach(fileName => {
    let conf = {
        template: path.resolve(__dirname, './views/' + fileName + '.hbs'), // html模板路径
        filename: 'views/' + fileName + '.hbs', // 生成的html存放路径，相对于 path
        inject: true, // 'head', body, true, false
        chunks: [fileName]
    };
    webpackConfig.plugins.push(new HtmlWebpackPlugin(conf));
}); */

// common shift
/* !function(){
    if(envMode === "dev"){
      console.log("webpack : 这是开发模式，不进行压缩。");
      webpackConfig.devtool= "source-map";
    }else{
        webpackConfig.plugins.push(new webpack.optimize.UglifyJsPlugin({
            mangle: false,
            compress: {
                warnings: false
            },
            output: {
                screw_ie8: false
            }
  
        }));
    }
  }(); */

// contain md5 difrent xx-x-x/webpack.config.js line 86 "getEntry .. md5"
; function getEntry() {
    
    let args = Array.prototype.slice.call(arguments) /* {"0":"D:\\workspaces\\nodejs\\myExpress\\express-multiple-entry\\public\\js\\app"} */
        ,dir = args[0]
        ,_files = args[1]
        ,matchs=[]
        ,dirList = fs.readdirSync(dir)
    ;
    if(typeof(_files)=='undefined'){
        _files={};
    }
    dirList.forEach(function(item){
        let itemPath = path.resolve(dir,item);
        if(fs.statSync(itemPath).isDirectory()){
            getEntry(itemPath,_files);
        }else{
            matchs = item.match(/(.+)\.js$/);
            if(matchs){
                _files[matchs[1]] = itemPath;
            }
        }
    });
    return _files; // { index: 'D:\\workspaces\\nodejs\\myExpress\\express-multiple-entry\\public\\js\\app\\index.js' }
}
