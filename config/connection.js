const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Mysql@123",
  database: "Product",
});

module.exports = db;
