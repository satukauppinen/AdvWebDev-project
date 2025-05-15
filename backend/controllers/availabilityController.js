// backend/controllers/availabilityController.js
//This file is responsible for handling the availability functionality of the admin.
const db = require('../db/db');

const addAvailability = async (req, res) => {
  const { date, time, service } = req.body;

  if (!date || !time || !service) {
      return res.status(400).json({ error: "Missing required fields" });
  }

  try {
      const result = await db.query(
          "INSERT INTO availability (date, time, service) VALUES ($1, $2, $3) RETURNING *",
          [date, time, service]
      );
      res.status(201).json(result.rows[0]);
  } catch (error) {
      res.status(500).json({ error: "Database error" });
  }
};

const removeAvailability = async (req, res) => {
  const { time } = req.body;
  await db.query('DELETE FROM availability WHERE time = $1', [time]);
  res.json({ message: 'Time slot removed' });
};

const getAvailability = async (req, res) => {
  const result = await db.query('SELECT * FROM availability ORDER BY time');
  res.json(result.rows);
};

const setAvailability = async (req, res) => {
  const { time, service } = req.body; // ✅ Match the actual column names

  if (!time || !service) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    await db.query(
      "INSERT INTO availability (time, service) VALUES ($1, $2) RETURNING *",
      [time, service]
    );

    res.status(201).json({ message: "Availability set successfully" });
  } catch (error) {
    console.error("Error saving availability:", error);
    res.status(500).json({ error: "Database error" });
  }
};


module.exports = { addAvailability, removeAvailability, getAvailability, setAvailability };

