const express = require('express');
const router = express.Router();
const Energy = require('../models/energy.model');

// POST endpoint to insert energy data into the database
router.post('/energy', (req, res) => {
  const { location, consommation } = req.body;

  if (!location || !consommation) {
    return res.status(400).json({ message: "Location and consommation are required" });
  }

  const energyData = { location, consommation };
  Energy.create(energyData, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Error inserting data' });
    }

    res.status(200).json({ message: 'Energy data inserted successfully', data: result });
  });
});

// GET endpoint to fetch all energy data
router.get('/energy', (req, res) => {
  Energy.getAll((err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Error fetching data' });
    }

    res.status(200).json({ data });
  });
});

module.exports = router;
