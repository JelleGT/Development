//laat de selectiepagina langzaam inkomen en bij het klikken van de links verdwijnt deze weer
$(document).ready(function(){
  $(".display").fadeIn(2000).css('display', 'block');
  $("#selection").fadeIn(2000).css('display', 'flex');
  $("a").click(function(){
    $("#selection").fadeOut(500);
  });
  $("button").click(function(){
    $(".display").fadeOut(500);
  });
  $(".item").click(function(){
    $(".display").fadeOut(500);
  });
});


//Geeft een delay voordat de selectiepagina verdwijnt
function delay (URL) {
    setTimeout( function() { window.location = URL }, 1200 );
}

//De sectie van de pagina waar alle creatures in komen te staan
var sc = document.querySelector("#creatureSelection");

var a = sc.getElementsByTagName('a');
var img = sc.getElementsByTagName('img');
//Er worden a en img elementen aangemaakt
for(var i=0; i < 30; i++){
   var link = sc.appendChild(document.createElement("a"));
   var modal = link.appendChild(document.createElement("img"));
   link.href = "creatureImages/image" + (i + 1) + ".jpg";
   modal.src = "creatureImages/image" + (i + 1) + ".jpg"
}

//Dit zet de modals klaar
$(document).ready(function() {
  $('.image-link').magnificPopup({type:'image'});
});

//Per creature komt er een modal met dezelfde afbeelding
$('#creatureSelection').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image'
  // other options
});
