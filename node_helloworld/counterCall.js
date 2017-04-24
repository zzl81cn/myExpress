/**
 *
 * @authors zzl81cn@gmail.com
 * @date    2016-05-23 11:08:53
 * @version v1.0
 */

var counter1 = require('./counter');
var counter2 = require('./counter');

console.log('Call counter1 ', counter1.count());
console.log('Call counter2 ', counter2.count());
console.log('Call counter2 ', counter2.count());