/*
  Created by zhouzilong on 2016/6/2.
  http://www.cnblogs.com/zhongweiv/p/nodejs_express_webapp.html
*/
//Model layer
//根据CommonJS规范，一个单独的文件就是一个模块。加载模块使用require方法，该方法读取一个文件并执行，最后返回文件内部的exports对象。
//加载mysql模块
var mysql = require('mysql');

var mysql_cfg = {
	host: 'localhost',
	user: 'root',
	password: 'zzl81cn',
	database: 'nodesample'
};

// 创建连接池
var pool = mysql.createPool(mysql_cfg);
pool.on('connection', function(connection) {
  connection.query('SET SESSION auto_increment_increment=1');
});

function User(user) {
  this.username = user.username;
  this.userpass = user.userpass;
};
module.exports = User;

pool.getConnection(function(err, connection) {
  /* var useDbSql = "USE" + DB_NAME;
  connection.query(useDbSql, function(err) {
    if (err) {
      console.log("USE Error: " + err.message);
    }
    console.log('USE success!');
  }); */

  // 保存数据
  User.prototype.save = function save(callback) {
	  
    var user = {
      username: this.username,
      userpass: this.userpass
    };

    var insertUser_Sql = "INSERT INTO userinfo(Id, UserName, UserPass) VALUES(0,?,?)";

    connection.query(insertUser_Sql, [user.username, user.userpass], function(err, result) {
      if(err) {
        console.log("insertUser_Sql Error: " + err.message);
        return;
      }
      // connection.release();
      console.log("invoked[save]");
      console.log(result);
      callback(err, result);
    });
  };

/* User.getUserNumByName = function(username, callback){
	connection.query("SQL", [params], function(err, result){
		if(err){return;}
		callback(err,result)
	})
}; */
  User.getUserNumByName = function getUserNumByName(username, callback) {
    var getUserNumByName_Sql = "SELECT COUNT(1) AS num FROM userinfo WHERE UserName = ?";

    connection.query(getUserNumByName_Sql, [username], function(err, result) {
      if(err) {
        console.log("getUserNumByName_Sql Error: " + err.message);
        return;
      }
      // connection.release();
      console.log("invoked[getUserNumByName_Sql]");
      callback(err, result);
    });
  };

  User.getUserByUserName = function getUserByUserName(username, callback) {
    var getUserByUserName_Sql = "SELECT * FROM userinfo WHERE UserName = ?";

    connection.query(getUserByUserName_Sql, [username], function(err, result) {
      if(err) {
        console.log("getUserByUserName_Sql Error: " + err.message);
        return;
      }
      // connection.release();
      console.log("invoked[getUserNumByName_Sql]");
      callback(err, result);
    });
  };

});
