# express generator

# plain
- supervisor <ok> [install]npm i supervisor -g    [run]supervisor .\bin\www

# v3 vs v4
[link](http://www.expressjs.com.cn/guide/migrating-4.html)
如果查看 app4/app.js 的内容，会发现应用需要的所有中间件（不包括 express.static）都作为独立模块载入，而且再不显式地加载 router 中间件。

您可能还会发现，和旧的生成器生成的应用相比， app.js 现在成了一个 Node 模块。

安装完依赖后，使用如下命令启动应用：
``` javascript
$ npm start
```

如果看一看 package.json 文件中的 npm 启动脚本，会发现启动应用的真正命令是 node ./bin/www，在 Express 3 中则为 node app.js。

Express 4 应用生成器生成的 app.js 是一个 Node 模块，不能作为应用（除非修改代码）单独启动，需要通过一个 Node 文件加载并启动，这里这个文件就是 node ./bin/www。

创建或启动 Express 应用时，bin 目录或者文件名没有后缀的 www 文件都不是必需的，它们只是生成器推荐的做法，请根据需要修改。

如果不想保留 www，想让应用变成 Express 3 的形式，则需要删除 module.exports = app;，并在 app.js 末尾粘贴如下代码。
``` javascript
app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function() {
  debug('Express server listening on port ' + server.address().port);
});
```
记得在 app.js 上方加入如下代码加载 debug 模块。
``` javascript
var debug = require('debug')('app4');
```
然后将 package.json 文件中的 "start": "node ./bin/www" 修改为 "start": "node app.js"。

现在就将 ./bin/www 的功能又改回到 app.js 中了。我们并不推荐这样做，这个练习只是为了帮助大家理解 ./bin/www 是如何工作的，以及为什么 app.js 不能再自己启动。
