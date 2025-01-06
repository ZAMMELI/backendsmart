// db.config.js
const mysql = require('mysql');

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "", // Your MySQL password
  database: "smart_building_db" // Your database name
});

db.connect((err) => {
  if (err) {
    console.error('Database connection error:', err);
    process.exit(1); // Exit process if database connection fails
  }
  console.log('Connected to the database.');
});

module.exports = db;
