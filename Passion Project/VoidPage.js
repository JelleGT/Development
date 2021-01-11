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
});
//Geeft een delay voordat de selectiepagina verdwijnt
function delay (URL) {
    setTimeout( function() { window.location = URL }, 1200 );
}
