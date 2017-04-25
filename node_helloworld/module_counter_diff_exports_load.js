/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-05-31 11:44:13
 * @version $Id$
 */
// step1 only exports
// var counter = require('./module_custom_counter_exports');
// step2 change to module.exports
var Counter = require('./module_counter_diff_exports');

// counter.printNextCount();
var countObj = new Counter();
countObj.printNextCount();