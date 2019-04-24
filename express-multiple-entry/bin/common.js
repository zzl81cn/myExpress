'use strict';

const log4js = require('log4js');
const path = require('path');
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
    /* 返回多入口文件遍历结果数组（主文件名部分，不含扩展名） */
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