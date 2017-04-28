/**
 * 
 * @authors zzl81cn (zzl81cn@163.com)
 * @date    2016-05-30 17:21:13
 * @version $Id$
 * code notes
 * Nodejs学习笔记（二）--- 事件模块
 * http://www.cnblogs.com/zhongweiv/p/nodejs_events.html
 */

// Node.js是让Javascript脱离浏览器运行在服务器的一个平台，不是语言；

// Node.js采用的Javascript引擎是来自Google Chrome的V8；运行在浏览器外不用考虑头疼的Javascript兼容性问题

/*采用单线程、异步IO与事件驱动的设计来实现高并发（异步事件也在一定程度上增加了开发和调试的难度）；*/

// Node.js内建一个HTTP服务器，所以对于网站开发来说是一个好消息；

/*events是node.js 最重要的模块，events模块只提供了一个对象events.EventEmitter，EventEmitter 的核心是事件发射与事件监听器。
 * Node.js中大部分的模块，都继承自Event模块。
 * 与DOM树上事件不同，不存在事件冒泡、逐层捕获等行为。
 * EventEmitter 支持若干个事件监听器。当事件发射时，注册到这个事件的事件监听器被依次调用，事件参数作为回调函数参数传递。*/

// 通常，事件名是驼峰命名 (camel-cased) 的字符串。不过也没有强制的要求，任何字符串都是可以使用的。
// 调用events模块，获取events.EventEmitter对象

// By default EventEmitters will print a warning if more than 10 listeners are added for a particular event.
//This is a useful default that helps finding memory leaks.
// For ES5.1
/*var EventEmitter = require('events').EventEmitter;
var myEmitter =new EventEmitter();*/
// For ES6 or better
const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

//Step 1
/*EventEmitter.on(event, listener) 为事件注册一个监听
 参数1：event  字符串，事件名
 参数2：回调函数*/

/*myEmitter.on('some_events', function (foo, bar) {
    console.log("The first listener,param foo=" + foo, "bar=" + bar);
});

console.log('The first.');
myEmitter.emit('some_events', 'zilong', 'zhou');

console.log('The second.');
myEmitter.emit('some_events', 'rong', 'fire');*/

// rewrite step 1
/*const listenerFunc = function (first, second) {
	console.log('The first listener, params first = ' + first, ' second = ' + second);
};
myEmitter.on('someEvent', listenerFunc);
// someEvent注册了事件监听，emit函数会
let isSuccess = myEmitter.emit('someEvent', 'zilong', 'zhou');
myEmitter.emit('someEvent', 'xx', 'zz');
// someEvent apply emit is true.
console.log('someEvent apply is ' + isSuccess);
console.log('myEmitter.listeners length ' + myEmitter.listeners('someEvent').length);
console.log('Step 1 end.');*/


//Step2
/*
 EventEmitter.emit(event, [arg1], [arg2], [...])   触发指定事件
 参数1：event  字符串，事件名
 参数2：可选参数，按顺序传入回调函数的参数
 返回值：该事件是否有监听

 示例进行了三次触发事件操作，其中some_events注册了监听，调用时emit函数会返回一个true,
 而other_events并没有注册监听，emit函数会返回一个false，表示该事件没有监听；当然也可以不用管这个返回值！
 */

/*console.log('Step 2 start.');
myEmitter.on('someEvents', function (foo, bar) {
	console.log('The first event listener, param foo= ' + foo, 'bar= ' + bar);
});
let isSuccess = myEmitter.emit('someEvents', 'zilong', 'zhou');
myEmitter.on('someEvents', function (foo, bar) {
	console.log('The second event listener, param foo= ' + foo, 'bar= ' + bar);
});
myEmitter.emit('someEvents', 'ron', 'fire');
let isSuccess2 = myEmitter.emit('otherEvents', 'zilong', 'zhou');

console.log('isSuccess ', isSuccess);
console.log('issuccess2 ', isSuccess2);*/


//Step 3 Adds a once listener function
/*EventEmitter.once(event, listener)  为事件注册一次性监听，触发一次后移除监听
参数1：event  字符串，事件名
参数2：回调函数

从上面示例代码执行结果可以看出，用emitter.once给some_events注册一个监听后，分两轮调用emitter.emit触发，
第二轮会返回false；这表示用emitter.once注册监听和用前面讲的emitter.on注册监听略有不同，

emitter.once注册监听是一次性监听，当触发一次后，会移除该监听！*/

/*myEmitter.once('someEvents', function (foo, bar) {
	console.log('The first listener, param foo= ' + foo, 'bar= ' + bar);
});
console.log('The first once listener');
let isSuccess = myEmitter.emit('someEvents', 'zilong', 'zhou');
if(isSuccess) {
	console.log('第一次调用成功。')
} else {
	console.log('第一次调用失败！')
}
console.log('The second once listener');
console.log('因为使用了xx.once()对someEvents注册的监听，所以触发一次便会移除该监听，导致后面未触发。');
let isSuccess2 = myEmitter.emit('someEvents', 'xx', 'zz');
if(isSuccess2) {
	console.log('第二次调用成功。')
} else {
	console.log('第二次调用失败！')
}*/


//Step 4
/*用emitter.on给some_events注册了一个监听后，我用emitter.removeListener移除some_events的监听，
 随后再调用emitter.emit去触发，最后发现不是按我想像的在进行！*/
// Rewrite step4
/*let connectionFunc = (stream) => {
	console.log('Have a connections!');
};
myEmitter.on('connection', connectionFunc);
myEmitter.removeListener('connection', () => {
	console.log('Remove eventListener successfuly!')
});
// myEmitter.removeListener('connection', connectionFunc);
myEmitter.emit('connection', connectionFunc);*/
/*myEmitter.on('someEvents', function (foo, bar) {
	console.log('The first foo is foo:' + foo + ' bar: ' + bar);
});
myEmitter.removeListener('someEvents', function () {
	console.log('Listener remove succeed!')
});
console.log('The first test!');
myEmitter.emit('someEvents', 'zilong', 'zhou');*/
// Rewrite step4
/*let connectionFunc = (stream) => {
	console.log('Have a connections!')
};
myEmitter.on('connection', connectionFunc);
myEmitter.removeListener('connection', () => {
	console.log('Remove eventListener successfuly!')
});
myEmitter.emit('connection', connectionFunc);*/



//Step 5 emitter.removeListener(event, listener)
/*let listener = function (foo, bar) {
	console.log('The first event listener, foo=' + foo, 'bar=' + bar);
};
let listener2 = function (foo, bar) {
	console.log('The second event listener, foo=' + foo, 'bar=' + bar);
};
let listener3 = function (foo, bar) {
	console.log('The third event listener, foo=' + foo, 'bar' + bar);
};

myEmitter.on('some_events', listener);
myEmitter.on('some_events', listener2);
myEmitter.on('some_events', listener3);


myEmitter.removeListener('some_events', listener);
myEmitter.removeListener('some_events', listener3);
myEmitter.emit('some_events', 'listener2', 'zilongZhou');*/
/*EventEmitter.removeListener(event, listener)  移除指定事件的监听器
 注意：该监听器必须是注册过的
 PS：上一个例子之后以会失败，很大原因就是忽略了监听器，理所当然的认为传个事件名就OK了，所以就悲剧了!
 emitter.removeListener的第二个参数是要移除的监听，而非移除成功后的回调函数*/


// Step 6. Removes all listeners, or those of the specified eventName.

/*let listener = function (foo, bar) {
	console.log('The first listener, foo=' + foo, 'bar=' + bar);
};

let listener2 = function (foo, bar) {
	console.log('The second listner, foo=' + foo, 'bar=' + bar);
};

myEmitter.on('some_events', listener);
myEmitter.on('some_events', listener2);
myEmitter.on('other_events', function (foo, bar) {
	console.log('The other events, foo=' + foo, 'bar=' + bar);
});

// myEmitter.removeAllListeners('some_events');
myEmitter.emit('some_events', 'zilong', 'zhou');
myEmitter.emit('other_events', '123', '456');

//返回指定事件监听的 listener 数组
let listenerEventsArr = myEmitter.listeners('some_events');
console.log(listenerEventsArr.length);

for (let i = 0; i < listenerEventsArr.length; i++) {
	// console.log('正序' + listenerEventsArr[i]);
	console.log(listenerEventsArr[i]);
}

for (let i = listenerEventsArr.length - 1; i >= 0; i--) {
	console.log(listenerEventsArr[i]);
}*/

// Removes the specified listener from the listener array for the event named eventName.


//Step 7.
/*myEmitter.setMaxListeners(15);

for(let i = 10; i >= 0; i--) {
	myEmitter.on('some_events', function(foo, bar) {
		console.log('The ' + i + ' listeners.');
	});
};*/






