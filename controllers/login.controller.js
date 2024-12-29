const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Login = require('../models/login.model'); // Assuming you have a login model for DB operations

const LoginController = {
  /*loginUser: async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Both email and password are required.' });
    }
    try {
      const user = await Login.findUserByEmail(email);

      if (!user) {
        return res.status(404).json({ message: 'User not found.' });
      } */
////////////////////////////////////////////////////
  authenticateUser: async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    try {
      const user = await Signup.findUserByEmail(email);

      if (!user) {
        return res.status(401).json({ message: 'Invalid email or password.' });
      }
///////////////////////////////////////////////////
      const isPasswordValid = await bcrypt.compare(password, user.password);
      
      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid credentials.' });
      }
//////////////////////////////////////////////////////
  const token = jwt.sign(
    { id: user.id, email: user.email },
    'your_secret_key', // Replace with your secure secret key
  );
/////////////////////////////////////////////////////
      // If valid, return success message or a token (JWT for instance)
      res.status(200).json({ message: 'Login successful', user: { id: user.id, username: user.username, email: user.email } });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error during login.' });
    }
  }
};

module.exports = LoginController;
