const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

// Endpoint to get logs
router.get('/history', (req, res) => {
  const logDirectory = path.join(__dirname, '../logs');
  fs.readdir(logDirectory, (err, files) => {
    if (err) {
      return res.status(500).json({ message: 'Error reading logs directory' });
    }

    // Filter .txt files and send them as response
    const logFiles = files.filter(file => file.endsWith('.txt'));

    res.json({ logs: logFiles });
  });
});

module.exports = router;
