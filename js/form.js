'use strict';
// Переменные для указателей
var pin = document.querySelectorAll('.pin');
var currentActive = document.querySelector('.pin--active');

// Переменные для диалогового окна
var dialog = document.querySelector('.dialog');
var dialogClose = document.querySelector('.dialog__close');
var invisible;

// Переменные для валидации полей формы
var title = document.querySelector('#title');
var price = document.querySelector('#price');
var address = document.querySelector('#address');

// Переменные для синхронизации полей формы
var timeOption = document.querySelectorAll('#time option');
var timeoutOption = document.querySelectorAll('#timeout option');

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
for (var e = 0; e < timeOption.length; e++) {
  timeOption[e].value = timeOption[e].innerHTML;
}

for (var u = 0; u < timeoutOption.length; u++) {
  timeoutOption[u].value = timeoutOption[u].innerHTML;
}

if (timeOption[1].selected = true) {
  timeoutOption[1].selected = true;
}
