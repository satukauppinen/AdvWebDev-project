const bcrypt = require('bcrypt');

bcrypt.hash('testi', 10).then(hash => {
  console.log("Hashed password:", hash);
});

