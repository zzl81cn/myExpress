/**
 *@description about
 **/
const nunjucks = require('nunjucks');

module.exports = async (ctx) => {
    ctx.body = await nunjucks.render('about.html', { name: 'nunjucks&router' });
};
