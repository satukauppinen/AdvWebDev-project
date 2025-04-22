//This file is the backend server for the booking application.

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const bookingRoutes = require('../backend/routes/bookingRoutes');
const adminRoutes = require('../backend/routes/admin');

const app = express();

dotenv.config();



app.use(cors({ origin: 'http://localhost:5173' }));

app.use(express.json());

app.use('/api/bookings', bookingRoutes);
app.use('/api/admin', adminRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

