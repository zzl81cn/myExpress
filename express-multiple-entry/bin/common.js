'use strict';

const log4js = require('log4js');

let common = {
    getLogger: (name) => {
        let logger = log4js.getLogger(name);
        logger.level = 'debug';
        return logger;
    },
};

module.exports = common;