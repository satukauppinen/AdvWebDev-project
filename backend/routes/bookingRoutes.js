//This file handles the booking logic for the application.
const express = require('express');
const { getBookings } = require('../controllers/bookingController'); // ✅ Add controller function
const router = express.Router();

router.get('/', getBookings); // ✅ Define GET route for `/api/bookings`

module.exports = router;

