/**
 * For some reason this client still does not support the connection string syntax but this is supposed to work
 * according to the docs
 **/
"use strict";

var mysql = require("mysql");
var connection = mysql.createConnection("mysql://SomeSecretPassword@localhost/todolist")

connection.query("SELECT 1 AS SOLUTION", function (error, results, field) {
    if (error) throw error;
    console.log(results);
    console.log(field);
});

connection.end();