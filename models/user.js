/**
 * Created by zhouzilong on 2016/6/2.
 */
var mysql = require('mysql');
var DB_NAME = 'nodesample';

var pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'zzl81cn',
    database: 'nodesample'
});

pool.on('connection', function(connection) {
    connection.query('SET SESSION auto_increment_increment=1');
});

function User(user) {
    this.username = user.username;
    this.userpass = user.userpass;
};
module.exports = User;

pool.getConnection(function(err, connection) {
    var useDbSql = 'USE' + DB_NAME;
    connection.query(useDbSql, function(err) {
        if(err) {
            console.log("USE Error: " + err.message);
        }
        console.log()
    })
})











