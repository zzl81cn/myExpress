const fs = require("fs");
const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const glob = require("glob");

const common = require('../bin/common');
const output = path.resolve(__dirname,'../public/dist'); //文件输出目录
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
        extensions: [".js", ".css", ".less"],
        alias: {
            app: "../public/js/app",
            stylePath: "../public/css"
        }
    },
    module:{
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                include: path.resolve("public/js"),
            }, {
                test: /\.(hbs|html)$/,
                loader: "handlebars-loader"
            }, {
                test: /\.css$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader
                },{
                    loader: 'css-loader',
                    /* options: {
                        sourceMap: mode=== common.getEnvMode(),
                        importLoaders: 1
                    } */
                }]
            }, {
                test: /\.less$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader
                },{
                    loader: 'css-loader',
                },{
                    loader: 'postcss-loader',
                },{
                    loader: 'less-loader'
                }
                ]
            }, {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },{
                        loader: 'css-loader',
                    },{
                        loader: 'postcss-loader',
                    },{
                        loader: 'sass-loader'
                    }
                ]
            },
            // {
            //     test: /\.less$/,
            //     use: [{
            //         loader: MiniCssExtractPlugin.loader
            //     },{
            //         loader: 'css-loader',
            //         options: {
            //             // sourceMap: mode==='development',
            //             importLoaders: 2
            //         }
            //     },{
            //         loader: 'postcss-loader',
            //         options: {
            //             // sourceMap: mode==='development',
            //             plugins: [
            //                 require('autoprefixer')({
            //                     browsers:[
            //                         'last 5 version',
            //                         '> 1%',
            //                         'not dead',
            //                         "iOS >= 6",
            //                         "Android >= 4",
            //                         "IE >= 9"
            //                     ]
            //                 })
            //             ]
            //         }
            //     },{
            //         loader: 'less-loader',
            //         options: {
            //             // sourceMap: mode==='development' //启用sourceMap
            //         }
            //     }]
            // }

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
        new CleanWebpackPlugin({
                root: path.resolve('../public/'), // root
                verbose: true // Write logs to console.
            }
        ),
        new MiniCssExtractPlugin({filename: 'css/[name].css'}),
    ]
};
module.exports = webpackConfig;

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
