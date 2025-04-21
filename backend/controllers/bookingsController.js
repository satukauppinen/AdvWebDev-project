const { createBooking } = require('../models/bookingModel');

async function handleBooking(req, res) {
  const { name, email, phone, service, time } = req.body;
  try {
    const booking = await createBooking({ name, email, phone, service, time });

    res.status(201).json({ success: true, booking });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Booking failed' });
  }
}

module.exports = { handleBooking };