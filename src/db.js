import pg from "pg";

const { Pool } = pg;
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export const query = async (text, params, callback) => {
  return pool.query(text, params, callback);
};
