'use strict';

const log4js = require('log4js');
const path = require('path');
// const fs = require('fs');
const glob = require("glob");

const appConfig = require('./config/appConfig');

let common = {
    getLogger: (name) => {
        let logger = log4js.getLogger(name);
        logger.level = 'debug';
        return logger;
    },
    getServerPort: () => {
        let serverPort = appConfig.serverPort || "3000";
        return serverPort;
    },
    getEnvMode: () => {
        let envMode = appConfig.envMode || "development";
        return envMode;
    },
    getEntry: (pathParams, pathInter) => {
        console.log('pathParams', pathParams);
        let PAGE_PATH = path.resolve(__dirname, pathParams)
        console.log('PAGE_PATH', PAGE_PATH);
        
        let entryFiles = glob.sync(PAGE_PATH + '/**/*.js');
        console.log('entryFiles', entryFiles); /* [ 'D:/workspaces/nodejs/myExpress/express-multiple-entry/public/js/app/index.js' ] */
        let map = {};
        entryFiles.forEach((filePath) => {
            let filename = filePath.substring(filePath.lastIndexOf(pathInter + '\/') + 4, filePath.lastIndexOf('.'))
            map[filename] = filePath
        })
        console.log('entryMap', map)
        return map
    },
    /* 返回多入口文件遍历结果数组（每项为主文件名部分，不含扩展名）,ex: ["index", "about"] */
    getRoot: (viewsPath) => {
        let files = glob.sync(viewsPath);
        let entries = [];
        let entry, basename, extname;

        for (let i = 0; i < files.length; i++) {
            entry = files[i];
            extname = path.extname(entry); // 扩展名 eg: .html
            basename = path.basename(entry, extname); // eg: index
            entries.push(basename);
        }
        return entries;
    }
};

module.exports = common;