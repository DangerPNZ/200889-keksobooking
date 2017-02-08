'use strict';

// Переменные для синхронизации полей формы
var timeOption = document.querySelector('#time');
var timeoutOption = document.querySelector('#timeout');
var type = document.querySelector('#type');
var roomNumber = document.querySelector('#room_number');
var capacity = document.querySelector('#capacity');

// Переменные для валидации полей формы
var title = document.querySelector('#title');
var price = document.querySelector('#price');
var address = document.querySelector('#address');

window.initializePins();

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
timeOption.addEventListener('change', function (e) {
  timeoutOption.value = e.target.value;
});

timeoutOption.addEventListener('change', function (e) {
  timeOption.value = e.target.value;
});

roomNumber.addEventListener('change', function (e) {
  capacity.value = e.target.value;
});

capacity.addEventListener('change', function (e) {
  roomNumber.value = e.target.value;
});

type.addEventListener('change', function (e) {
  price.value = e.target.value;
});
