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

    const pi = 3.14;
    var vormen = [...balken, ...cilinders];
    vormen.forEach(element => console.log(element));
}
