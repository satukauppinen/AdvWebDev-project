// Database connection file for the application
require('dotenv').config();
console.log("Loaded DB Password:", process.env.DB_PASSWORD); 

const { Pool } = require('pg');


// Create PostgreSQL connection pool
const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD, // Now explicitly passing password
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false, // SSL for deployed environments
});

// Improved query method with error handling
const query = async (text, params) => {
  try {
    console.log("Executing query:", text);
    const result = await pool.query(text, params);
    return result;
  } catch (error) {
    console.error("Database query error:", error);
    throw new Error("Database operation failed");
  }
};

// Gracefully close database connections when the app exits
process.on('exit', () => {
  pool.end(() => console.log("PostgreSQL pool has closed"));
});

module.exports = { query: (text, params) => pool.query(text, params), pool };

