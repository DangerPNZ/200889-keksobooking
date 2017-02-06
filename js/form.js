'use strict';

var tokyoMap = document.querySelector('.tokyo__pin-map');
// Переменные для указателей
var pin = document.querySelectorAll('.pin');

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
var roomNumber = document.querySelector('#room_number');
var capacity = document.querySelector('#capacity');

// Константы для keyCode
var ENTER_KEY_CODE = 13;
var ESCAPE_KEY_CODE = 27;

// DRY или определение функций для дублируемого кода

// Функции для проверки соответствия keyCode
var deactivatingEvent = function (event) {
  return event.keyCode && event.keyCode === ESCAPE_KEY_CODE;
};
var activatingEvent = function (event) {
  return event.keyCode && event.keyCode === ENTER_KEY_CODE;
};
// функция, находящая элемент с классом pin--active, и, если элемент с таким классом существует, удаляет этот класс у найденого элемента
var disableActivePin = function () {
  var element = document.querySelector('.pin--active');
  if (element) {
    element.classList.remove('pin--active');
  }
};

// функция для определения активности pin и присвоения соответствующего статуса aria-pressed для каждого указателя
var determineAriaPressed = function (element) {
  if (element.classList.contains('pin--active')) {
    element.setAttribute('aria-pressed', true);
  } else {
    element.setAttribute('aria-pressed', false);
  }
};

// aункция для управления отображения показа диалогового окна
var setDialogClassInvisible = function (action) {
  dialog.classList[action]('invisible');
};

// функция для переключения aria-pressed в завсимости от активности указателя pin
var toggleAriaPressed = function () {
  for (var i = 0; i < pin.length; i++) {
    determineAriaPressed(pin[i]);
  }
};

// Вызываем функцию для определения наличия активного указателя на странице и присвоения каждому соответствующего статуса aria-pressed
toggleAriaPressed();

// закрытие диалогового окна и удаление активного указателя
var deactivateDialogAndPin = function () {
  event.preventDefault();
  disableActivePin();
  setDialogClassInvisible('add');
  // динамическое изменение статуса активного (нажатого) указателя (aria-pressed) при удалении всех активных указателей
  toggleAriaPressed();
};

var activatePin = function () {
  if (event.target.className === 'pin') {
    disableActivePin();
    event.target.classList.add('pin--active');
    setDialogClassInvisible('remove');
    // динамическое переключение статуса (aria-pressed) при переключении активного указателя
    toggleAriaPressed();
  }
};

/* если у модального окна отсутствует класс invisible (соответственно, оно открыто),
 реализовываем его закрытие по нажатию esc, при этом диалоговое окно может быть не в фокусе
 вместе с этим происходит деактивация активного указателя и переопределение его статуса aria-pressed на false */
if (!document.querySelector('.invisible')) {
  document.addEventListener('keydown', function (event) {
    if (deactivatingEvent(event)) {
      disableActivePin();
      setDialogClassInvisible('add');
      // динамическое изменение статуса активного (нажатого) указателя (aria-pressed) при удалении всех активных указателей
      toggleAriaPressed();
    }
  });
}

// Активизация активного указателя по клику
tokyoMap.addEventListener('click', function (event) {
  if (event.target.tagName === 'IMG') {
    disableActivePin();
    event.path[1].classList.add('pin--active');
    setDialogClassInvisible('remove');
    // динамическое переключение статуса (aria-pressed) при переключении активного указателя
    toggleAriaPressed();
  }
  activatePin();
});

// Активизация активного указателя по нажатию клавиши enter
tokyoMap.addEventListener('keydown', function (event) {
  if (activatingEvent(event)) {
    activatePin();
  }
});


// закрытие диалогового окна и удаление активного указателя по клику
dialogClose.addEventListener('click', function (event) {
  deactivateDialogAndPin();
});

// Закрытие диалогового окна и снятие активного указателя по нажатию escape
dialogClose.addEventListener('keydown', function (event) {
  if (activatingEvent(event)) {
    deactivateDialogAndPin();
  }
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
