const index = require('koa-router')();
const nunjucks = require('nunjucks');

module.exports = index.get('/', async (ctx) => {
    ctx.body = await nunjucks.render('index.html', { name: 'nunjucks&router' });
});
