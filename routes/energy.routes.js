const express = require('express');
const router = express.Router();
const { getEnergyData } = require('../controllers/energy.controller');
const authenticateToken = require('../middleware/authenticateToken');

// Route for energy data
router.get('/energy', authenticateToken, getEnergyData);

module.exports = router;
