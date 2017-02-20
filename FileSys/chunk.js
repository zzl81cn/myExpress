/**
 * Created by zhouzilong on 2016/8/3.
 * file http://www.cnblogs.com/bigbearbb/archive/2015/01/10/4215013.html
 * HTTP modules: http://www.cnblogs.com/bigbearbb/p/4213524.html
 */
var fs = require("fs") ;
var txt = "Good study Node！！！" ;
//写入文件
fs.writeFile("d://bb.txt", txt, function (err) {
    if (err) throw err ;
    console.log("File Saved !"); //文件被保存
}) ;