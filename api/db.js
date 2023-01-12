import mysql from "mysql";

export const db = mysql.createConnection({
  host: "localhost",
  user: "kumar",
  password: "kumar@2003",
  database: "blog",
});
