const mysql2 = require("mysql2");
const dbConnection = mysql2.createPool({
  host: "localhost",
  user: process.env.USER,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  //   waitForConnections: true,
  connectionLimit: 10
});
module.exports = dbConnection.promise();
 