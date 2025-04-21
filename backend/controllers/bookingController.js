// backend/controllers/bookingController.js

const db = require('../db/db');

const getBookings = async (req, res) => {
  const result = await db.query('SELECT * FROM bookings ORDER BY time');
  res.json(result.rows);
};

module.exports = { getBookings };
