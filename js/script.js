
var purchaseBtns = document.querySelectorAll('.buy-btn'),
    closeModalBtns = document.querySelectorAll('.close-btn'),
    writeUsBtn = document.querySelector('.contacts .btn'),
    serviceSlides = document.querySelectorAll('.services-slide'),
    serviceTriggers = document.querySelectorAll('.slider-menu button'),
    mapLink = document.querySelector('.contacts-map-link'),
    currentModal = false,
    modals = {
      'write_us': document.querySelector('.write-us'),
      'map': document.querySelector('.map'),
      'add_to_cart': document.querySelector('.added-to-cart')
    };

function openModal(evt) {
  evt.preventDefault();
  if (currentModal && currentModal.classList.contains('opened')) currentModal.classList.remove('opened');
  currentModal = modals[this.dataset.modal];
  currentModal.classList.add('opened');
}

function closeModal(evt) {
  evt.preventDefault();
  currentModal.classList.remove('opened');
  currentModal = false
}

function changeSlide() {
  Array.prototype.forEach.call(serviceSlides, function(slide) {
    slide.classList.remove('current-services-slide');
  });

  Array.prototype.forEach.call(serviceTriggers, function(btn) {
    btn.classList.remove('active');
  });
  this.classList.add('active');
  serviceSlides[parseInt(this.dataset.index)].classList.add('current-services-slide');
}

if (writeUsBtn) writeUsBtn.addEventListener('click', openModal);

if (mapLink) mapLink.addEventListener('click', openModal);

if (serviceTriggers.length) {
  Array.prototype.forEach.call(serviceTriggers, function(btn) {
    btn.addEventListener('click', changeSlide);
  });
}

Array.prototype.forEach.call(purchaseBtns, function(btn) {
  btn.addEventListener('click', openModal);
});

Array.prototype.forEach.call(closeModalBtns, function(btn) {
  btn.addEventListener('click', closeModal);
});