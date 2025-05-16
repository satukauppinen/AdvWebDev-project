//handles the admin's ability to set available times for booking
import React, { useState} from 'react';
import { setAvailability } from '../../../../backend/api/availabilityApi'; 

const SetAvailability = ({ token }) => {
  const [time, setTime] = useState(""); // Store selected time
  const [service, setService] = useState("Sheep"); // Default service value

  const saveTimes = async () => {
    try {
      await setAvailability(time, service, token); 
      alert("Times saved!");
    } catch (error) {
      alert("Failed to save times.");
    }
  };

  return (
    <div>
      <h2>Set Available Times</h2>
      <input
        type="datetime-local"
        value={time}
        onChange={(e) => setTime(e.target.value)} 
      />
      <select value={service} onChange={(e) => setService(e.target.value)}> 
        <option value="Sheep">Sheep</option>
        <option value="Chicken">Chicken</option>
        <option value="Gardening">Gardening</option>
      </select>
      <button onClick={saveTimes}>Save</button>
    </div>
  );
}

export default SetAvailability;
// This component allows the admin to set available times for booking.