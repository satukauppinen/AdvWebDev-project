import React from 'react';
import SetAvailability from './SetAvailability';
import ViewBookings from './ViewBookings';

const AdminDashboard = ({ token }) => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <SetAvailability token={token} />
      <ViewBookings token={token} />
    </div>
  );
};

export default AdminDashboard;
