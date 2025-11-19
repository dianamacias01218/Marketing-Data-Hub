import { Pool } from "pg";

export const pool = new Pool({
  user: "marketing_user",
  host: "localhost",
  database: "marketing_data",
  password: "", // leave blank if no password set
  port: 5432,
});
