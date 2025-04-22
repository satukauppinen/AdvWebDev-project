// This file is responsible for handling the availability routes of the admin functionality of the application.
const express = require('express');
const { getAvailableTimes } = require('../controllers/availabilityController');
const router = express.Router();

router.get('/', getAvailableTimes);

module.exports = router