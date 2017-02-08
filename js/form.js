'use strict';

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
