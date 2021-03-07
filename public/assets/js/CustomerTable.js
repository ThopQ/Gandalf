//const axios = require('axios');

class CustomerTable {
	constructor() {
		this.state = {
			mockData: [
				{
					id: 1,
					name: 'Thomas',
					clients: [
						{ hostname: 'thomascln01', ipAddress: '192.168.1.21' },
						{ hostname: 'thomascln02', ipAddress: '192.168.1.22' },
						{ hostname: 'thomascln03', ipAddress: '192.168.1.23' },
					],
				},
				{
					id: 2,
					name: 'Elisabeth',
					clients: [
						{ hostname: 'lisicln01', ipAddress: '192.168.2.21' },
						{ hostname: 'lisicln02', ipAddress: '192.168.2.22' },
					],
				},
				{
					id: 3,
					name: 'Reto',
					clients: [
						{ hostname: 'retocln01', ipAddress: '192.168.3.21' },
						{ hostname: 'retocln01', ipAddress: '192.168.3.22' },
					],
				},
			],
		};

		this.render();
	}

	render() {
		this.generateTableHeader();
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
		let customerCounterCol = document.createElement('td');

		customerNameCol.innerText = item.name;
		customerCounterCol.innerText = item.clients.length;

		customerRow.append(customerNameCol, customerCounterCol);

		this.tableBody.appendChild(customerRow);
	}
}

let customerTable = new CustomerTable();
