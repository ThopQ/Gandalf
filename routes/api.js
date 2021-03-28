//setup router as mini-app in express
const express = require('express');
const router = express.Router();

//require database and connect customers collection
const db = require('diskdb');
db.connect('./data', ['customers']);

//get customers route for showing all customers after login
router.get('/customers', (req, res) => {
	res.json(db.customers.find());
});

//post customer as json-object to store into database
router.post('/customers', (req, res) => {
	const item = req.body;
	console.log('Adding new item: ', item);

	// add new item to db
	db.customers.save(item);

	// return updated list
	res.json(db.customers.find());
});

module.exports = router;
