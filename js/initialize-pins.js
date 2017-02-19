'use strict';

window.initializePins = (function () {
  return function () {
    var tokyoMap = document.querySelector('.tokyo__pin-map'); /* Переменная для блока, содержащего указатели */
    var pin = tokyoMap.querySelectorAll('.pin'); // Переменная для указателей
    var dialog = document.querySelector('.dialog'); // Модальное окно

// Константы для keyCode
    var ENTER_KEY_CODE = 13;
    var ESCAPE_KEY_CODE = 27;

// Функции для проверки соответствия keyCode
    var deactivatingEvent = function (e) {
      return e.keyCode && e.keyCode === ESCAPE_KEY_CODE;
    };
    var activatingEvent = function (e) {
      return e.keyCode && e.keyCode === ENTER_KEY_CODE;
    };

// функция для определения активности pin и присвоения соответствующего статуса aria-pressed для каждого указателя
    var determineAriaPressed = function (element) {
      if (element.classList.contains('pin--active')) {
        element.setAttribute('aria-pressed', true);
      } else {
        element.setAttribute('aria-pressed', false);
      }
    };

// функция, находящая элемент с классом pin--active, и удаляет этот класс у найденого элемента
    var disableOldActivePin = function () {
      var activePin = tokyoMap.querySelector('.pin--active');
      if (activePin) {
        activePin.classList.remove('pin--active');
      }
    };

// функция для переключения aria-pressed в завсимости от активности указателя pin
    var toggleAriaPressed = function () {
      for (var i = 0; i < pin.length; i++) {
        determineAriaPressed(pin[i]);
      }
    };

// функция для активации выбранного указателя, деактивации ранее выбранного.
// Также переключает значение аттрибута aria-pressed.
    var activatePinAndDialog = function (e) {
      disableOldActivePin();
      e.target.closest('.pin').classList.add('pin--active');
      if (dialog.classList.contains('invisible')) {
        dialog.classList.remove('invisible');
        dialog.setAttribute('aria-hidden', false);
      }
      toggleAriaPressed();
    };


/* АЛГОРИТМ работы функции */

  // Вызываем функцию для определения наличия активного указателя на странице и присвоения каждому соответствующего статуса aria-pressed
    toggleAriaPressed();

  /* ЕСЛИ на странице есть элемент с классом pin--active (соответственно, имеется активный указатель pin),
   то и модальное окно dialog тоже открыто.
   Реализовываем его закрытие по нажатию esc, при этом диалоговое окно может быть не в фокусе.
   Вместе с этим происходит деактивация активного указателя и переопределение его статуса aria-pressed на false */
    if (tokyoMap.querySelector('.pin--active')) {
      document.addEventListener('keydown', function (e) {
        if (deactivatingEvent(e)) {
          disableOldActivePin();
          toggleAriaPressed();
          dialog.classList.add('invisible');
        }
      });
    }
  // Активизация активного указателя по клику
    tokyoMap.addEventListener('click', function (e) {
      activatePinAndDialog(e);
    });

  // Активизация активного указателя по нажатию клавиши enter
    tokyoMap.addEventListener('keydown', function (e) {
      if (activatingEvent(e)) {
        activatePinAndDialog(e);
        // объявляем коллбек возвращения фокуса при активации pin по нажатию enter
        window.callbackKeydownPin = function () {
          var lastActivePin = e.target.closest('.pin');
          lastActivePin.focus();
        };
      }
    });

  };
})();
