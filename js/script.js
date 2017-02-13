
var purchaseBtns = document.querySelectorAll('.buy-btn'),
    modal = document.querySelector('.modal-window'),
    closeModalBtns = document.querySelectorAll('.close-btn'),
    writeUs = document.querySelector('.contacts .btn');

function toggleModal(evt) {
  evt.preventDefault();
  modal.classList.toggle('opened');
}

if (writeUs) writeUs.addEventListener('click', toggleModal);

purchaseBtns.forEach(function(btn) {
  btn.addEventListener('click', toggleModal);
});

closeModalBtns.forEach(function(btn) {
  btn.addEventListener('click', toggleModal);
});