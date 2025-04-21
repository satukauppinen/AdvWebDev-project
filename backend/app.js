const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const bookingRoutes = require('./routes/bookingRoutes');
const adminRoutes = require('./routes/admin');

const app = express();

dotenv.config();


app.use(cors());
app.use(express.json());

app.use('/api', bookingRoutes);
app.use('/api/admin', adminRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// This code sets up an Express server for handling booking requests.
// It uses the cors middleware to enable Cross-Origin Resource Sharing.
// It uses the express.json() middleware to parse JSON request bodies.
// It imports the bookingRoutes module to handle booking-related routes.
// It listens for incoming requests on port 5000.
// The server is started using the app.listen method.
// The server logs a message to the console when it starts.
// The server uses the cors middleware to allow requests from different origins.
