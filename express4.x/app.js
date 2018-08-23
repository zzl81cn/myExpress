const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!')
})
// 可以使用浏览器访问对应参数的形式：localhost:3001/user/1
// 如果需要在中间件栈中跳过剩余中间件，调用 next('route') 方法将控制权交给下一个路由。
app.get('/user/:id', function(req, res, next) {
  // console.log(req.params.id);
  // res.send(req.params.id)
  if(req.params.id == 0) next('route');
  else next();
}, function(req, res, next) {
    res.send('Regular')
  }
);
app.get('/user/:id', function(req, res, next) {
  res.send('Special');
});

const server = app.listen(3001, 'localhost', () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Example app listening apt http://%s:%s ', host, port);
})