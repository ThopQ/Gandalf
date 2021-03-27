class CustomerTable {
	//constructor gets called at class initiation
	constructor() {
		//el property references div-element in html
		this.el = document.getElementById('customer-table');

		//empty array for customer objects
		this.customers = [];

		//call fetchCustomers at class initiation
		this.fetchCustomers();
	}

	//fetches customers from express endpoint
	async fetchCustomers() {
		await fetch('/api/customers')
			.then((res) => res.json())
			.then((data) => (this.customers = data));

		this.render();
	}

	//write html dom elements from fetched data
	render() {
		this.generateTableHeader();

		//empty tableBody everytime the function gets called
		this.tableBody.innerHTML = '';

		//create table row for every customer inside customers-array
		this.customers.forEach((item) => {
			this.generateTableBody(item);
		});
	}

	//create static table header
	generateTableHeader() {
		this.table = document.createElement('table');
		this.tableHeader = document.createElement('thead');
		this.tableHeadRow = document.createElement('tr');
		this.nameHeaderCol = document.createElement('th');
		this.counterHeaderCol = document.createElement('th');
		this.tableBody = document.createElement('tbody');

		this.nameHeaderCol.innerText = 'Name';
		this.counterHeaderCol.innerText = 'Anzahl Geräte';

		this.el.appendChild(this.table);
		this.table.append(this.tableHeader, this.tableBody);

		this.tableHeader.appendChild(this.tableHeadRow);
		this.tableHeadRow.append(this.nameHeaderCol, this.counterHeaderCol);
	}

	//gets customer object as argument and creates a table-row for said object
	generateTableBody(item) {
		let customerRow = document.createElement('tr');
		let customerNameCol = document.createElement('td');
		let customerLink = document.createElement('a');
		let customerCounterCol = document.createElement('td');

		//create dynamic link with customer id
		customerLink.innerText = item.name;
		customerLink.href = `/customers/${item.id}/computers`;

		customerNameCol.appendChild(customerLink);
		customerCounterCol.innerText = item.clients.length;

		//append generated columns to empty row
		customerRow.append(customerNameCol, customerCounterCol);

		//append generated row to table body
		this.tableBody.appendChild(customerRow);
	}
}

//initiate class
let customerTable = new CustomerTable();
