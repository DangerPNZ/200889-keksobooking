'use strict';

window.load = (function (url, onLoad) {
  var xhr = new XMLHttpRequest();
  var similarApartments = [];
  onLoad = function (findings) {
    document.write(JSON.stringefy(similarApartments));
  };
  xhr.open('GET', url);
  xhr.addEventListener('load', function (e) {
    if (e.target.status === 200) {
      onLoad('JSON.parse(e.target.response)');
    }
  });
  xhr.send();
})();
