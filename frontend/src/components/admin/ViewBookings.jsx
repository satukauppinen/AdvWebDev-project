//Handles the admin's booking viewing functionality
import React, { useEffect, useState } from 'react';
import { fetchBookings } from "../../../../backend/api/bookingApi";

const ViewBookings = ({ token }) => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
      if (token) {
          fetchBookings().then(setBookings);
      }
  }, [token]);

  return (
    <div>
      <h2>Booked Times</h2>
      <ul>
        {bookings.map((booking, index) => (
          <li key={index}>
            {booking.time} - {booking.name} ({booking.phone})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewBookings;
// This component fetches and displays the list of bookings from the server.