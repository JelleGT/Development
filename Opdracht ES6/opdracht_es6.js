window.onload = function() {


    const cilinders = [
        {vorm:"cilinder", diameter:5, hoogte:5},
        {vorm:"cilinder", diameter:3, hoogte:1},
        {vorm:"cilinder", diameter:2, hoogte:1},
        {vorm:"cilinder", diameter:9, hoogte:12}
    ];

    const balken = [
        {vorm:"balk", lengte:3, breedte:4, hoogte:50},
        {vorm:"balk", lengte:5, breedte:13, hoogte:21},
        {vorm:"balk", lengte:1, breedte:6, hoogte:11},
        {vorm:"balk", lengte:2, breedte:1, hoogte:2},
        {vorm:"balk", lengte:7, breedte:6, hoogte:5}
    ];
//twee arrays met meerdere objecten
    const pi = 3.14;
    var vormen = [...balken, ...cilinders];
    //voegt de arrays samen
    berekenGrootte = ({diameter, hoogte}) => diameter*hoogte;
    //grootte van de cilinders
    berekenInhoud = ({lengte, breedte, hoogte}) => lengte*breedte*hoogte;
    //inhoud van de balken
    vormen.forEach(element => console.log(element));
    //loopt door alle objecten in de samengevoegde array
    for (i=0; i < cilinders.length; i++) {
      var grootte = berekenGrootte(cilinders[i]);
      console.log(grootte);
    }
    //berekent de grootte per cilinder en loop ze op volgorde af
    for (i=0; i < balken.length; i++) {
      var inhoud = berekenInhoud(balken[i]);
      console.log(inhoud);
    }
      //berekent de inhoud per balk en loop ze op volgorde af
}
