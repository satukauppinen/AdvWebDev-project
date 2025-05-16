// backend/routes/admin.js
//This file is responsible for handling the routes related to the admin functionality of the application.
// It uses the express library to create a router and define the routes.
const express = require('express');
const router = express.Router();
const { loginAdmin, getAdminData } = require('../controllers/adminController'); 
const availabilityController = require('../controllers/availabilityController');
const bookingController = require('../controllers/bookingController');
const verifyToken = require('../middleware/authMiddleware');

// Public login
router.post('/login', loginAdmin);
    
// GET route for `/api/admin`
router.get('/', verifyToken, getAdminData); 

// Protected routes
router.get('/availability', verifyToken, availabilityController.getAvailability);
router.post('/availability', verifyToken, availabilityController.addAvailability);
router.delete('/availability', verifyToken, availabilityController.removeAvailability);

router.get('/bookings', verifyToken, bookingController.getBookings);

module.exports = router;

