const about = require('koa-router')();
const nunjucks = require('nunjucks');

const aboutCtrl = require('../controllers/about/aboutController');

about.get('/', aboutCtrl);

module.exports = about;
