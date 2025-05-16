// Booking Controller - Handles the booking logic for the application
const { createBooking } = require('../models/bookingModel');

async function handleBooking(req, res) {
  try {
    console.log("Received booking request:", req.body);

    // Validate input
    const { name, email, phone, service, time } = req.body;
    if (!name || !email || !phone || !service || !time) {
      return res.status(400).json({ success: false, error: "Missing required fields" });
    }

    // Create booking
    const booking = await createBooking({ name, email, phone, service, time });

    return res.status(201).json({
      success: true,
      booking,
      message: "Booking created successfully",
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Error creating booking:", error);

    return res.status(500).json({
      success: false,
      error: error.message || "Internal server error",
      timestamp: new Date().toISOString(),
    });
  }
}

// handle booking deletions
async function deleteBooking(req, res) {
  try {
    const { id } = req.params;
    console.log(`Deleting booking with ID: ${id}`);

    if (!id) {
      return res.status(400).json({ success: false, error: "Booking ID is required" });
    }

    const result = await deleteBookingById(id);

if (!result) {
  return res.status(404).json({ success: false, error: "Booking not found" });
}


    return res.json({ success: true, message: "Booking deleted successfully" });
  } catch (error) {
    console.error("Error deleting booking:", error);
    return res.status(500).json({ success: false, error: "Internal server error" });
  }
}


module.exports = { handleBooking };