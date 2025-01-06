const express = require('express');
const cors = require('cors');
require('dotenv').config();
const energyRoutes = require('./routes/energy.routes');
const signupRoutes = require('./routes/signup.routes');
const loginRoutes = require('./routes/login.routes');
const airRoutes = require('./routes/air.routes');
const safeRoutes = require('./routes/safe.routes');
const historyRoutes = require('./routes/history.routes'); // Make sure this is properly imported

const app = express();

// Middleware setup
app.use(cors());
app.use(express.json()); // For parsing JSON bodies

// Use routes for various functionalities
app.use('/api', energyRoutes); 
app.use('/api', signupRoutes);
app.use('/api', loginRoutes);
app.use('/api', airRoutes);
app.use('/api', safeRoutes);
app.use('/api', historyRoutes);  // Attach history routes

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
