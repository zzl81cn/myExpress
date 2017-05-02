/**
 * 
 * @authors zzl81cn
 * @date    2016-06-01 16:34:26
 * @version $Id$
 * http://www.cnblogs.com/zhongweiv/p/nodejs_mysql.html
 */

// 首先创建一个测试数据库nodesample，执行如下sql语句，在数据库中建一个userinfo表
/*
CREATE DATABASE IF NOT EXISTS myexpress CHARACTER SET UTF8;

USE myexpress;

SET FOREIGN_KEY_CHECKS=0;

DROP TABLE IF EXISTS `userinfo`;
CREATE TABLE `userinfo` (
  `Id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `UserName` varchar(64) NOT NULL COMMENT '用户名',
  `UserPass` varchar(64) NOT NULL COMMENT '用户密码',
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='用户信息表';
*/

//加载mysql模块 https://github.com/felixge/node-mysql
const mysql = require('mysql');
const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'zzl81cn',
	database: 'nodesample'
	// ,port     : '3306' // 默认3306，可以不写。
});

// Test connect
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
//从执行结果可以看出，result中包含一些有用的信息，affectedRows（受影响的行数） insertId（插入的主键ID）等等……
//有受影响的行数和插入数据的ID，就可以很方便进行后续的一些操作（比如判断是否成功或者继续根据插入数据的ID进行其它操作）
/*INSERT Id: OkPacket {
	  fieldCount: 0,
	  affectedRows: 1,
	  insertId: 7,
	  serverStatus: 2,
	  warningCount: 0,
	  message: '',
	  protocol41: true,
	  changedRows: 0 }*/
/* var userAddSql = 'INSERT INTO userinfo(Id,UserName,UserPass) VALUES(0,?,?)';
// var userAddSql_Params = ['zilong', 'Zhou'];
 var userAddSql_Params2 = ['zhangsan', '5678'];

 connection.query(userAddSql, userAddSql_Params2, function(err, result) {
 	if(err) {
 		console.log('[INSERT ERROR] - ', err.message);
 		return;
 	}
 	console.log('----------INSERT----------');
 	console.log('INSERT Id:', result);
 	console.log('--------------------------');
 })*/


// Modify data
/* var userModSql = 'UPDATE userinfo SET UserName = ?, UserPass = ? WHERE Id = ?';
 var userModSql_Params = ['紫龙', '1234', 1];

 connection.query(userModSql, userModSql_Params, function(err, result) {
 	if(err) {
 		console.log('[UPDATE ERROR] - ', err.message);
 		return;
 	}
 	console.log('----------UPDATE----------');
 	console.log('UPDATE affectedRows', result.affectedRows);
 	console.log('--------------------------');
 });*/


// query data
// 1
var userGetSql = 'SELECT * FROM userinfo';
// 2
connection.query(userGetSql, function(err, result) {
	// 3
	if (err) {
		console.log('[SELECT] - ', err.message);
		return;
	}
	console.log('-----------SELECT-----------');
	console.log(result);
	console.log('----------------------------');
	// Manual traversal result
	/*if(result.length>0){
		var firstResult=result[0];
		console.log('Id:'+firstResult['Id']);
		console.log('UserName:'+firstResult['UserName']);
		console.log('UserPass:'+firstResult['UserPass']);

	};*/
	// 4 遍历result结果
	for(let i = 0;i<result.length;i++){
		let everyResult = result[i];
		console.log('Result ' + i);
		console.log('ID: ' + everyResult['Id']);
		console.log('UserName: ' + everyResult['UserName']);
		console.log('UserPass: ' + everyResult['UserPass']);
	}
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

//断开连接
connection.end(function(err) {
	if(err) {
		return;
	}
	console.log('[connection end] succeed!');
});
