//laat de selectiepaginas langzaam inkomen en bij het klikken van de links verdwijnt deze weer
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


//Geeft een delay voordat de selectiespaginas verdwijnen
function delay (URL) {
    setTimeout( function() { window.location = URL }, 1200 );
}

var character = "placeholder"
console.log(character);
function setCharacter(clicked_id){
  sessionStorage.setItem(character, clicked_id);
  console.log(sessionStorage.getItem(character));
}
console.log(sessionStorage.getItem(character));
