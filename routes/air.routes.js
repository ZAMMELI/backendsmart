// air.routes.js
const express = require('express');
const router = express.Router();
const { getAirData } = require('../controllers/air.controller'); // Import the controller function

// Define the route to get air data
router.get('/air', getAirData);  // You can add authentication middleware here if necessary

module.exports = router;
