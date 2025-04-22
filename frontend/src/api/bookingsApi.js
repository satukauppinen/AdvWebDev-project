//import axios from 'axios';
//API calls for booking management for the admin
import { API_URL } from "./config";

export const fetchBookings = async () => {
    const response = await fetch(`${API_URL}/bookings`);
    return response.json();
};

export const createBooking = async (bookingData) => {
  const response = await fetch(`${API_URL}/bookings`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bookingData),
  });
  return response.json();
};