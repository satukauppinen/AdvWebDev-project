// backend/controllers/adminController.js

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { getAdminByUsername } = require('../models/adminModel');

const login = async (req, res) => {
  const { username, password } = req.body;
  const admin = await getAdminByUsername(username);

  if (!admin) return res.status(401).json({ message: 'Invalid credentials' });

  const isMatch = await bcrypt.compare(password, admin.password_hash);
  if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

  const token = jwt.sign({ id: admin.id }, process.env.JWT_SECRET, { expiresIn: '1d' });
  res.json({ token });
};

module.exports = { login };
