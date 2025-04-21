import React, { useState} from 'react';

const SetAvailability = ({ token }) => {
  const [availableTimes, setAvailableTimes] = useState([]);

  const addTime = (time) => setAvailableTimes([...availableTimes, time]);

  const saveTimes = async () => {
    try {
      await fetch('/api/availability', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ times: availableTimes }),
      });
      alert('Times saved!');
    } catch (error) {
      console.error('Error saving times:', error);
    }
  };

  return (
    <div>
      <h2>Set Available Times</h2>
      <input
        type="datetime-local"
        onChange={(e) => addTime(e.target.value)}
      />
      <button onClick={saveTimes}>Save</button>
      <ul>
        {availableTimes.map((time, index) => (
          <li key={index}>{time}</li>
        ))}
      </ul>
    </div>
  );
};

export default SetAvailability;
// This component allows the admin to set available times for booking.