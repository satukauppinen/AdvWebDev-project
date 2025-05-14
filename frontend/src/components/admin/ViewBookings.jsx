//Handles the admin's booking viewing functionality
import React, { useEffect, useState } from 'react';
import { fetchBookings } from "../../../../backend/api/bookingApi";
import './ViewBookings.scss';

const ViewBookings = ({ token }) => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
  if (token) {
    fetchBookings(token)
      .then(data => {
        console.log("Admin Dashboard - Fetched Bookings:", data); // ✅ Debugging log
        setBookings(data);
      })
      .catch(error => console.error("Error fetching bookings:", error));
  }
}, [token]);


  return (
    <div className="view-bookings">
      <h2>Booked Times</h2>
      <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Service</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking, index) => (
            <tr key={index}>
              <td>{booking.time}</td>
              <td>{booking.name}</td>
              <td>{booking.email}</td>
              <td>{booking.phone}</td>
              <td>{booking.service}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewBookings;
// This component fetches and displays the list of bookings from the server.