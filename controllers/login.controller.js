const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Signup = require('../models/signup.model'); // Assuming you use this for DB operations

const LoginController = {
  authenticateUser: async (req, res) => {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    try {
      // Check if user exists
      const user = await Signup.findUserByEmail(email);

      if (!user) {
        return res.status(401).json({ message: 'Invalid email or password.' });
      }

      // Verify password
      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid credentials.' });
      }

      // Generate JWT token
      const token = jwt.sign(
        { id: user.id, email: user.email },
        'your_secret_key', // Replace with your secure secret key
        //{ expiresIn: '1h' } // Token validity
      );

      // Return token and user info
      res.status(200).json({
        message: 'Login successful',
        token,
        user: { id: user.id, username: user.username, email: user.email },
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error during login.' });
    }
  },
};

module.exports = LoginController;
