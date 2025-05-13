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

// ✅ Middleware to parse JSON request bodies (must be before routes)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Security headers using Helmet
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

// ✅ CORS configuration
app.use(cors({
    origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
    credentials: true,
}));

// ✅ Debugging Middleware to Confirm `req.body`
app.use((req, res, next) => {
    console.log(`Incoming ${req.method} request to ${req.url}`);
    console.log("Request Body:", req.body);
    next();
});

// ✅ Routes (Ensure `/api/admin` is correctly registered)
app.use('/api/bookings', bookingRoutes);
app.use('/api/admin', adminRoutes);

// ✅ Error-handling middleware
app.use((err, req, res, next) => {
    console.error("Internal Error:", err.message);
    res.status(500).json({ success: false, error: err.message });
});

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));

// ✅ Export for testing or further integrations
module.exports = app;
