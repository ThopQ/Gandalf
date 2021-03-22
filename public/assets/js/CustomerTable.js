//const axios = require('axios');

class CustomerTable {
	constructor() {
		// create state property on initializing with mockdata to populate table
		this.state = {
			mockData: [
				{
					id: 1,
					name: 'netivity GmbH',
					clients: [
						{ hostname: 'thomascln01', ipAddress: '192.168.1.21' },
						{ hostname: 'thomascln02', ipAddress: '192.168.1.22' },
						{ hostname: 'thomascln03', ipAddress: '192.168.1.23' },
					],
				},
				{
					id: 2,
					name: 'TEKO Olten',
					clients: [
						{ hostname: 'lisicln01', ipAddress: '192.168.2.21' },
						{ hostname: 'lisicln02', ipAddress: '192.168.2.22' },
					],
				},
				{
					id: 3,
					name: 'redIT',
					clients: [
						{ hostname: 'retocln01', ipAddress: '192.168.3.21' },
						{ hostname: 'retocln01', ipAddress: '192.168.3.22' },
					],
				},
			],
		};

		//run render function on class initialization
		this.render();
	}

	render() {
		this.generateTableHeader();
		//empty tableBody everytime the function gets called
		this.tableBody.innerHTML = '';

		this.state.mockData.forEach((item) => {
			this.generateTableBody(item);
		});
	}

	generateTableHeader() {
		this.el = document.getElementById('customer-table');
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

	generateTableBody(item) {
		let customerRow = document.createElement('tr');
		let customerNameCol = document.createElement('td');
		let customerLink = document.createElement('a');
		let customerCounterCol = document.createElement('td');

		customerLink.innerText = item.name;
		customerLink.href = `/customers/${item.id}/computers`;

		customerNameCol.appendChild(customerLink);
		customerCounterCol.innerText = item.clients.length;

		customerRow.append(customerNameCol, customerCounterCol);

		this.tableBody.appendChild(customerRow);
	}
}

let customerTable = new CustomerTable();
