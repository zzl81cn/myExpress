/**
 * Created by zhouzilong on 2016/8/3.
 */
var fs = require("fs") ;
var txt = "大家要好好学习NodeJS啊！！！" ;
//写入文件
fs.writeFile("bb.txt",txt,function (err) {
    if (err) throw err ;
    console.log("File Saved !"); //文件被保存
}) ;