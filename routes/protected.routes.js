const express = require('express');
const router = express.Router();
const authenticateToken = require('../middleware/authenticateToken');

router.get('/energy', authenticateToken, (req, res) => {
  res.json({ message: 'Energy Manager Data' });
});

module.exports = router;
