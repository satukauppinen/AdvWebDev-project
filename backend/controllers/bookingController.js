// backend/controllers/bookingController.js
//This file is responsible for handling the booking viewing functionality of the admin.
const db = require('../db/db');

const getBookings = async (req, res) => {
  const result = await db.query('SELECT * FROM bookings ORDER BY time');
  res.json(result.rows);
};

module.exports = { getBookings };
