const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = './tools/logs'; // Path to the logs directory

// Route to get the list of log files
router.get('/api/history', (req, res) => {
  fs.readdir(path, (err, files) => {
    if (err) {
      return res.status(500).json({ message: 'Error reading log directory.' });
    }
    res.json({ logs: files }); // Return the list of log file names
  });
});

// Route to get the content of a specific log file
router.get('/api/history-log/:fileName', (req, res) => {
  const fileName = req.params.fileName;
  const filePath = `${path}/${fileName}`;

  // Read the content of the log file
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Error reading the log file.' });
    }
    res.json({ content: data }); // Send the content of the log file to the frontend
  });
});

module.exports = router;
