const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const pool = require('../db/db'); // PostgreSQL connection

exports.loginAdmin = async (req, res) => {
  const { username, password } = req.body; // Extract data from the request body
  try {
    // Check if admin exists
    const result = await pool.query('SELECT * FROM admins WHERE username = $1', [username]);
    const user = result.rows[0];

    if (!user) {
      // Respond with 401 status code for unauthorized access
      return res.status(401).json({ message: 'Invalid login credentials' });
    }

    // Validate the password
    const match = await bcrypt.compare(password, user.password_hash);
    if (!match) {
      // Respond with 401 status code for unauthorized access
      return res.status(401).json({ message: 'Invalid login credentials' });
    }

    // Generate JWT token for authenticated admin
    const token = jwt.sign(
      { id: user.id, username: user.username }, // Payload
      process.env.JWT_SECRET, // Secret key
      { expiresIn: '2h' } // Token expiration
    );

    // Respond with 200 status code for successful login and send token
    res.status(200).json({ token });
  } catch (err) {
    console.error('Error during login:', err);
    // Respond with 500 status code for server error
    res.status(500).json({ message: 'Server error' });
  }
};

