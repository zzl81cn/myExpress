var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send(string)
  // res.send('respond with a resource');

  // res.render(path, obj)
  res.render('users', {
    content: 'respond with a resource',
    name: 'orient',
    list: [1,3,5],
    testDate: new Date(),
    selectData: [
      {id: 1, val: 1, name: 'first'},
      {id: 2, val: 2, name: 'second'}
    ],
    forLoop: [
      'loop.index：当前循环的索引（1开始）',
      'loop.index0：当前循环的索引（0开始）',
      'loop.revindex：当前循环从结尾开始的索引（1开始）',
      'loop.revindex0：当前循环从结尾开始的索引（0开始）',
      'loop.key：如果迭代是对象，是当前循环的键，否则同 loop.index',
      'loop.first：如果是第一个值返回 true',
      'loop.last：如果是最后一个值返回 true',
      'loop.cycle：一个帮助函数，以指定的参数作为周期',
    ],
    insideFilter: [
      'add(value)：使变量与value相加，可以转换为数值字符串会自动转换为数值。',
      'addslashes：用 \ 转义字符串',
      'capitalize：大写首字母',
      'date(format[, tzOffset])：转换日期为指定格式',
      'format：格式',
      'tzOffset：时区',
      'default(value)：默认值（如果变量为undefined，null，false）',
      'escape([type])：转义字符',
      '默认： &, <, >, ", \'',
      'js: &, <, >, ", \', =, -, ;',
      'first：返回数组第一个值',
      'join(glue)：同[].join',
      'json_encode([indent])：类似JSON.stringify, indent为缩进空格数',
      'last：返回数组最后一个值',
      'length：返回变量的length，如果是object，返回key的数量',
      'lower：同\'\'.toLowerCase()',
      'raw：指定输入不会被转义',
      'replace(search, replace[, flags])：同\'\'.replace',
      'reverse：翻转数组',
      'striptags：去除html/xml标签',
      'title：大写首字母',
      'uniq：数组去重',
      'upper：同\'\'.toUpperCase',
      'url_encode：同encodeURIComponent',
      'url_decode：同decodeURIComponemt'
    ]
  });
});

module.exports = router;
