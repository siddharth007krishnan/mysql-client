var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "mysql-client",
  password: "SomeSecretPassword"
});

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id" + connection.threadId);
});

connection.end();