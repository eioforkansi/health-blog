import mysql from "mysql";

export const db = mysql.createConnection({
  host: "localhost",
  user: "eioforkansi",
  password: "00000",
  database: "HealthBlog",
});
