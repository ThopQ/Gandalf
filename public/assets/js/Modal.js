//get variables from elements with html-classes for multi-purpose
let modal = document.getElementsByClassName('modal')[0];
let openBtn = document.getElementsByClassName('modal-opener')[0];
let closeBtn = document.getElementsByClassName('modal-closer')[0];

//declares the display-style of modal as block on click event
openBtn.onclick = function () {
	modal.style.display = 'block';
};

//declares the display-style of modal as none on click event
closeBtn.onclick = function () {
	modal.style.display = 'none';
};

//click anywhere outside of modal to close it
window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = 'none';
	}
};
