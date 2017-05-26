# myExpress

> Express 4.x 的一个练习项目，现在使用 Express4.x + MySQL，后面会补充Mongoose部分。

#### 文章链接

[NodeJS学习笔记][1]

#### 启动

	npm install && node app

#### 判断userAgent

``` javascript
    var deviceAgent = req.headers[“user-agent”].toLowerCase();
    var agentID = deviceAgent.match(/(iphone|ipod|ipad|android)/);
    if(agentID){
        // 指到手机、pad的网页
    }else{
        // 指到pc网页
    }

    // 也可以在html页面上做跳转。但为了速度，应该在后台nodejs服务上，judge一下
    // 如果在html页上的话。那时页面可能已经下载下来了。白白浪费流量，还占带宽
```

[1]: http://www.cnblogs.com/zhongweiv/tag/Nodejs/ "NodeJS实战：Express+Mongoose+ejs"