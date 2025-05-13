//This file is the backend server for the booking application.

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const dotenv = require('dotenv');
const path = require('path');
const bookingRoutes = require('../backend/routes/bookingRoutes');
const adminRoutes = require('../backend/routes/admin');

const app = express();

dotenv.config();

// Security headers using Helmet
app.use(helmet());

// Add specific headers for CSP, anti-clickjacking, etc.
app.use(
    helmet.contentSecurityPolicy({
        directives: {

            defaultSrc: ["'self'"],
            scriptSrc: ["'self'", "https://trusted-cdn.com"],
            styleSrc: ["'self'", "https://trusted-cdn.com"],
            imgSrc: ["'self'", "data:"],
            connectSrc: ["'self'", "http://localhost:5000"], // Allow API requests
        },
    })
);
app.use(helmet.frameguard({ action: 'deny' })); // Anti-clickjacking
app.use(helmet.noSniff());

// CORS configuration
app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:5173',
    credentials: true, // Allow cookies or authentication tokens
}));

// Middleware to parse JSON request bodies
app.use(express.json());

// Routes
app.use('/api/bookings', bookingRoutes);
app.use('/api/admin', adminRoutes);

// Error-handling middleware
app.use((err, req, res, next) => {
    console.error("Internal Error:", err.message);
    res.status(500).json({ success: false, error: err.message });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));

// Export the app for testing or further integrations
module.exports = app;

