const db = require('../db.config');

const Login = {
  findUserByEmail: (email) => {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
        if (err) return reject(err);
        resolve(results[0]); // Return the first user (or null if not found)
      });
    });
  }
};

module.exports = Login;
