const Koa = require('koa');
const app = new Koa();
const path = require('path');
const static = require('koa-static');
const nunjucks = require('nunjucks');
const Router = require('koa-router');

const routes = require('./routerMaps');

nunjucks.configure('views', { autoescape: true });

// step 1, simple example render
/*app.use(ctx => {
    ctx.body = "<p>Helloworld</p>";
});*/

// 静态资源目录对于相对入口文件 app.js 的路径
const staticPath = './public';
app.use(static(path.join(__dirname, staticPath)));

/*app.use(async ctx => {
    ctx.body = await nunjucks.render('index.html', { name: 'nunjucks' })
});*/

// 以下路由全部移除做分层处理：路由映射文件routerMaps<各级路由文件<controller
/*
let home = new Router();
home.get("/", async (ctx) => {
    ctx.body = await nunjucks.render('index.html', { name: 'nunjucks&router' });
});

let about = new Router();
about.get('/', async (ctx) => {
    // ctx.body = '<p>Helloworld</p>';
    ctx.body = await nunjucks.render('about.html', { name: 'nunjucks&router' });
});
let router = new Router();
router.use('/', home.routes(), home.allowedMethods());
router.use('/about', about.routes(), about.allowedMethods());

app.use(router.routes())
    .use(router.allowedMethods());
*/

app.use(routes.routes())
    .use(routes.allowedMethods());

app.listen(3000, () => {
    console.log('[koa-helloword] starting at port 3000.');
});

// nunjucks contain methods: https://medium.com/@Zenkilies/render-nunjucks-template-with-koajs-b951b1503db1
/*app.use(async ctx => {
    ctx.body = await render('./views/home.html', {
        username: 'James'
    });
});
const render = function (path, params = {}) {
    return new Promise(function(resolve, reject) {
        const fs = require('fs');
        fs.readFile(path, 'utf8', function (error, content) {

            if (error) return reject(error);

            nunjucks.configure({
                autoescape: true
            });
            resolve(nunjucks.renderString(
                content, params
            ));

        });
    });
};*/
