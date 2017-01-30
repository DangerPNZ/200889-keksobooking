'use strict';
var pin = document.querySelectorAll('.pin');

for (var i = 0; i < pin.length; i++) {
  pin[i].classList.remove('pin--active');
  pin[i].addEventListener('click', function () {
    pin[i].classList.add('pin--active');
  });
}
