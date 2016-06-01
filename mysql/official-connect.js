/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-06-01 16:34:26
 * @version $Id$
 */

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'zzl81cn',
  database : 'nodesample',
  port     : '3306'
});

connection.connect(function(err) {
	if(err) {
		console.log('[query] - :' + err);
		return;
	}
	console.log('[connnetion connnect] succeed!');
});

connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
  if (err) throw err;

  console.log('The solution is: ', rows[0].solution);
});

connection.end();