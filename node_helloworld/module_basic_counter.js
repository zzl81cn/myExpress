/**
 * 
 * @authors zzl81cn (zzl81cn@163.com)
 * @date    2016-05-30 17:21:13
 * @version $Id$
 * code notes
 */
/*
自定义模块
Node.js还有一类模块为文件模块，可以是JavaScript代码文件（.js作为文件后缀）、也可以是JSON格式文本文件（.json作为文件后缀）、还可以是编辑过的C/C++文件（.node作为文件后缀）；
文件模块访问方式通过require('/文件名.后缀')    require('./文件名.后缀')    requrie('../文件名.后缀') 去访问，文件后缀可以省略；以"/"开头是以绝对路径去加载，以"./"开头和以"../"开头表示以相对路径加载，而以"./"开头表示同级目录下文件，前面提到文件后缀可以省略，Nodejs尝试加载的优先级 js文件 > json文件 > node文件
*/

// output value
var outputVal = 0;
// increment value
var increment = 1;

function setOutputVal(val) {
	outputVal = val;
};

function setIncrementVal(incrementVal) {
	increment = incrementVal;
};

function printNextCount() {
	outputVal += increment;
	console.log(outputVal);
};

function printOutputVal() {
	console.log(outputVal);
};
// exports和module.exports提供了外部访问的接口
exports.setOutputVal = setOutputVal;
exports.setIncrementVal = setIncrementVal;
module.exports.printNextCount = printNextCount;