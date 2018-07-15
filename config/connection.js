// dependencies
var mysql = require('mysql');
// var keys = require('./keys.js');
require("dotenv").config();

var connection;
if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}else {
  connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
      
        // Your username
        user: "root",
      
        // Your password
        
        password: process.env.MYSQL_KEY,
        database: "burgers_db"
      });
}

// var connection = mysql.createConnection({
//     host: "localhost",
//     port: 3306,
  
//     // Your username
//     user: "root",
  
//     // Your password
    
//     password: process.env.MYSQL_KEY,
//     database: "burgers_db"
//   });

// connection.connect(function(err) {
// 	if (err) {
// 	  console.error('error connecting: ' + err.stack);
// 	  return;
// 	}
// });

// connection to MySQL
connection.connect(function(err) {
  if (err) {
    console.error('ERROR: MySQL connection error -- ' + err.stack + '\r\n');
    return;
  }
  console.log('Connected to MySQL database as id ' + connection.threadId + '\r\n');
});

// Export connection
module.exports = connection;