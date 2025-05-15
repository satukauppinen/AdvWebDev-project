//Handles the admin's booking viewing functionality
import React, { useEffect, useState } from 'react';
import { fetchBookings } from "../../../../backend/api/bookingApi";
import './ViewBookings.scss';

const ViewBookings = ({ token }) => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
  fetchBookings()
    .then((data) => {
      console.log("Fetched bookings:", data);
      setBookings(data);
    })
    .catch((error) => console.error("Error fetching bookings:", error));
}, []);

const handleDelete = async (bookingId) => {
  try {
    await fetch(`/api/bookings/${bookingId}`, {
      method: "DELETE",
    });
    setBookings(bookings.filter((booking) => booking.id !== bookingId)); // ✅ Update UI instantly
  } catch (error) {
    console.error("Error deleting booking:", error);
  }
};




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
              <td>
        <button onClick={() => handleDelete(booking.id)}>❌</button> {/* ✅ Delete button */}
      </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewBookings;
// This component fetches and displays the list of bookings from the server.