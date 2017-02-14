
var purchaseBtns = document.querySelectorAll('.buy-btn'),
    modal = document.querySelector('.modal-window'),
    map = document.querySelector('.map'),
    closeModalBtns = document.querySelectorAll('.close-btn'),
    writeUs = document.querySelector('.contacts .btn'),
    serviceSlides = document.querySelectorAll('.services-slide'),
    serviceTriggers = document.querySelectorAll('.slider-menu button'),
    mapLink = document.querySelector('.contacts-map-link');

function toggleModal(evt) {
  evt.preventDefault();
  if (this.classList.contains('close-map')) {
    map.classList.remove('opened');
    return ;
  } 
  modal.classList.toggle('opened');
}

function showMap(evt) {
  evt.preventDefault();
  map.classList.add('opened');
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

if (writeUs) writeUs.addEventListener('click', toggleModal);

if (mapLink) mapLink.addEventListener('click', showMap);

if (serviceTriggers.length) {
  Array.prototype.forEach.call(serviceTriggers, function(btn) {
    btn.addEventListener('click', changeSlide);
  });
}

Array.prototype.forEach.call(purchaseBtns, function(btn) {
  btn.addEventListener('click', toggleModal);
});

Array.prototype.forEach.call(closeModalBtns, function(btn) {
  btn.addEventListener('click', toggleModal);
});