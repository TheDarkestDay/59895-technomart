
var purchaseBtns = document.querySelectorAll('.buy-btn'),
    modal = document.querySelector('.modal-window'),
    closeModalBtns = document.querySelectorAll('.close-btn');

function toggleModal(evt) {
  evt.preventDefault();
  modal.classList.toggle('opened');
}

purchaseBtns.forEach(function(btn) {
  btn.addEventListener('click', toggleModal);
});

closeModalBtns.forEach(function(btn) {
  btn.addEventListener('click', toggleModal);
});