/**
 * @authors zzl81cn (zzl81cn@163.com)
 * @date    2016-05-30 17:21:13
 * @version $Id$
 * code notes
 * https://nodejs.org/api/modules.html
 */

// exports & module.exports
const counter = 0;
exports.printNextCount = function() {
	counter += 2;
	console.log(counter);
};
/*module.exports才是真正的接口，exports只不过是它的一个辅助工具。　最终返回给调用的是module.exports而不是exports。所有的exports收集到的属性和方法，都赋值给了Module.exports。当然，这有个前提，就是module.exports本身不具备任何属性和方法。如果，module.exports已经具备一些属性和方法，那么exports收集来的信息将被忽略。*/
module.exports = function() {
	counter += 4;
	this.printNextCount = function() {
		console.log(counter);
	}
};

const isEq = (exports === module.exports);
/*
	exports和module.exports 覆盖
	从结果可以看出，并没有报错，表示可以这么定义，但最终module.exports覆盖了exports

	虽然结果不会报错，如果这么用开发中难免会有一些问题存在，所以

	1.最好别分别定义module.exports和exports
	2.NodeJs开发者建议导出对象用module.exports,导出多个方法和变量用exports
*/
console.log(isEq);