//This file handles the booking logic for the application.
const express = require('express');
const {  handleBooking } = require('../controllers/bookingsController');

const router = express.Router();

router.post("/", handleBooking);


module.exports = router;
