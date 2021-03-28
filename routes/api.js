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

//get all computers for single customer
router.get('/customers/:id', (req, res) => {
	//get customer-id from request-parameters
	const customerId = req.params.id;

	//find specific customer by id
	const customers = db.customers.find({ _id: customerId });

	//if customer was found, return the clients
	if (customers.length) {
		res.json(customers[0].clients);
	} else {
		res.json({ message: `Kein Kunde mit der ID: "${customerId}" gefunden` });
	}
});

//post customer as json-object to store into database
router.post('/customers', (req, res) => {
	//get customer-object from request
	const item = req.body;

	// add new item to db
	db.customers.save(item);

	// return updated list
	res.json(db.customers.find());
});

//update customer with new computer
router.put('/customers/:id', (req, res) => {
	//get customer-id from request-parameters
	const customerId = req.params.id;

	//get computer-object from request
	const computer = req.body;

	//get customer from database by id and push new computer into clients of customer
	const updatingCustomer = db.customers.find({ _id: customerId });
	updatingCustomer[0].clients.push(computer);

	//update old customer with new customer in database
	db.customers.update({ _id: customerId }, updatingCustomer[0]);

	//respond with updated customer-array parsed to json
	res.json(updatingCustomer);
});

module.exports = router;
