const fs = require('fs');
const path = require('path');

const logToFile = (message) => {
  const logDirectory = path.join(__dirname, 'logs'); // Logs folder
  const currentDate = new Date().toISOString().split('T')[0]; // Get current date in YYYY-MM-DD format
  const logFileName = path.join(logDirectory, `${currentDate}.txt`); // Log file name based on date

  // Ensure the logs folder exists, create it if it doesn't
  if (!fs.existsSync(logDirectory)) {
    fs.mkdirSync(logDirectory);
  }

  // Append the log message to the file
  fs.appendFile(logFileName, message + '\n', (err) => {
    if (err) {
      console.error('Error writing to log file:', err);
    } else {
      console.log('Log entry added to file:', logFileName);
    }
  });
};

module.exports = { logToFile };
