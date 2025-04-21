import {API_URL }from './config';

export async function createBooking(data) {
  const res = await fetch(`${API_URL}/api/bookings`, {
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
  const res = await fetch(`${API_URL}/api/bookings`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch bookings');
  }

  return await res.json();
}
