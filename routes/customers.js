//setup router as mini-app in express
const express = require("express");
const router = express.Router();

//get customers route for showing all customers after login
router.get("/", (req, res) => {
  res.render("customers", { layout: "app.hbs" });
});

//get computers route with id parameter from customer
router.get("/:id/computers", (req, res) => {
  res.send(`Test ID: ${req.params.id}`);
});

module.exports = router;
