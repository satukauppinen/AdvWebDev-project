import { useState } from 'react';
import { createBooking } from '../api/bookingApi';

export default function BookingPopup({ service, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    time: '',
  });

  const availableTimes = [
    '2025-04-20 10:00',
    '2025-04-20 14:00',
    '2025-04-21 09:00',
    '2025-04-21 15:00',
  ];

  const handleSubmit = async () => {
    try {
      await createBooking({ ...formData, service: service.title });
      alert('Booking successful!');
      onClose();
    } catch (error) {
      alert('Booking failed!');
    }
  };

  return (
    <div className="popup">
      <div className="popup-inner">
        <h2>Booking for {service.title}</h2>
        <select onChange={e => setFormData({ ...formData, time: e.target.value })}>
          <option value="">Select a time</option>
          {availableTimes.map(time => (
            <option key={time} value={time}>{time}</option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Name"
          onChange={e => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          onChange={e => setFormData({ ...formData, email: e.target.value })}
        />
        <input
          type="tel"
          placeholder="Phone"
          onChange={e => setFormData({ ...formData, phone: e.target.value })}
        />
        <button onClick={handleSubmit}>Confirm</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}
// This component represents a booking popup.
// It takes a service and an onClose function as props.
// It uses the useState hook to manage form data.
// It defines a list of available times for booking.
// It renders a form with inputs for name, email, phone, and time selection.
// It handles form submission and calls the createBooking function from the API.
// It uses async/await syntax to handle asynchronous operations.