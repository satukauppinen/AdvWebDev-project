// Booking Controller - Handles the booking logic for the application
const { createBooking } = require('../models/bookingModel');

async function handleBooking(req, res) {
  try {
    console.log('Received booking request:', req.body);

    // Validate input
    const { name, email, phone, service, time } = req.body;
    if (!name || !email || !phone || !service || !time) {
      return res.status(400).json({ success: false, error: 'Missing required fields' });
    }

    // Create booking
    const booking = await createBooking({ name, email, phone, service, time });

    return res.status(201).json({
      success: true,
      booking,
      message: 'Booking created successfully',
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Error creating booking:', error);

    // More detailed error response
    return res.status(500).json({
      success: false,
      error: error.message || 'Internal server error',
      timestamp: new Date().toISOString(),
    });
  }
}

module.exports = { handleBooking };
