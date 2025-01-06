const mysql = require('mysql');
const db = require('../db.config'); // Adjust according to your setup


// Function to get energy data
const getEnergyData = (req, res) => {
  const query = 'SELECT * FROM energy';

  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching energy data:', err);
      return res.status(500).json({ message: 'Server error' });
    }

    res.status(200).json({ energyData: results });
  });
};

module.exports = { getEnergyData };