//This is the admin page component that handles the admin login and dashboard.
import React, { useState } from 'react';
import AdminLogin from '../components/admin/AdminLogin';
import AdminDashboard from '../components/admin/AdminDashboard';
import Navbar from '../components/Navbar';

export default function AdminPage() {
  const [authToken, setAuthToken] = useState(null); // Tracks if admin is logged in

  const handleLogin = (token) => {
    setAuthToken(token); // Save the token on successful login
  };

  const handleLogout = () => {
    setAuthToken(null); // Clear the token to log out
  };

  return (
    <div>
      <Navbar />
      <div className="admin-page">
        {!authToken ? (
          <AdminLogin onLogin={handleLogin} />
        ) : (
          <>
            <button onClick={handleLogout} style={{ marginBottom: '1rem' }}>
              Logout
            </button>
            <AdminDashboard token={authToken} />
          </>
        )}
      </div>
    </div>
  );
}
