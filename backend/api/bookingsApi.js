//import axios from 'axios';
//API calls for booking management for the admin
import { API_URL } from "./config";

export const fetchBookings = async () => {
  try {
    const response = await fetch("/api/bookings");

    if (!response.ok) {
      throw new Error(`Failed to fetch bookings: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching bookings:", error.message);
    throw error;
  }
};

export const createBooking = async (bookingData) => {
  console.log("Booking Data Being Sent:", bookingData); // ✅ Debugging log

  try {
    const response = await fetch("/api/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bookingData),
    });

    console.log("Response status:", response.status);

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(`Failed to create booking: ${response.status} - ${errorMessage}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error in createBooking:", error.message);
    throw error;
  }
};


