import mysql from "mysql";

export const db = mysql.createConnection({
  host: "localhost",
  user: "Kumar",
  password: "Kumar@2003",
  database: "blog",
});
