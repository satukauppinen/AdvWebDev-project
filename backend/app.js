//This file is the backend server for the booking application.

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const dotenv = require('dotenv');
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
            connectSrc: ["'self'"],
        },
    })
);
app.use(helmet.frameguard({ action: 'deny' })); // Anti-clickjacking
app.use(helmet.noSniff());


app.use(cors({ origin: 'http://localhost:5173' }));

app.use(express.json());

app.use('/api/bookings', bookingRoutes);
app.use('/api/admin', adminRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

