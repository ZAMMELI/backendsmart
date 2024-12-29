// server.js
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const energyRoutes = require('./routes/energy.routes'); 
const signupRoutes = require('./routes/signup.routes');
const loginRoutes = require('./routes/login.routes');


const app = express();

app.use(cors());
app.use(express.json()); // JSON bodies

// Use the routes
app.use('/api', energyRoutes);  

// Use signup routes
app.use('/api', signupRoutes);
// Use login routes
app.use('/api', loginRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
