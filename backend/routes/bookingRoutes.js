const express = require('express');
const { createBooking } = require('../controllers/bookingsController');
const router = express.Router();

router.post('/bookings', createBooking);

module.exports = router;
// This code defines a route for handling booking requests.
// It uses the Express framework to create a router.
// The router listens for POST requests to the '/bookings' endpoint.
// When a request is received, it calls the handleBooking function from the bookingsController.
// The router is exported for use in other modules.
// The router is created using the express.Router() method.
// The router is used to define application routes.
// The router is used to handle HTTP requests.
// The router is used to group related routes together.
// The router is used to create modular route handlers.
// The router is used to create middleware functions.
// The router is used to create route parameters.