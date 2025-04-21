// backend/controllers/availabilityController.js

const db = require('../db/db');

const addAvailability = async (req, res) => {
  const { time } = req.body;
  await db.query('INSERT INTO availability (time) VALUES ($1)', [time]);
  res.json({ message: 'Time slot added' });
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

module.exports = { addAvailability, removeAvailability, getAvailability };
