'use strict';
// Переменные для указателей
var pin = document.querySelectorAll('.pin');
var currentActive = document.querySelector('.pin--active');

// Переменные для диалогового окна
var dialog = document.querySelector('.dialog');
var dialogClose = document.querySelector('.dialog__close');

// Переменные для валидации полей формы
var title = document.querySelector('#title');
var price = document.querySelector('#price');
var address = document.querySelector('#address');

// Переменные для синхронизации полей формы
var timeOption = document.querySelector('#time');
var timeoutOption = document.querySelector('#timeout');
var type = document.querySelector('#type');
var price = document.querySelector('#price');
var roomNumber = document.querySelector('#room_number');
var capacity = document.querySelector('#capacity');

// цикл для переключения активного указателя
for (var i = 0; i < pin.length; i++) {
  (function (n) {
    pin[n].addEventListener('click', function () {
      currentActive.classList.remove('pin--active');
      currentActive = pin[n];
      pin[n].classList.add('pin--active');
      // уточнить корректность решения задачи
      dialog.style.display = 'block';
    });
  })(i);
}

// закрытие диалогового окна и удаление активного указателя
dialogClose.addEventListener('click', function (event) {
  // уточнить корректность решения задачи
  event.preventDefault();
  currentActive.classList.remove('pin--active');
  dialog.style.display = 'none';
});

// Валидация полей формы
title.required = true;
title.minLength = '30';
title.maxLength = '100';

price.required = true;
price.type = 'number';
price.min = '1000';
price.max = '1000000';

address.required = true;

// Синхронизация полей форм

timeOption.addEventListener('change', function (event) {
  timeoutOption.value = event.target.value;
});

timeoutOption.addEventListener('change', function (event) {
  timeOption.value = event.target.value;
});

type.addEventListener('change', function (event) {
  if (price.value === 0) {
    event.target.value = '2';
  } else
  if (price.value >= 1000) {
    event.target.value = '1';
  } else
  if (price.value >= 10000) {
    event.target.value = '3';
  }
});

roomNumber.addEventListener('change', function (event) {
  capacity.value = event.target.value;
});

capacity.addEventListener('change', function (event) {
  roomNumber.value = event.target.value;
});
