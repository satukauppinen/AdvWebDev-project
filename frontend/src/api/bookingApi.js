export const createBooking = async (bookingData) => {
    const response = await fetch('/api/bookings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(bookingData),
    });
    if (!response.ok) throw new Error('Booking failed');
    return response.json();
  };
  
  export const fetchBookings = async (token) => {
    const response = await fetch('/api/bookings', {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!response.ok) throw new Error('Failed to fetch bookings');
    return response.json();
  };
  