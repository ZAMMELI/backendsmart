const express = require('express');
const router = express.Router();
const safeController = require('../controllers/safe.controller'); // Import controller

router.get('/video-stream', safeController.getVideoStreamURL);

module.exports = router;
