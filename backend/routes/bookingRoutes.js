//This file handles the booking logic for the application.
const express = require("express");
const { getBookings, createBooking, deleteBooking } = require("../controllers/bookingController");
const router = express.Router();

router.get("/", getBookings);
router.post("/", createBooking);

router.delete("/:id", deleteBooking);

router.get('/', async (req, res) => {
  try {
    const result = await pool.query("SELECT time, name, phone, service FROM public.bookings ORDER BY time ASC");
    res.json(result.rows);  
  } catch (error) {
    console.error("Error fetching bookings:", error.message);
    res.status(500).json({ message: "Database error" });
  }
});


module.exports = router;


