'use strict';

const request = require('request');

const url = {
    rap1: 'http://rap2api.taobao.org/app/mock/data/382300',
    rap2: 'http://rap2api.taobao.org/app/mock/data/911898',
    mock: 'https://easy-mock.com/mock/5a0d2eb685e6ba3feeead78c/example/mock',
    user: 'https://easy-mock.com/mock/5a0d2eb685e6ba3feeead78c/example/user'
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
        request.get({url: url}, (error, responese, body) => {
            console.log("indexBiz : url", url);
            if (!error && responese.statusCode == 200) {
                resolve(body);
            } else {
                reject(error);
            }
        })
    })
}

let indexBiz = function () {
    this.getUser = function () {
        return getPromiseGet(url.rap2)
    };
    this.getData = function () {
        return getPromiseGet(url.rap1);
    };
};

module.exports = new indexBiz();