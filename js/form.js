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
// Коллбек обносторонней синхронизации по значению value
  var syncValues = function (element, value) {
    element.value = value;
  };
// Коллбек односторонней синхронизации по значению min
  var syncValueAndMin = function (element, value) {
    element.min = value;
  };

// Вызываем функцию управления указателями pin и всеми связанными с неми операциями
  window.initializePins();

// Вызываем функцию скрытия.показа диалогового окна
  window.showCard();

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
  window.synchronizeFields(timeOption, timeoutOption, ['12', '13', '14'], ['12', '13', '14'], syncValues);
  window.synchronizeFields(timeoutOption, timeOption, ['12', '13', '14'], ['12', '13', '14'], syncValues);
  window.synchronizeFields(roomNumber, capacity, ['1', '2', '2'], ['1', '2', '2'], syncValues);
  window.synchronizeFields(capacity, roomNumber, ['1', '2', '2'], ['1', '2', '2'], syncValues);
  window.synchronizeFields(type, price, ['1000', '0', '10000'], ['1000', '0', '10000'], syncValues);
  window.synchronizeFields(type, price, ['1000', '0', '10000'], ['1000', '0', '10000'], syncValueAndMin);

})();
