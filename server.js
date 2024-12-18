// server.js
const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth.routes'); // Import the auth routes
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json()); // Middleware to parse JSON bodies

// Use /api prefix for your routes
app.use('/api', authRoutes);  // This connects /api/signin to the signin route

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
