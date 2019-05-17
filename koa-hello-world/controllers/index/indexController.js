/**
 *@description index
 **/
const nunjucks = require('nunjucks');

module.exports = async (ctx) => {
    ctx.body = await nunjucks.render('index.html', { name: 'nunjucks&router' });
};
