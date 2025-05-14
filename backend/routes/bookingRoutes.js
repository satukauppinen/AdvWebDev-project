//This file handles the booking logic for the application.
const express = require('express');
const { getBookings, createBooking } = require('../controllers/bookingController'); // ✅ Import createBooking
const router = express.Router();

router.get('/', getBookings);  // ✅ Keep existing GET route
router.post('/', createBooking); // ✅ Add POST route for saving bookings

router.get('/', async (req, res) => {
  try {
    const result = await pool.query("SELECT time, name, phone, service FROM public.bookings ORDER BY time ASC");
    res.json(result.rows);  // ✅ Ensure response includes booked times
  } catch (error) {
    console.error("Error fetching bookings:", error.message);
    res.status(500).json({ message: "Database error" });
  }
});


module.exports = router;


