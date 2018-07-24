function msieversion() {
  const ua = window.navigator.userAgent;
  const msie = ua.indexOf("MSIE ");

  if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
    window.location = 'ie.html';
  }
}

msieversion();
