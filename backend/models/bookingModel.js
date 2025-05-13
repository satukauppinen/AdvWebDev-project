// Booking Model - Handles booking-related database operations
const pool = require('../db/db');

async function createBooking({ name, email, phone, service, time }) {
  try {
    console.log("Creating booking with details:", { name, email, phone, service, time });

    const result = await pool.query(
      'INSERT INTO bookings (name, email, phone, service, time) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [name, email, phone, service, time]
    );

    console.log("Booking successfully created:", result.rows[0]);
    return result.rows[0];
  } catch (error) {
    console.error("Database error during booking creation:", error);
    throw new Error("Failed to create booking due to database error");
  }
}

module.exports = { createBooking };
