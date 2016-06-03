/**
 * 
 * @authors zzl81cn (zzl81cn@163.com)
 * @date    2016-05-31 11:44:13
 * @version $Id$
 */
/*
	一个Node.js文件就是一个模块，这个文件可能是Javascript代码、JSON或者编译过的C/C++扩展。
	重要的两个对象：
	require是从外部获取模块
	exports是把模块接口公开
*/
var counter = require('./module_basic_counter');

console.log('The first invoke.');

counter.setOutputVal(10);
counter.setIncrementVal(10);

counter.printNextCount();
counter.printNextCount();
counter.printNextCount();

/*
require多次调用同一模块不会重复加载
Node.js会根据文件名缓存所有加载过的文件模块，所以不会重新加载了
注意：通过文件名缓存是指实际文件名，并不会因为传入的路径形式不一样而认会是不同的文件
*/
var counter2 = require('./module_basic_counter');
console.log('The second invoke.')
counter2.printNextCount();