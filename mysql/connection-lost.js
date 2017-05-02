/**
 * 
 * @authors zzl81cn (you@example.org)
 * @date    2016-06-02 11:52:19
 * @version v1.0
 */

var mysql = require('mysql');
var db_config = {
	host: 'localhost',
	user: 'root',
	password: 'zzl81cn',
	database: 'nodesample'
};

var connection;
function handleDisconnect() {
	connection = mysql.createConnection(db_config);
	connection.connect(function(err) {
		if(err) {
			console.log('断线重连……' + new Date());
			setTimeout(handleDisconnect, 2000);
			return;
		} else console.log('Connect success!');
	});
	connection.on('error', function(err) {
		console.log('db error', err);
		if(err.code === 'PROTOCOL_CONNECTION_LOST') {
			handleDisconnect();
		} else {
			throw err;
		}
	});
}
handleDisconnect();