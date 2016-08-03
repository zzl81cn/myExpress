/**
 * Created by zhouzilong on 2016/8/3.
 * http://www.cnblogs.com/hustskyking/p/spider-with-node.html
 */

var http = require('http');

var url = "http://localhost/cnode/";

var data = "";
//创建一个请求
var req = http.request(url, function(res){
    //设置显示编码
    res.setEncoding('utf8');
    //数据是 chunked 发送，意思就是一段一段发送过来的
    //再用data串接起来
    //res.on('data', function(chunk){
    // () => {} ES6
    res.on('data', (chunk) =>{
        data += chunk;
    });


    //响应完毕后输出data
    res.on('end', function(){
        console.log(data);
    })
})

req.end();
console.log('data now loading...');
