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
 * Node.js中大部分的模块，都继承自Event模块。
 * 与DOM树上事件不同，不存在事件冒泡、逐层捕获等行为。
 * EventEmitter 支持若干个事件监听器。当事件发射时，注册到这个事件的事件监听器被依次调用，事件参数作为回调函数参数传递。*/

// 通常，事件名是驼峰命名 (camel-cased) 的字符串。不过也没有强制的要求，任何字符串都是可以使用的。
// 调用events模块，获取events.EventEmitter对象

// By default EventEmitters will print a warning if more than 10 listeners are added for a particular event.
//This is a useful default that helps finding memory leaks. 
var EventEmitter = require('events').EventEmitter;
var ee =new EventEmitter();

//Step 7.
/*ee.setMaxListeners(15);

for(var i = 10; i >= 0; i--) {
	ee.on('some_events', function(foo, bar) {
		console.log('The ' + i + ' listeners.');
	});
};*/


// Step 6. Removes all listeners, or those of the specified eventName.

 var listener = function(foo, bar) {
 	console.log('The first listener, foo=' + foo, 'bar=' + bar);
 };

 var listener2 = function(foo, bar) {
 	console.log('The second listner, foo=' + foo, 'bar=' + bar);
 };

 ee.on('some_events', listener);
 ee.on('some_events', listener2);
 ee.on('other_events', function(foo, bar) {
 	console.log('The other events, foo=' + foo, 'bar=' + bar);
 });

// ee.removeAllListeners('some_events');
 ee.emit('some_events', 'zilong', 'zhou');
 ee.emit('other_events', '123', '456');

 var listenerEventsArr = ee.listeners('some_events');//返回指定事件监听的 listener 数组
 console.log(listenerEventsArr.length);
 
 for(var i=listenerEventsArr.length -1; i>=0; i--) {
 	console.log(listenerEventsArr[i]);
 }
// Removes the specified listener from the listener array for the event named eventName.


//Step 5 emitter.removeListener(event, listener)
/*var listener = function(foo, bar) {
	console.log('The first event listener, foo=' + foo, 'bar=' + bar);
};
var listener2 = function(foo, bar) {
	console.log('The second event listener, foo=' + foo, 'bar=' + bar);
};
var listener3 = function(foo, bar) {
	console.log('The third event listener, foo=' + foo, 'bar' + bar);
};

ee.on('some_events', listener);
ee.on('some_events', listener2);
ee.on('some_events', listener3);


ee.removeListener('some_events', listener);
ee.removeListener('some_events', listener3);
ee.emit('some_events', 'listener2', 'zilongZhou');*/
/*EventEmitter.removeListener(event, listener)  移除指定事件的监听器
注意：该监听器必须是注册过的
PS：上一个例子之后以会失败，很大原因就是忽略了监听器，理所当然的认为传个事件名就OK了，所以就悲剧了!
emitter.removeListener的第二个参数是要移除的监听，而非移除成功后的回调函数*/


//Step 4
/*用emitter.on给some_events注册了一个监听后，我用emiiter.removeListener移除some_events的监听，
随后再调用emitter.emit去触发，最后发现不是按我想像的在进行！*/
/*ee.on('someEvents', function(foo, bar) {
	console.log("The first foo is: " + foo + ",bar: " + bar);
});
ee.removeListener('someEvents', function(){
	console.log("Listener remove succeed!");
});
console.log("The first test!")
ee.emit('someEvents', 'zilong', 'zhou');*/


//Step 3 Adds a one time listener function
/*EventEmitter.once(event, listener)  为事件注册一次性监听，触发一次后移除监听
参数1：event  字符串，事件名
参数2：回调函数

从上面示例代码执行结果可以看出，用emitter.once给some_events注册一个监听后，分两轮调用emitter.emit触发，
第二轮会返回false；这表示用emitter.once注册监听和用前面讲的emitter.on注册监听略有不同，

emitter.once注册监听是一次性监听，当触发一次后，会移除该监听！
*/
/* ee.once('some_events', function(foo, bar) {
 	console.log("The first listener, param foo=" + foo, "bar=" + bar);
 });

 console.log('The first once listener');
 var isSuccess = ee.emit('some_events', 'zilong', 'zhou');
 console.log(isSuccess);

 console.log('The second once listener');
 var isSuccess2 = ee.emit('some_events', 'zilong', 'zhou');
 console.log(isSuccess2);*/


//Step2
/*
EventEmitter.emit(event, [arg1], [arg2], [...])   触发指定事件
参数1：event  字符串，事件名
参数2：可选参数，按顺序传入回调函数的参数
返回值：该事件是否有监听

示例进行了三次触发事件操作，其中some_events注册了监听，调用时emit函数会返回一个true,
而other_events并没有注册监听，emit函数会返回一个false，表示该事件没有监听；当然也可以不用管这个返回值！
*/

/*ee.on('some_events', function(foo, bar) {
	console.log("The first event listener, param foo=" + foo, "bar=" + bar);
});
var isSuccess = ee.emit('some_events', 'zilong', 'zhou');

ee.on('some_events', function(foo, bar) {
	console.log("The second event listener, param foo=" + foo, "bar=" + bar);
});
ee.emit('some_events', 'ron', 'fire');

var isSuccess2 = ee.emit('other_events', 'zilong', 'zhou');

console.log(isSuccess);
console.log(isSuccess2);*/


//Step 1
/*EventEmitter.on(event, listener) 为事件注册一个监听
参数1：event  字符串，事件名
参数2：回调函数*/

/*ee.on('some_events', function(foo, bar) {
	console.log("The first listener,param foo=" + foo, "bar=" + bar);
});

console.log('The first.');
ee.emit('some_events', 'zilong', 'zhou');

console.log('The second.');
ee.emit('some_events', 'rong', 'fire');
 */