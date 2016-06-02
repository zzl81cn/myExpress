/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-06-01 16:34:26
 * @version $Id$
 */

// 首先创建一个测试数据库nodesample，在数据库中建一个userinfo表
/*
CREATE DATABASE IF NOT EXISTS nodesample CHARACTER SET UTF8;

USE nodesample;

SET FOREIGN_KEY_CHECKS=0;

DROP TABLE IF EXISTS `userinfo`;
CREATE TABLE `userinfo` (
  `Id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `UserName` varchar(64) NOT NULL COMMENT '用户名',
  `UserPass` varchar(64) NOT NULL COMMENT '用户密码',
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='用户信息表';
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

// Test connection
// connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
//   if (err) throw err;

//   console.log('The solution is: ', rows[0].solution);
// });

// Insert data
// var userAddSql = 'INSERT INTO userinfo(Id,UserName,UserPass) VALUES(0,?,?)';
// var userAddSql_Params = ['zilong', 'Zhou'];
// var userAddSql_Params2 = ['zhangsan', '5678'];

// connection.query(userAddSql, userAddSql_Params2, function(err, result) {
// 	if(err) {
// 		console.log('[INSERT ERROR] - ', err.message);
// 		return;
// 	}
// 	console.log('----------INSERT----------');
// 	console.log('INSERT Id:', result);
// 	console.log('--------------------------');
// })

// Modify data
// var userModSql = 'UPDATE userinfo SET UserName = ?, UserPass = ? WHERE Id = ?';
// var userModSql_Params = ['紫龙', '1234', 1];

// connection.query(userModSql, userModSql_Params, function(err, result) {
// 	if(err) {
// 		console.log('[UPDATE ERROR] - ', err.message);
// 		return;
// 	}
// 	console.log('----------UPDATE----------');
// 	console.log('UPDATE affectedRows', result.affectedRows);
// 	console.log('--------------------------');
// });

// query
var userGetSql = 'SELECT * FROM userinfo';
connection.query(userGetSql, function(err, result) {
	if (err) {
		console.log('[SELECT] - ', err.message);
		return;
	}
	console.log('-----------SELECT-----------');
	console.log(result);
	console.log('----------------------------');
});

// delete
// var userDelSql = 'DELETE FROM userinfo WHERE id = ?';
// var userDelSql_Params = [2];
// connection.query(userDelSql, userDelSql_Params, function(err, result) {
// 	if(err) {
// 		console.log('[DELETE] - ', err.message);
// 		return;
// 	}
// 	console.log('------------DELETE------------');
// 	console.log(result);
// 	console.log('------------------------------');
// })

connection.end(function(err) {
	if(err) {
		return;
	}
	console.log('[connection end] succeed!');
});
