const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const pool = require('../db/db'); 

// Admin login function
exports.loginAdmin = async (req, res) => {
  const username = req.body.username.trim();
  const password = req.body.password.trim();

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  try {
    // Debugging: Log database query results
    console.log("Checking for admin with username:", username);

    const debugResult = await pool.query('SELECT username FROM public.admins');
console.log("All stored usernames in database:", debugResult.rows);


    const result = await pool.query('SELECT * FROM public.admins WHERE username = $1', [username]);
    console.log("Stored usernames in database:", result.rows);
    console.log("Connected to database:", process.env.DATABASE_URL);
    



    if (result.rows.length === 0) {
      console.error("Login failed: Admin not found", username);
      return res.status(401).json({ message: 'Invalid login credentials' });
    }

    const admin = result.rows[0];

    console.log("Stored password:", admin.password);
    console.log("Entered password:", password);
    console.log("Password comparison result:", await bcrypt.compare(password, admin.password));

    // Check if password verification is working correctly
    const match = await bcrypt.compare(password, admin.password);
    console.log("Password comparison result:", match);

    if (!match) {
      console.error("Incorrect password for admin:", username);
      return res.status(401).json({ message: 'Invalid login credentials' });
    }

    const token = jwt.sign(
      { id: admin.id, username: admin.username },
      process.env.JWT_SECRET,
      { expiresIn: '2h' }
    );

    res.status(200).json({ token });
  } catch (err) {
    console.error('Error during login:', err);
    res.status(500).json({ message: 'Server error' });
  }
};



exports.getAdminData = async (req, res) => {
  try {
    const result = await pool.query('SELECT id, username, email, role FROM admins'); 
  } catch (error) {
    console.error("Error fetching admin data:", error.message);
    res.status(500).json({ success: false, error: error.message }); 
  }
};
