// backend/middleware/authMiddleware.js
// This file is responsible for handling the authentication of the admin.

const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];

  if (!authHeader) {
    console.error("Auth error: Missing authorization header");
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }

  const token = authHeader.split(" ")[1];

  if (!token) {
    console.error("Auth error: Token missing from header");
    return res.status(401).json({ message: "Unauthorized: Token not found" });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, admin) => {
    if (err) {
      console.error("Auth error: Invalid token", err.message);
      return res.status(403).json({ message: "Forbidden: Invalid token" });
    }

    req.admin = admin;
    next();
  });
};

module.exports = verifyToken;
