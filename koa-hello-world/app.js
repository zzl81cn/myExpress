const Koa = require('koa');
const app = new Koa();
const bodyParser = require('koa-bodyparser');
const path = require('path');
const static = require('koa-static');
const nunjucks = require('nunjucks');
const Router = require('koa-router');

const routes = require('./routerMaps');

nunjucks.configure('views', { autoescape: true });

const webpack = require('webpack');
const webpackDevMiddleWare = require('koa-webpack-dev-middleware');
const webpackHotMiddleWare = require('koa-webpack-hot-middleware');
const koaWebpack = require('koa-webpack');
const webpackConfig = require('./build/webpack.dev');
const compiler = webpack(webpackConfig);
app.use(webpackDevMiddleWare(compiler, {
    // all options optional
    noInfo: false,
    // display no info to console (only warnings and errors)
    quiet: true,
    // display nothing to the console
    lazy: true,
    // switch into lazy mode
    // that means no watching, but recompilation on every request
    watchDelay: 300,
    // delay after change (only lazy: false)
    publicPath: "/assets/",
    // public path to bind the middleware to
    // use the same as in webpack

    headers: { "X-Custom-Header": "yes" },
    // custom headers
    stats: {
        colors: true
    }
    // options for formating the statistics))
}));
app.use(webpackHotMiddleWare(compiler, {}));

// step 1, simple example render
/*app.use(ctx => {
    ctx.body = "<p>Helloworld</p>";
});*/

// 静态资源目录对于相对入口文件 app.js 的路径
const staticPath = './public';
app.use(static(path.join(__dirname, staticPath)));
app.use(bodyParser()); // koa-bodyparser必须在router之前被注册到app对象上
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
