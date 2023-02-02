require('dotenv').config()
const mysql = require('mysql')

const MYSQL_PARAMS = {
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
}

const connection = mysql.createConnection(MYSQL_PARAMS)

connection.connect(function(err) {
    if (err) {
    return console.error(`error: ${err.message}. ${MYSQL_PARAMS.host}`);
  }
    // connection.query("SELECT * FROM books", function (err, result, fields) {
    //     console.log(result)
    // });
  console.log('Connected to the MySQL server.');
});

module.exports = connection