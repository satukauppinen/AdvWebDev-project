//API calls for booking management
import {API_URL }from './config';

export async function createBooking(data) {
  const res = await fetch(`/api/bookings`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error('Booking failed');
  }

  return await res.json();
}

export async function fetchBookings(token) {
  const res = await fetch(`/api/bookings`, {
    headers: {
      Authorization: token ? `Bearer ${token}` : "",  // Ensure token is included
      "Content-Type": "application/json",
    },
  });

  console.log("API Response Status:", res.status); // Debugging log
  const data = await res.json();
  console.log("API Response Data:", data);

  if (!res.ok) {
    throw new Error(`Failed to fetch bookings: ${res.status}`);
  }

  return data;
};
