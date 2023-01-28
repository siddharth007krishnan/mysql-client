var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "mysql-client",
  password: "SomeSecretPassword",
  database: "todolist"
});

connection.connect();

connection.query("SELECT 1 + 1 AS SOLUTION", function (error, results, fields) {
  if (error) throw error;
  const [{SOLUTION}] = results;
  console.log("The solution is: %d", SOLUTION);
  console.table(SOLUTION);
  console.debug(typeof SOLUTION);
});

connection.end();