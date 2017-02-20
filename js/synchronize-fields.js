'use strict';

window.synchronizeFields = (function () {
  return function (field1, field2, array1, array2, callback) {
    field1.addEventListener('change', function () {
      if (typeof callback === 'function') {
        callback(field2, array2[array1.indexOf(field1['value'])]);
      }
    });
  };
})();
