var mysql = require("mysql")
var connection = mysql.createConnection({
  host: "localhost",
  user: "mysql-client",
  password: "SomeSecretPassword"
});


connection.query("SELECT 1", function (error, results, field) {
  if (error) throw error;
  console.table({
    results, field
  })
  console.debug(field);
});

connection.end();