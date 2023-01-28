var mysql = require("mysql");

var pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "mysql-client",
  password: "SomeSecretPassword",
  database: "todolist"
});

pool.query("SELECT 1 + 1 as solution", function (error, results, field) {
  if (error) throw error;
  const [{ solution }] = results;
  console.log("The solution is %d", solution);
  console.log(field)
});

pool.query("SHOW tables", function (error, results, field) {
  if (error) throw error;
  console.log(results);
  console.log(field);
})