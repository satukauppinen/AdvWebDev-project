// backend/tools/hash.js

const bcrypt = require('bcrypt');

const hashPassword = async () => {
  const plainPassword = 'password'; // Change to your pw
  const hash = await bcrypt.hash(plainPassword, 10);
  console.log('Hashed password:', hash);
};

hashPassword();
