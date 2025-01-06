const mysql = require('mysql');
const db = require('../db.config');  // Make sure the db.config is correct

// Function to get air data
const getAirData = (req, res) => {
  const query = 'SELECT * FROM air';

  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching air data:', err);
      return res.status(500).json({ message: 'Server error' });
    }

    res.status(200).json({ airData: results });  // Send data as 'airData'
  });
};

module.exports = { getAirData };
