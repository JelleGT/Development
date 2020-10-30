function startDeTijd() {
  var vandaag = new Date();
  var h = vandaag.getHours();
  var m = vandaag.getMinutes();
  var s = vandaag.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('tijd').innerHTML =
  h + ":" + m + ":" + s;
  var t = setTimeout(startDeTijd, 500);
}
function checkTime(x) {
  if (x < 10) {x = "0" + x};
  return x;
}
