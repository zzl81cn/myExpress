/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-06-02 13:50:22
 * @version $Id$
 */

var mysql = require('mysql');
var pool = mysql.createPool({
	host: 'localhost',
	user: 'root',
	password: 'zzl81cn',
	database: 'nodesample'
});

pool.getConnection(function(err, connection) {
	connection.query('SELECT * FROM userinfo WHERE id = ' + '1 OR ID = 3', function(err, result) {
		console.log(result);
		// connection.release();
	});

	connection.query('SELECT * FROM userinfo WHERE id =' + pool.escape('1 OR ID = 3'), function(err, result) {
		console.log(result);
		connection.release();
	});
});