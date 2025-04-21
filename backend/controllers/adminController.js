const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const pool = require('../db/db'); // PostgreSQL connection

exports.loginAdmin = async (req, res) => {
  const { username, password } = req.body;

  // Validate request body
  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  try {
    // Check if admin exists
    const result = await pool.query('SELECT * FROM admins WHERE username = $1', [username]);
    const user = result.rows[0];

    if (!user) {
      return res.status(401).json({ message: 'Invalid login credentials' });
    }

    // Validate the password
    const match = await bcrypt.compare(password, user.password_hash);
    if (!match) {
      return res.status(401).json({ message: 'Invalid login credentials' });
    }

    // Generate JWT token for authenticated admin
    const token = jwt.sign(
      { id: user.id, username: user.username }, // Payload
      process.env.JWT_SECRET, // Secret key
      { expiresIn: '2h' } // Token expiration
    );

    // Respond with token
    res.status(200).json({ token });
  } catch (err) {
    console.error('Error during login:', err.message, err.stack);
    res.status(500).json({ message: 'Server error' });
  }
};
