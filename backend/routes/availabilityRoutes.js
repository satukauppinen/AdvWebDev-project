// This file is responsible for handling the availability routes of the admin functionality of the application.
const express = require('express');
const { getAvailability } = require('../controllers/availabilityController');
const router = express.Router();

router.get('/', getAvailability);

module.exports = router