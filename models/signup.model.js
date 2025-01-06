const db = require('../db.config');

const Signup = {
  createUser: (userData, callback) => {
    const query = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
    db.query(query, [userData.username, userData.email, userData.password], callback);
  },

  // Check if email exists
  getUserByEmail: (email) => {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM users WHERE email = ?';
      db.query(query, [email], (err, results) => {
        if (err) reject(err);
        resolve(results.length > 0 ? results[0] : null);
      });
    });
  },
};

module.exports = Signup;
