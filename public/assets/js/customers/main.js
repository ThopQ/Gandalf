//import CustomerTable class
import CustomerTable from './CustomerTable.js';

//URL for api-endpoints
const URL = '/api/customers';

//initiate customerTable
const customerTable = new CustomerTable();

//declare variables for form handling
let createCustomerForm = document.getElementById('create-customer-form');
let customerNameInput = document.getElementById('customer-name-input');

//fetches customers asynchronously from database and updates table-body
fetchCustomers().then((customers) => {
	customerTable.updateBody(customers);
});

//fetches customers from database and returns as javascript array
async function fetchCustomers() {
	const response = await fetch(URL);
	return response.json();
}

//sends new customer to api-endpoint in json-format
async function storeCustomer(customer) {
	await fetch(URL, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(customer),
	})
		//gets response and parses it from json to javascript object
		.then((response) => response.json())

		//update table-body with responded data and reset value of input
		.then((data) => {
			customerTable.updateBody(data);
			customerNameInput.value = '';
		})
		//logs possible errors to console
		.catch((error) => {
			console.error('Error:', error);
		});
}
//event handler for customer form creates new customers object and sends it to api-endpoint
createCustomerForm.addEventListener('submit', (event) => {
	const newCustomer = { name: customerNameInput.value, clients: [] };

	storeCustomer(newCustomer);

	//required so form does not reload the page
	event.preventDefault();
});
