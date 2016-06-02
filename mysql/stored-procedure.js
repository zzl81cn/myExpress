/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-06-02 11:04:49
 * @version $Id$
 */

/*
-- ----------------------------
-- Procedure structure for `P_UserInfo`
-- ----------------------------
DROP PROCEDURE IF EXISTS `P_UserInfo`;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `P_UserInfo`(IN ExtId INT,IN ExtUserName VARCHAR(64),IN ExtUserPass VARCHAR(64),OUT ExtReturnVal INT)
TOP: BEGIN
DECLARE EXIT HANDLER FOR SQLEXCEPTION
    BEGIN
        ROLLBACK;
        SET ExtReturnVal = 0;  -- Failed
    END;

START TRANSACTION;

        INSERT INTO userinfo(Id,UserName,UserPass) VALUES(ExtId,ExtUserName,ExtUserPass);
        
        SET ExtReturnVal = 1;
        SELECT ExtReturnVal;
        COMMIT;
END
;;
DELIMITER ;
*/

var mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'zzl81cn',
	database: 'nodesample',
	port: '3306'
});

connection.connect();

var userProc = 'call P_UserInfo(?,?,?,@ExtReturnVal)';
var userProc_Params = [0, 'miao', '7890'];
// call stored procedure
connection.query(userProc, userProc_Params, function(err, result) {
	if (err) {
		console.log(err.message);
		return;
	}
	console.log('-------------PROCEDURE--------------');
	console.log(result);
	console.log(result[0][0].ExtReturnVal);
	console.log('------------------------------------');
})

connection.end();