const { createBooking } = require('../models/bookingModel');
const nodemailer = require('nodemailer');

async function handleBooking(req, res) {
  try {
    const booking = await createBooking(req.body);

    // Send email
    await sendEmailToEntrepreneur(booking);

    res.status(201).json({ success: true, booking });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Booking failed' });
  }
}

async function sendEmailToEntrepreneur(booking) {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const mailOptions = {
    from: `"Farmhouse Booking" <${process.env.EMAIL_USER}>`,
    to: process.env.ENTREPRENEUR_EMAIL,
    subject: `New Booking: ${booking.service}`,
    text: `You've got a new booking:\n\n
Name: ${booking.name}\n
Email: ${booking.email}\n
Phone: ${booking.phone}\n
Service: ${booking.service}\n
Time: ${booking.time}\n`
  };

  await transporter.sendMail(mailOptions);
}

module.exports = { handleBooking };

// This function handles the booking request.
// It uses the createBooking function from the bookingModel to create a new booking.
// If successful, it sends a 201 status code with the booking details.
// If an error occurs, it sends a 500 status code with an error message.
// The function is exported for use in other modules.
// The function uses async/await syntax to handle asynchronous operations.
// It uses try/catch blocks to handle errors.
// The function uses the res object to send responses back to the client.
// The function uses the req object to access the request body.
// The function uses the createBooking function to interact with the database.
// The function uses the JSON format to send data.
// The function uses the console.error method to log errors.
// The function uses the JSON.stringify method to convert objects to JSON strings.
// The function uses the res.status method to set the HTTP status code.