const mysql = require('mysql');
const db = require('../db.config');  // Make sure the db.config is correct


const getVideoStreamURL = (req, res) => {
  const videoStreamURL = 'http://your-embedded-board-url/live-video'; // Replace with the real video stream URL
  res.status(200).json({ videoStreamURL });
};

module.exports = { getVideoStreamURL };

