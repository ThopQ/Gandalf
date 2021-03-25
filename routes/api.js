//setup router as mini-app in express
const express = require("express");
const router = express.Router();

//connect customers collection
const db = require("diskdb");
db.connect("./data", ["customers"]);

//get customers route for showing all customers after login
router.get("/customers", (req, res) => {
  res.json(db.customers.find());
});

//get customers route for showing all customers after login
router.post("/customers", (req, res) => {
  res.json(db.customers.find());
});

module.exports = router;
