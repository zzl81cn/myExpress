const index = require('koa-router')();
const indexCtrl = require('../controllers/index/indexController');

index.get('/', indexCtrl);

module.exports = index;
