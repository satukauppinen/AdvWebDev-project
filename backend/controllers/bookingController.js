// Booking Controller - Handles booking logic for the application
const nodemailer = require("nodemailer");
const pool = require("../db/db"); 
const { createBookingFromModel, deleteBookingById } = require("../models/bookingModel"); 

// ✅ Function to create a booking
async function createBooking(req, res) {
  try {
    const { name, email, phone, service, time } = req.body;
    console.log("Received booking request:", req.body); // Debugging log

    if (!name || !email || !phone || !service || !time) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const result = await pool.query(
      "INSERT INTO public.bookings (time, name, email, phone, service) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [time, name, email, phone, service]
    );

    require("dotenv").config();
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: "satukauppinen.profs@gmail.com",
      to: email,
      subject: `Booking Confirmation for ${service}`,
      text: `Hello ${name},\n\nYour booking for ${service} on ${time} has been confirmed!\n\nThank you for choosing The Farmhouse Experience.\n\nBest regards,\nGreen Meadow Farm`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
      } else {
        console.log("Email sent successfully:", info.response);
      }
    });

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error("Error saving booking:", error);
    res.status(500).json({ message: "Database error" });
  }
}

// Function to fetch bookings
async function getBookings(req, res) {
  try {
    const result = await pool.query("SELECT * FROM public.bookings ORDER BY id DESC");
    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching bookings:", error.message);
    res.status(500).json({ success: false, error: error.message });
  }
}

// Function to delete a booking
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

// Export all functions
module.exports = { getBookings, createBooking, deleteBooking };
