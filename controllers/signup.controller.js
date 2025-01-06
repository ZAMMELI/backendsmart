const { logToFile } = require('../tools/logger'); // Import the logger utility
const bcrypt = require('bcrypt');
const Signup = require('../models/signup.model');

const SignupController = {
  registerUser: async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const userData = { username, email, password: hashedPassword };

      Signup.createUser(userData, (err, result) => {
        if (err) {
          console.error(err);
          logToFile(`Signup failed for ${email}: ${err.message}`);  // Log the signup failure
          return res.status(500).json({ message: 'Error registering user.' });
        }

        logToFile(`User successfully registered: ${email}`);  // Log the successful signup
        res.status(201).json({ message: 'User registered successfully.' });
      });
    } catch (err) {
      console.error(err);
      logToFile(`Error processing signup for user with email: ${email}`);  // Log any unexpected error
      res.status(500).json({ message: 'Error processing signup.' });
    }
  },
};

module.exports = SignupController;
