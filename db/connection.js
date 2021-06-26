const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',

  port: 3306,

  // Your username
  user: 'root',

  // Be sure to update with your own MySQL password!
  password: 'password',
  database: 'employee_db',
});

module.exports = connection;