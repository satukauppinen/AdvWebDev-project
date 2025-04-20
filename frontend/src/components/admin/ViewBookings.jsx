import React, { useEffect, useState } from 'react';

const ViewBookings = ({ token }) => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch('/api/bookings', {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (response.ok) {
          const data = await response.json();
          setBookings(data);
        } else {
          alert('Failed to fetch bookings');
        }
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };
    fetchBookings();
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