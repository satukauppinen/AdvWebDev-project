const pool = require('../db/db');

async function createBooking({ name, email, phone, service, time }) {
  const result = await pool.query(
    'INSERT INTO bookings (name, email, phone, service, time) VALUES ($1, $2, $3, $4, $5) RETURNING *',
    [name, email, phone, service, time]
  );
  return result.rows[0];
}

module.exports = { createBooking };
// This function creates a new booking in the database.
// It takes an object with the booking details as an argument.
// It uses the pool.query method to execute an SQL INSERT statement.
// The function returns the newly created booking object.
// The pool.query method is used to interact with the PostgreSQL database.
// The SQL statement is parameterized to prevent SQL injection attacks.