const db = require("../models/energy.model");

exports.insertConsommation = (req, res) => {
  const { location, consommation } = req.body;

  if (!location || !consommation) {
    return res.status(400).json({ message: "Location and consommation are required" });
  }

  const query = "INSERT INTO energy (location, consommation) VALUES (?, ?)";
  db.query(query, [location, consommation], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Error inserting data" });
    }
    res.status(200).json({ message: "Data inserted successfully", data: result });
  });
};

exports.getConsommation = (req, res) => {
  const query = "SELECT * FROM energy";
  db.query(query, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Error fetching data" });
    }
    res.status(200).json({ data: results });
  });
};
