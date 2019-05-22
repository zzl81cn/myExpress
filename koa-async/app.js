const Koa = require('koa');
const app = new Koa();

// x-response-time
app.use(async (ctx, next) => {
    const start = Date.now(); // 1
    await next(); // 2
    console.log('hoho')
    const ms = Date.now() - start; // 8
    ctx.set('X-Response-Time', `${ms}ms`); //9
});

// logger
app.use(async (ctx, next) => {
    const start = Date.now(); // 3
    await next(); // 4
    console.log('haha')
    const ms = Date.now() - start; // 6
    console.log(`${ctx.method} ${ctx.url} - ${ms}`) // 7
});

// response
app.use(async ctx => {
    ctx.body = "Hello World"; // 5
});

app.listen(3000);
/* 
haha
GET / - 5
hoho
haha
GET /favicon.ico - 3
hoho
*/