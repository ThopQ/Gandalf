let modal = document.getElementsByClassName('modal')[0];
let openBtn = document.getElementsByClassName('modal-opener')[0];
let closeBtn = document.getElementsByClassName('modal-closer')[0];

openBtn.onclick = function () {
    modal.style.display = 'block';
};

closeBtn.onclick = function () {
    modal.style.display = 'none';
};

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};