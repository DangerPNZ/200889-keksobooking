'use strict';

window.showCard = (function () {
  return function () {

    // Переменные для диалогового окна
    var dialog = document.querySelector('.dialog'); // Модальное окно
    var dialogClose = document.querySelector('.dialog__close'); /* Кнопка закрыть модальное окно */

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

    /*  функция, определяющая скрыто диалоговое окно, или показано
        задаёт соответствующий статус aria-hidden */
    var toggleAriaHidden = function () {
      if (dialog.classList.contains('invisible')) {
        dialog.setAttribute('aria-hidden', true);
      } else {
        dialog.setAttribute('aria-hidden', false);
      }
    };

    // функция для управления отображением диалогового окна (показать - 'add', скрыть - 'remove')
    var setDialogClassInvisible = function (action) {
      dialog.classList[action]('invisible');
    };

   // объявляем коллбек (для избежания трудночитаемости кода)
    var returnPinFocus = function () {
      var activePin = document.querySelector('.pin--active');
      activePin.focus();
    };

    // закрытие диалогового окна и переключение статуса aria-hidden
    // проверяет наличие переданного параметром коллбека и, если коллбек был передан, вызывает его в нужный момент
    var deactivateDialogAndPin = function (callback) {
      setDialogClassInvisible('add');
      // динамически изменяем статус aria-hidden диалогового окна
      toggleAriaHidden();
      var activePin = document.querySelector('.pin--active');
      if (activePin) {
        if (callback) {
          callback();
        }
        activePin.classList.remove('pin--active');
        activePin.setAttribute('aria-pressed', false);
      }
    };

    /* АЛГОРИТМ работы функции */

    // Вызываем функцию, которая определит, скрыто диалоговое окно, или показано
    toggleAriaHidden();

    // !!!
    document.addEventListener('keydown', function (e) {
      if (deactivatingEvent(e)) {
        deactivateDialogAndPin();
      }
    });


    // закрытие диалогового окна и переключение статуса aria-hidden по клику
    dialogClose.addEventListener('click', function () {
      deactivateDialogAndPin();
    });

    // закрытие диалогового окна и переключение статуса aria-hidden по нажатию escape
    dialogClose.addEventListener('keydown', function (e) {
      if (activatingEvent(e)) {
        // Вызов коллбека
        deactivateDialogAndPin(returnPinFocus);
      }
    });

  };
})();
