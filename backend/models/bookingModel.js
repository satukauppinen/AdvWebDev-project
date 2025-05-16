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



async function deleteBookingById(id) {
  try {
    console.log(`Deleting booking with ID: ${id}`);
    const result = await pool.query("DELETE FROM bookings WHERE id = $1 RETURNING *", [id]);

    if (result.rowCount === 0) {
      console.warn(`No booking found with ID: ${id}`);
      return null;
    }

    console.log("Booking successfully deleted:", result.rows[0]);
    return result.rows[0]; // Returns deleted booking details
  } catch (error) {
    console.error("Database error during booking deletion:", error);
    throw new Error("Failed to delete booking due to database error");
  }
}


module.exports = { createBooking, deleteBookingById };
