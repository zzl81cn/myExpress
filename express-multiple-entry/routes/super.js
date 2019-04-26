/**
 * @description superagent and cheerio
 */

const express = require("express");
const router = express.Router();
const superagent = require("superagent");
const cheerio = require("cheerio");
let common  = require('../bin/common');
const logger = common.getLogger('super');

router.get('/super', function (req, res, next) {
    let item = [];
    superagent.get("https://cnodejs.org/").end(function(err, sres) {
        if (err) {
            return next(err);
        } else {
            logger.info(sres.text);
            var $ch = cheerio.load(sres.text);
            $ch('#topic_list .topic_title').each(function(index, element){
                let $element = $ch(element);
                item.push({
                    title: $element.attr('title'),
                    href: $element.attr('href')
                });
            });
        };
        logger.info(item);
        res.render('super/super', {
            title: "superagent and cheerio",
            data: item
        });
    })
});
/**
 * xuanxia 1楼•7 个月前 淘宝大部门信息是通过异步接口获取的  直接请求页面是拿不到那些信息的   可以使用容器运行页面然后注入js脚本的方式获取。  我使用electronjs  写过一个爬淘宝 JD商品图片的桌面应用.就是使用的脚本注入
 * 详情和SKU容易，某些字段不容易(不是说无法获取，只是技术成本会高)，比如各种价格，优惠券，促销信息
 * 建议使用Python爬取数据, 用Python写一个脚本，放服务器上做定时处理。。。使用Requests 模块 发送网络请求非常简单前段时间写过一个带账号密码登录、爬取数据、处理数据、读写数据的脚本，整体下来不过100行代码
  */
router.get('/tb', function(req, res, next) {
    let item = [];
    superagent.get("https://item.taobao.com/item.htm?ft=t&id=561000598175&ali_trackid=2:mm_26632614_0_0:1556258494_248_435846351&spm=a21bo.7925826.192013.2.2f8c4c0dTNTj9q").end(function(err, sres) {
        if(err) {
            return next(err);
        } else {
            logger.info(sres.text);
            let $ch = cheerio.load(sres.text);
            $ch('#J_Social').each(function(index, element) {
                logger.info(element)
                let $element = $ch(element);
                item.push({
                    href: $element.attr('href')
                });
            })
        };
        logger.info(item)
        res.send('tb ok')
    })
})

module.exports = router;