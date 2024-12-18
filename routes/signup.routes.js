const express = require('express');
const router = express.Router();
const SignupController = require('../controllers/signup.controller');

router.post('/signup', SignupController.registerUser);

module.exports = router;
