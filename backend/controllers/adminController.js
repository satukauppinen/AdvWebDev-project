const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const pool = require('../db/db'); 
exports.loginAdmin = async (req, res) => {
  const username = req.body.username.trim();
  const password = req.body.password.trim();

  

  

  // Validating request body
  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  try {
    // Check if admin exists
    //console.log("Database query result:", result.rows);

    const result = await pool.query('SELECT * FROM admins WHERE username = $1', [username]);
    const admin = result.rows.length > 0 ? result.rows[0] : null;

    //const match = await bcrypt.compare(password, admin.password);
    //console.log("Password comparison result:", match);

    if (!admin) {
      console.error("Login failed: Admin not found", username);
      return res.status(401).json({ message: 'Invalid login credentials' });
    }

    console.log("Received password:", password);
    console.log("Stored hash from database:", password);


    // Generate JWT token for authenticated admin
    const token = jwt.sign(
      { id: id, username: username }, // Payload
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