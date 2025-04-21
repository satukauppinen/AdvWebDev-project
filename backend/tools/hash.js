// backend/tools/hash.js
const bcrypt = require('bcrypt');

const hashPassword = async () => {
  const plainPassword = 'villi386sika'; // Change to your desired admin password
  const hash = await bcrypt.hash(plainPassword, 10);
  console.log('Hashed password:', hash);
};

hashPassword();
