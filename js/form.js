'use strict';

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

window.synchronizeFields(timeOption, timeoutOption, 'value');

window.synchronizeFields(timeoutOption, timeOption, 'value');

window.synchronizeFields(roomNumber, capacity, 'value');

window.synchronizeFields(capacity, roomNumber, 'value');

window.synchronizeFields(type, price, 'min');

window.synchronizeFields(type, price, 'value');
