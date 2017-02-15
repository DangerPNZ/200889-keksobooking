'use strict';

(function () {
// Переменные для валидации полей формы
  var title = document.querySelector('#title');
  var price = document.querySelector('#price');
  var address = document.querySelector('#address');

// Переменные для синхронизации полей формы
  var timeOption = document.querySelector('#time');
  var timeoutOption = document.querySelector('#timeout');
  var type = document.querySelector('#type');
  var roomNumber = document.querySelector('#room_number');
  var capacity = document.querySelector('#capacity');

// Вызываем функцию управления указателями pin и всеми связанными с неми операциями
  window.initializePins();

// Валидация полей формы
  title.required = true;
  title.minLength = '30';
  title.maxLength = '100';

  window.price.required = true;
  window.price.type = 'number';
  window.price.min = '1000';
  window.price.max = '1000000';

  address.required = true;

// Синхронизация полей форм
  window.synchronizeFields(timeOption, timeoutOption, ['12', '13', '14'], ['12', '13', '14'], 'value');

  window.synchronizeFields(roomNumber, capacity, ['1', '2', '2'], ['1', '2', '2'], 'value');

  window.synchronizeFields(type, price, ['1000', '0', '10000'], ['1000', '0', '10000'], 'min');

  window.synchronizeFields(type, price, ['1000', '0', '10000'], ['1000', '0', '10000'], 'value');
})();
