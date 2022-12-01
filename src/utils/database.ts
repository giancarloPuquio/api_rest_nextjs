import { Pool } from "pg";

let conn: any;

if (!conn) {
  conn = new Pool({
    user: "postgres",
    password: "pass",
    host: "localhost",
    port: 5432,
    database: "tasksdb",
  });
}

export { conn };
