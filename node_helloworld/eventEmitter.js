/**
 * 
 * @authors zzl81cn (zzl81cn@163.com)
 * @date    2016-05-30 17:21:13
 * @version $Id$
 * code notes
 */

// Node.js是让Javascript脱离浏览器运行在服务器的一个平台，不是语言；

// Node.js采用的Javascript引擎是来自Google Chrome的V8；运行在浏览器外不用考虑头疼的Javascript兼容性问题

// 采用单线程、异步IO与事件驱动的设计来实现高并发（异步事件也在一定程度上增加了开发和调试的难度）；

// Node.js内建一个HTTP服务器，所以对于网站开发来说是一个好消息；

/*events是node.js 最重要的模块，events模块只提供了一个对象events.EventEmitter，EventEmitter 的核心是事件发射与事件监听器。

Node.js中大部分的模块，都继承自Event模块。

与DOM树上事件不同，不存在事件冒泡、逐层捕获等行为。

EventEmitter 支持若干个事件监听器。当事件发射时，注册到这个事件的事件监听器被依次调用，事件参数作为回调函数参数传递。*/

// 调用events模块，获取events.EventEmitter对象

// By default EventEmitters will print a warning if more than 10 listeners are added for a particular event. This is a useful default that helps finding memory leaks. 
var EventEmitter = require('events').EventEmitter;
var ee =new EventEmitter();

ee.setMaxListeners(15);

for(var i = 10; i >= 0; i--) {
	ee.on('some_events', function(foo, bar) {
		console.log('The' + i + 'listeners.');
	});
};

// Removes all listeners, or those of the specified eventName.
// var EventEmitter = require('events').EventEmitter;
// var ee = new EventEmitter();

// var listener = function(foo, bar) {
// 	console.log('The first listener, foo=' + foo, 'bar=' + bar);
// };

// var listener2 = function(foo, bar) {
// 	console.log('The second listner, foo=' + foo, 'bar=' + bar);
// };

// ee.on('some_events', listener);
// ee.on('some_events', listener2);
// ee.on('other_events', function(foo, bar) {
// 	console.log('The other events, foo=' + foo, 'bar=' + bar);
// });

// // ee.removeAllListeners('some_events');
// ee.emit('some_events', 'zilong', 'zhou');
// ee.emit('other_events', 'zilong', 'zhou');

// var listenerEventsArr = ee.listeners('some_events');
// console.log(listenerEventsArr.length);
// for(var i=listenerEventsArr.length -1; i>=0; i--) {
// 	console.log(listenerEventsArr[i]);
// }
// Removes the specified listener from the listener array for the event named eventName.
// var listener = function(foo, bar) {
// 	console.log('The first event listener, foo=' + foo, 'bar=' + bar);
// };
// var listener2 = function(foo, bar) {
// 	console.log('The second event listener, foo=' + foo, 'bar=' + bar);
// };
// var listener3 = function(foo, bar) {
// 	console.log('The third event listener, foo=' + foo, 'bar' + bar);
// };

// var EventEmitter = require('events').EventEmitter;
// var ee = new EventEmitter();

//  ee.on('some_events', listener);
//  ee.on('some_events', listener2);
//  ee.on('some_events', listener3);

//  ee.removeListener('some_events', listener);
//  ee.removeListener('some_events', listener3);
//  ee.emit('some_events', 'listener2', 'zilongZhou');


// Adds a one time listener function
// var EventEmitter = require('events').EventEmitter;
// var ee = new EventEmitter();

// ee.once('some_events', function(foo, bar) {
// 	console.log("The first listener, param foo=" + foo, "bar=" + bar);
// });

// console.log('The first once listener');
// ee.emit('some_events', 'zilong', 'zhou');

// console.log('The second once listener');
// var isSuccess = ee.emit('some_events', 'zilong', 'zhou');
// console.log(isSuccess);

/*EventEmitter.on(event, listener) 为事件注册一个监听
参数1：event  字符串，事件名
参数2：回调函数*/

// ee.on('some_events', function(foo, bar) {
// 	console.log("The first listener,param foo=" + foo, "bar=" + bar);
// });

// var isSuccess = ee.emit('some_events', 'zilong', 'zhou');

// ee.on('some_events', function(foo, bar) {
// 	console.log("The second listener, param foo=" + foo, "bar=" + bar);
// });

// ee.emit('some_events', 'ron', 'fire');

// var isSuccess2 = ee.emit('other_events', 'zilong', 'zhou');

// console.log(isSuccess);
// console.log(isSuccess2);

// console.log('The first.');
// ee.emit('some_events', 'zilong', 'zhou');

// console.log('The second.');
// ee.emit('some_events', 'rong', 'fire');