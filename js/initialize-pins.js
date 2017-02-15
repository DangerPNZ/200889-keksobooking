'use strict';

(function () {
  window.initializePins = function () {
    var tokyoMap = document.querySelector('.tokyo__pin-map'); /* Переменная для блока, содержащего указатели */
    var pin = document.querySelectorAll('.pin'); // Переменная для указателей

// Переменные для диалогового окна
    var dialog = document.querySelector('.dialog'); // Модальное окно
    var dialogClose = document.querySelector('.dialog__close'); /* Кнопка закрыть модальное окно */

// Константы для keyCode
    var ENTER_KEY_CODE = 13;
    var ESCAPE_KEY_CODE = 27;

// DRY или определение функций для дублируемого кода

// Функции для проверки соответствия keyCode
    var deactivatingEvent = function (e) {
      return e.keyCode && e.keyCode === ESCAPE_KEY_CODE;
    };
    var activatingEvent = function (e) {
      return e.keyCode && e.keyCode === ENTER_KEY_CODE;
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

// функция для переключения aria-pressed в завсимости от активности указателя pin
    var toggleAriaPressed = function () {
      for (var i = 0; i < pin.length; i++) {
        determineAriaPressed(pin[i]);
      }
    };

// функция для управления отображением диалогового окна
    var setDialogClassInvisible = function (action) {
      dialog.classList[action]('invisible');
    };

// закрытие диалогового окна и удаление активного указателя
    var deactivateDialogAndPin = function () {
      disableActivePin();
      setDialogClassInvisible('add');
  // динамическое изменение статуса активного (нажатого) указателя (aria-pressed) при удалении всех активных указателей
      toggleAriaPressed();
    };

// функция для активации выбранного указателя, деактивации ранее выбранного.
// Также открывает модальное окно и переключает значение аттрибута aria-pressed.
    var activatePin = function (e) {
      disableActivePin();
      e.target.closest('.pin').classList.add('pin--active');
      setDialogClassInvisible('remove');
    // динамическое переключение статуса (aria-pressed) при переключении активного указателя
      toggleAriaPressed();
    };


/* АЛГОРИТМ работы функции */
  // Вызываем функцию для определения наличия активного указателя на странице и присвоения каждому соответствующего статуса aria-pressed
    toggleAriaPressed();
  /* ЕСЛИ на странице есть элемент с классом pin--active (соответственно, имеется активный указатель pin),
   то и модальное окно dialog тоже открыто.
   Реализовываем его закрытие по нажатию esc, при этом диалоговое окно может быть не в фокусе.
   Вместе с этим происходит деактивация активного указателя и переопределение его статуса aria-pressed на false */
    if (document.querySelector('.pin--active')) {
      document.addEventListener('keydown', function (e) {
        if (deactivatingEvent(e)) {
          disableActivePin();
          setDialogClassInvisible('add');
        // динамическое изменение статуса активного (нажатого) указателя (aria-pressed) при удалении всех активных указателей
          toggleAriaPressed();
        }
      });
    }
  // Активизация активного указателя по клику
    tokyoMap.addEventListener('click', function (e) {
      if (e.target.className === 'rounded') {
        disableActivePin();
        e.target.parentNode.classList.add('pin--active');
        setDialogClassInvisible('remove');
      // динамическое переключение статуса (aria-pressed) при переключении активного указателя
        toggleAriaPressed();
      }
      activatePin(e);
    });

  // Активизация активного указателя по нажатию клавиши enter
    tokyoMap.addEventListener('keydown', function (e) {
      if (activatingEvent(e)) {
        activatePin(e);
      }
    });


  // закрытие диалогового окна и удаление активного указателя по клику
    dialogClose.addEventListener('click', function (e) {
      deactivateDialogAndPin();
    });

  // Закрытие диалогового окна и снятие активного указателя по нажатию escape
    dialogClose.addEventListener('keydown', function (e) {
      if (activatingEvent(e)) {
        deactivateDialogAndPin();
      }
    });
  };
})();
