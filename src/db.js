import pg from "pg";

const { Pool } = pg;
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export const query = (text, params, callback) =>
  pool.query(text, params, callback);
