const about = require('koa-router')();
const nunjucks = require('nunjucks');

module.exports = about.get('/', async (ctx) => {
    ctx.body = await nunjucks.render('about.html', { name: 'nunjucks&router' });
});
