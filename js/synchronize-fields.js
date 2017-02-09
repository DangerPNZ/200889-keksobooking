'use strict';

window.synchronizeFields = function (field1, field2, arr1, arr2, parameter) {

  field1.addEventListener('change', function () {
    var selectedVal = arr1.indexOf(field1.value);
    field2[parameter] = arr2[selectedVal];
  });

  field2.addEventListener('change', function () {
    var selectedVal = arr2.indexOf(field2.value);
    field1[parameter] = arr1[selectedVal];
  });
};
