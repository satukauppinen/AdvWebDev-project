// backend/routes/admin.js

const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const availabilityController = require('../controllers/availabilityController');
const bookingController = require('../controllers/bookingController');
const verifyToken = require('../middleware/authMiddleware');

// Public login
router.post('/login', adminController.login);

// Protected routes
router.get('/availability', verifyToken, availabilityController.getAvailability);
router.post('/availability', verifyToken, availabilityController.addAvailability);
router.delete('/availability', verifyToken, availabilityController.removeAvailability);

router.get('/bookings', verifyToken, bookingController.getBookings);

module.exports = router;
