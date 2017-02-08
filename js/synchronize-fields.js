'use strict';

var synchronizeFields = function (field1, field2, array1, array2, parameter) {
  // Переменные для синхронизации полей формы
  var timeOption = document.querySelector('#time');
  var timeoutOption = document.querySelector('#timeout');
  var type = document.querySelector('#type');
  var roomNumber = document.querySelector('#room_number');
  var capacity = document.querySelector('#capacity');

  // Синхронизация полей форм
  field1.addEventListener('change', function (e) {
    field2[array1] = parameter[array2];
  });

};
