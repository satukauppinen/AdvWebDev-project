import React, { useState } from 'react';
import { loginAdmin } from '../../api/authApi'; // Adjust the import path as necessary


const AdminLogin = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const handleLogin = async () => {
    try {
      const { token } = await loginAdmin(credentials.username, credentials.password);
      onLogin(token);
    } catch (err) {
      alert('Invalid login!');
    }
  };

  return (
    <div>
      <h2>Admin Login</h2>
      <input
        type="text"
        placeholder="Username"
        onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default AdminLogin;
// This component handles the admin login functionality.