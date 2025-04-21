const express = require('express');
const { getAvailableTimes } = require('../controllers/availabilityController');
const router = express.Router();

router.get('/', getAvailableTimes);

module.exports = router