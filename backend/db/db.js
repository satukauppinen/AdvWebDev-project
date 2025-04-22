//This is the database connection file for the application.
// It uses the pg library to connect to a PostgreSQL database.
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
}
