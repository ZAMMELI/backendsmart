// server.js
const express = require('express');
const cors = require('cors');
const energyRoutes = require('./routes/energy.routes');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Use API Routes
app.use('/api', energyRoutes);

// Server setup
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
