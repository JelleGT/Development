function startDeTijd() {
  var vandaag = new Date();
  var h = vandaag.getHours();
  var m = vandaag.getMinutes();
  var s = vandaag.getSeconds();
  var y = vandaag.getFullYear();
  var n = vandaag.getMonth()+1;
  var d = vandaag.getDate();
  m = checkTime(m);
  s = checkTime(s);
  var dagen = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  document.getElementById('datum').innerHTML =
  d + "-" + n + "-" + y + " " + dagen[vandaag.getDay()].substring(0,3).toUpperCase();
  document.getElementById('tijd').innerHTML =
  h + ":" + m + ":" + s;
  var t = setTimeout(startDeTijd, 500);
  $(document).ready(function() {
    setInterval(function(){
        if (h > 11 && h <= 12)
        {
           document.getElementById("activiteit").src = "Images/lunch.png";
        }
        else if (h > 17 && h <= 18)
        {
            document.getElementById("activiteit").src = "Images/dinner.png";
        }
        else {
          document.getElementById("activiteit").src = "Images/read.png";
        }
    });
});
}
function checkTime(x) {
  if (x < 10) {x = "0" + x};
  return x;
}
