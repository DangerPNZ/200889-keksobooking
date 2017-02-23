'use strict';

window.load = (function () {
  return function (url, onLoad) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.addEventListener('load', function (e) {
      if (e.target.status === 200) {
        onLoad(JSON.parse(e.target.response));
      }
    });
    xhr.send();
  };
})();
