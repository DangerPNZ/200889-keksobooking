'use strict';

window.synchronizeFields = function (field1, field2, parameter) {

  field1.addEventListener('change', function (e) {
    field2[parameter] = e.target.value;
  });
};
