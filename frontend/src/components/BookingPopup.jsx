// The booking popup and dropdown menu for selecting the time and date of the booking.
import { useState, useEffect } from 'react';
import { createBooking } from '../../../backend/api/bookingsApi';
import './BookingPopup.scss'

export default function BookingPopup({ service, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    time: "",
  });

  const [availableTimes, setAvailableTimes] = useState([]);
  const [bookings, setBookings] = useState([]);

  // ✅ Formatting function to convert ISO timestamps to "YYYY-MM-DD HH:MM"
  const formatTime = (isoString) => {
    const date = new Date(isoString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    return `${year}-${month}-${day} ${hours}:${minutes}`;
  };

  // ✅ Fetch available times from backend
  useEffect(() => {
    fetch("/api/availability")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched available times:", data);
        setAvailableTimes(data.map((entry) => formatTime(entry.time))); // ✅ Format fetched times
      })
      .catch((error) => console.error("Error fetching availability:", error));
  }, []);

  // ✅ Fetch existing bookings to filter out unavailable times
  useEffect(() => {
    fetch("/api/bookings")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched bookings:", data);
        setBookings(data);
      })
      .catch((error) => console.error("Error fetching bookings:", error));
  }, []);

  // ✅ Filter out already booked times
  const filteredTimes = availableTimes.filter(
    (time) => !bookings.some((booking) => booking.time === time && booking.service === service.title)
  );

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.phone || !formData.time) {
      alert("Please fill in all fields!");
      return;
    }
    try {
      await createBooking({ ...formData, service: service.title });
      alert("Booking successful!");
      onClose();
    } catch (error) {
      alert("Booking failed!");
    }
  };

  return (
    <div className="popup">
      <div className="popup-inner">
        <h2>Booking for {service.title}</h2>
        <select onChange={(e) => setFormData({ ...formData, time: e.target.value })}>
          <option value="">Select a time</option>
          {filteredTimes.map((time) => (
            <option key={time} value={time}>
              {time} {/* ✅ Properly formatted time now appears here */}
            </option>
          ))}
        </select>
        <input type="text" placeholder="Name" onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
        <input type="email" placeholder="Email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
        <input type="tel" placeholder="Phone" onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
        <button onClick={handleSubmit}>Confirm</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}
