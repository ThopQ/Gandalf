//import ComputerGrid class
import ComputerGrid from './ComputerGrid.js';

//I know this is not a great solution but hey, it works
const customerId = document.getElementById('customer-id').value;

//URL for api-endpoints
const URL = `/api/customers/${customerId}`;

//initiate ComputerGrid
const computerGrid = new ComputerGrid();

//declare variables for form handling
let createComputerForm = document.getElementById('create-computer-form');
let hostnameInput = document.getElementById('hostname-input');
let ipAddressInput = document.getElementById('ip-address-input');
let macAddressInput = document.getElementById('mac-address-input');
let modelInput = document.getElementById('model-input');
let serialnumberInput = document.getElementById('serialnumber-input');

//fetches all clients of customer and generates the grid-body
fetchComputers().then((computers) => {
	computerGrid.updateBody(computers);
});

//fetches single customer by id from endpoint
async function fetchComputers() {
	const response = await fetch(URL);
	return response.json();
}

//updates existing customer with additional computer
async function storeComputer(computer) {
	await fetch(URL, {
		//method PUT for update endpoint
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(computer),
	})
		//gets response and parses it from json to javascript object
		.then((response) => response.json())

		//update grid-body with responded data and reset value of input
		.then((data) => {
			computerGrid.updateBody(data[0].clients);

			//empties all form fields as soon as data is fetched
			emptyFormFields();
		})
		//logs possible errors to console
		.catch((error) => {
			console.error('Error:', error);
		});
}

//empties all form fields back to initial value
function emptyFormFields() {
	hostnameInput.value = '';
	ipAddressInput.value = '';
	macAddressInput.value = '';
	modelInput.value = '';
	serialnumberInput.value = '';
}

//event handler for computer form. Creates new computer object and sends it to endpoint
createComputerForm.addEventListener('submit', (event) => {
	const newComputer = {
		hostname: hostnameInput.value,
		ipAddress: ipAddressInput.value,
		macAddress: macAddressInput.value,
		model: modelInput.value,
		serialnumber: serialnumberInput.value,
	};

	storeComputer(newComputer);

	//required so form does not reload the page
	event.preventDefault();
});
