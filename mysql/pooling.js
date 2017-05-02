/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-06-02 11:04:49
 * @version $Id$
 */

var mysql = require('mysql');
var pool = mysql.createPool({
	host: 'localhost',
	user: 'root',
	password: 'zzl81cn',
	database: 'nodesample'
});

/*pool.on('connection', function(connection) {
	connection.query('SET SESSION auto_increment_increment=1');
});*/

//直接使用
pool.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
  if (err) throw err;

  console.log('The solution is: ', rows[0].solution);
});

//共享
pool.getConnection(function (err, connection) {
	// connected! (unless `err` is set)
	connection.query('select * from userinfo', function (err, result) {
		console.log(result);
		connection.release();
	});

	/*connection.query('SELECT * FROM userinfo', function (err, result) {
		console.log(result);
		connection.release();
	});*/
});

/*pool.end(function (err) {
	if(err) {
		console.log('End field!');
	} console.log('ok!')
});*/

// waitForConnections
// 当连接池没有连接或超出最大限制时，设置为true且会把连接放入队列，设置为false会返回error
// connectionLimit
// 连接数限制，默认：10
// queueLimit
// 最大连接请求队列限制，设置为0表示不限制，默认：0
// 释放
// 调用connection.release()方法，会把连接放回连接池，等待其它使用者使用!