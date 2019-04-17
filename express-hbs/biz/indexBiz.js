'use strict';

const request = require('request');
const async = require('async');

let common = require('../bin/common');
let logger = common.getLogger('indexBiz');

const url = {
    rap1: 'http://rap2api.taobao.org/app/mock/data/911898',
    rap2: 'http://rap2api.taobao.org/app/mock/data/912468'
};

function getPromisePost(url, params) {
    return new Promise((resolve, reject) => {
        request.post({url: url, form: params}, (error, responese, body) => {
            console.log("indexBiz : url,params");
            console.log(url,params);
            if (!error && responese.statusCode == 200) {
                resolve(body);
            } else {
                reject(error);
            }
        })
    })
}

function getPromiseGet(url) {
    return new Promise((resolve, reject) => {
        let requestStream = request.get({url: url}, (error, response, body) => {
            logger.info(url);
            logger.info(response)
            if (!error && response.statusCode == 200) {
                logger.info('ok')
                
                resolve(body);
            } else {
                reject(error);
            }
        })
    })
}

let indexBiz = function () {
    this.getUser = function () {
        return getPromiseGet(url.rap1);
    };
    this.getData = function () {
        return getPromiseGet(url.rap2);
    };
    this.getTest = function(url) {
        return getPromiseGet(url)
    }
};

module.exports = new indexBiz();