const db = require('../db.config');

const Signup = {
  createUser: (userData, callback) => {
    const { username, email, password } = userData;
    const query = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
    db.query(query, [username, email, password], callback);
  },

  // Add a method to find a user by email
  findUserByEmail: (email) => {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
        if (err) return reject(err);
        resolve(results[0]);  // Assuming the first result is the user
      });
    });
  },
  
};

module.exports = Signup;
