// dependencies
var mysql = require('mysql');

// // Create the MySQL connection object
// var connection;

// if (process.env.JAWSDB_URL) {
// 	// DB is JawsDB on Heroku
// 	connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else {
// 	// DB is local on localhost
// 	connection = mysql.createConnection({
// 		port: 3306,
// 		host: 'localhost',
// 		user: 'root',
// 		password: '',
// 		database: 'burgers_db'
// 	})
// };






var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: keys.secretKey.connection_Key,
    database: "bamazon"
  });

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