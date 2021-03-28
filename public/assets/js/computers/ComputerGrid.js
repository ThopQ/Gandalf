export default class ComputerGrid {
	//constructor gets called at class initiation
	constructor() {
		//el property references div-element in html
		this.el = document.getElementById('computer-grid');

		//empty computers collection at startup
		this.computers = [];
	}

	//write html dom elements from fetched data
	render() {
		//empty container-element every time this function gets called
		this.el.innerHTML = '';

		//create card for every computer
		this.computers.forEach((item) => {
			this.generateComputerCards(item);
		});
	}

	//update body with new data
	updateBody(collection) {
		this.computers = collection;

		this.render();
	}

	//gets computer-object as argument and generates a card for every computer
	generateComputerCards(item) {
		let card = document.createElement('div');

		//add class .computer to card
		card.classList.add('computer');

		//innerHTML because it's faster to write and it's already sunday 19 o'clock
		card.innerHTML = `
		<p><b>${item.hostname}</b></p>
		<p>
		<b>IP-Adresse</b><br>
		${item.ipAddress}
		</p>

		<p>
		<b>MAC-Adresse</b><br>
		${item.macAddress}
		</p>

		<p>
		<b>Modell</b><br>
		${item.model}
		</p>

		<p>
		<b>Seriennummer</b><br>
		${item.serialnumber}
		</p>
		`;

		//append generated row to table body
		this.el.appendChild(card);
	}
}
