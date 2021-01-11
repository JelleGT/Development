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


var imageArray = ["image1", "image2", "image3", "image4", "image5", "image6", "image7", "image8", "image9", "image10", "image11", "image12", "image13", "image14", "image15", "image16", "image17", "image18", "image19", "image20", "image21", "image22", "image23", "image24", "image25", "image26", "image27", "image28", "image29", "image30", ]


var sc = document.querySelector("#creatureSelection")
for(var i=0; i < imageArray.length; i++){
   var img = sc.appendChild(document.createElement("img"));
   img.src = "creatureImages/image" + (i + 1) + ".jpg";
}
