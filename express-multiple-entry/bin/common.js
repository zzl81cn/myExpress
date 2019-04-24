'use strict';

const log4js = require('log4js');
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
    }
};

module.exports = common;