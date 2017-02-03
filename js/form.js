'use strict';
// Переменные для указателей
var pin = document.querySelectorAll('.pin');

// Переменные для диалогового окна
var dialog = document.querySelector('.dialog');
var dialogClose = document.querySelector('.dialog__close');

// Переменные для валидации полей формы
var title = document.querySelector('#title');
var address = document.querySelector('#address');

// Переменные для синхронизации полей формы
var timeOption = document.querySelector('#time');
var timeoutOption = document.querySelector('#timeout');
var type = document.querySelector('#type');
var price = document.querySelector('#price');
var roomNumber = document.querySelector('#room_number');
var capacity = document.querySelector('#capacity');

var disableActive = function () {
  var element = document.querySelector('.pin--active');
  if (element) {
    element.classList.remove('pin--active');
  }
};

// цикл для переключения активного указателя
for (var i = 0; i < pin.length; i++) {
  pin[i].addEventListener('click', function (e) {
    disableActive();
    e.currentTarget.classList.add('pin--active');
    dialog.classList.remove('invisible');
  });
}

// закрытие диалогового окна и удаление активного указателя
dialogClose.addEventListener('click', function (event) {
  event.preventDefault();
  disableActive();
  dialog.classList.add('invisible');
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

roomNumber.addEventListener('change', function (event) {
  capacity.value = event.target.value;
});

capacity.addEventListener('change', function (event) {
  roomNumber.value = event.target.value;
});

type.addEventListener('change', function (event) {
  price.value = event.target.value;
});
