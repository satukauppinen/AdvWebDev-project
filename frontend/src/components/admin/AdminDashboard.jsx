//Admin dashboard functionality
import React from 'react';
import { useNavigate } from 'react-router-dom';
import SetAvailability from './SetAvailability';
import ViewBookings from './ViewBookings';

const AdminDashboard = ({ token }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear the token from localStorage
    localStorage.removeItem('adminToken');

    // Redirect to the front page
    navigate('/');
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <button onClick={handleLogout} style={{ marginBottom: '20px' }}>
        Logout
      </button>
      <SetAvailability token={token} />
      <ViewBookings token={token} />
    </div>
  );
};

export default AdminDashboard;
