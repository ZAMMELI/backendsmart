// energy.model.js
const db = require('../db.config');

const Energy = {};

// Method to create new energy data
Energy.create = (energyData, callback) => {
  const query = 'INSERT INTO energy (location, consommation) VALUES (?, ?)';
  db.query(query, [energyData.location, energyData.consommation], (err, result) => {
    if (err) return callback(err, null);
    callback(null, result);
  });
};

// Method to get all energy data
Energy.getAll = (callback) => {
  const query = 'SELECT * FROM energy';
  db.query(query, (err, result) => {
    if (err) return callback(err, null);
    callback(null, result);
  });
};

module.exports = Energy;
