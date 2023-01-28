"use strict";

var mysql = require("mysql");
var pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "mysql-client",
  password: "SomeSecretPassword",
  database: "todolist"
});

pool.getConnection(function (err, connection) {
  if (err) throw err;

  connection.query("SELECT 1 + 1 as SOLUTION", function (error, results,fields) {
    connection.release();

    if (error) throw error;

    console.log(results, fields);
  })
});