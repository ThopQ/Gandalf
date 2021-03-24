//setup router as mini-app in express
const express = require('express');
const router = express.Router();

//connect customers collection
const db = require('diskdb');
db.connect('./data', ['customers']);

//get customers route for showing all customers after login
router.get('/', function (req, res) {
	res.render('customers', { layout: 'app.hbs' });
});

//post customer route to add customer to database
router.post('/', (req, res) => {
	const customer = req.body.customer;

	console.log('Adding new item: ', customer);
	db.customers.save(customer);
});

//get computers route with id parameter from customer
router.get('/:id/computers', function (req, res) {
	res.send(`Test ID: ${req.params.id}`);
});

module.exports = router;
