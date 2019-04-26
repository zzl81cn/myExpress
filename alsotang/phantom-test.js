/**
 * @description npm run phantomjs phantom-test.js
 */

/* DOM #description p[1] img(data-src) */
var webpage = require('webpage');
var page = webpage.create();
const urlBaidu = "http://www.baidu.com/",
        urlTB = "https://item.taobao.com/item.htm?ft=t&id=561000598175&ali_trackid=2:mm_26632614_0_0:1556258494_248_435846351&spm=a21bo.7925826.192013.2.2f8c4c0dTNTj9q";
page.open(urlTB, function (status) {
    var data;
    if (status === 'fail') {
        console.log('open page fail!');
    } else {
        console.log(page.content);//打印出HTML内容
    }
    page.close();//关闭网页
    phantom.exit();//退出phantomjs命令行
});