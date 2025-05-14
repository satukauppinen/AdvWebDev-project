// backend/controllers/bookingController.js
//This file is responsible for handling the booking viewing functionality of the admin.
const db = require('../db/db');

const getBookings = async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM bookings bookings ORDER BY id DESC'); // ✅ Fetch all bookings
    res.json(result.rows); // ✅ Send bookings as JSON response
  } catch (error) {
    console.error("Error fetching bookings:", error.message);
    res.status(500).json({ success: false, error: error.message }); // ✅ Handle errors properly
  }
};

module.exports = { getBookings };
