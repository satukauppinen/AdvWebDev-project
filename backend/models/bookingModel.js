//This file is for handling the booking logic of the application.
const pool = require('../db/db');

async function createBooking({ name, email, phone, service, time }) {
  const result = await pool.query(
    'INSERT INTO bookings (name, email, phone, service, time) VALUES ($1, $2, $3, $4, $5) RETURNING *',
    [name, email, phone, service, time]
  );
  return result.rows[0];
}

module.exports = { createBooking };
