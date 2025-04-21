// backend/models/adminModel.js

const db = require('../db/db');

async function getAdminByUsername(username) {
  const result = await db.query(
    'SELECT * FROM admins WHERE username = $1',
    [username]
  );
  return result.rows[0];
}

module.exports = { getAdminByUsername };
