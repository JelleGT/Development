var books = ["The Eye of the World", "The Great Hunt ", "The Dragon Reborn", "The Shadow Rising", "The Fires of Heaven", "Lord of Chaos", "A Crown of Swords", "The Path of Daggers", "Winter's Heart", "Crossroads of Twilight", "Knife of Dreams", "The Gathering Storm", "Towers of Midnight", "A Memory of Light", "Philosopher's Stone", "Chamber of Secrets", "Prisoner of Azkaban", "Goblet of Fire", "Order of the Phoenix", "Half Blood Prince", "Deathly Hallows", "The Gunslinger", "The Drawing of the Three", "The Waste Lands", "Wizard and Glass", "Wolves of the Calla", "Song of Susannah", "The Dark Tower" , "The Way of Kings", "Words of Radiance", "Oathbringer"];

var ul = document.getElementById("bookList");
for (var x = 0; x < books.length; x++) {
    var book = books[x];
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(book));
    ul.appendChild(li);
}

var games = ["Metroid Prime", "Metroid Prime 2: Echoes", "Metroid Prime 3: Corruption", "Super Metroid", "Metroid: Samus Returns", "Metroid Fusion", "Metroid: Zero Mission", "Metroid Prime Pinball", "AM2R", "The Legend of Zelda: Spirit Tracks", "The Legend of Zelda: Skyward Sword", "The Legend of Zelda: Phantom Hourglass", "The Legend of Zelda: Ocarina of Time", "The Legend of Zelda: Majora's Mask", "The Legend of Zelda: Link's Awakening", "The Legend of Zelda: A Link to the Past", "The Elder Scrolls III: Morrowind", "The Elder Scrolls IV: Oblivion", "The Elder Scrolls V: Skyrim", "Dark Souls", "Dark Souls 2", "Dark Souls 3", "Bloodborne",  "The Binding of Isaac", "Persona 4", "Persona 5", "Beat Saber", "Dishonored", "Dishonored 2", "Dragon Age: Origins", "Dragon Age: Inquisition", "DOOM 2016", "Fallout", "Fallout 2", "Fallout 3", "Fallout: New Vegas", "Fallout 4", "Half Life", "Half Life 2", "Helltaker", "Hitman", "Hitman 2", "Hollow Knight", "Kingdom Come Deliverance", "Middle Earth: Shadow of Mordor", "Middle Earth: Shadow of War", "One Piece: Pirate Warriors 4", "Rayman 2: The Great Escape", "Rayman Legends", "Rayman Origins", "Spore", "Stardew Valley", "Subnautica", "Subnautica: Below Zero", "Terraria", "Team Fortress 2", "Undertale", "The Witcher", "The Witcher 2", "The Witcher 3", "Sonic Heroes"];

var ul = document.getElementById("gameList");
for (var x = 0; x < games.length; x++) {
    var game = games[x];
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(game));
    ul.appendChild(li);
}

var bands = ["Blind Guardian", "Avenged Sevenfold", "Helloween", "Judas Priest", "Ayreon", "Beast in Black", "Primal Fear", "Carach Angren", "Demons and Wizards", "Dio", "Fleshgod Apocalypse", "Epica", "Foo Fighters", "Gloryhammer", "Gojira", "Igorrr", "Iron Maiden", "King Diamond", "Megadeth", "Rhapsody (Of Fire)", "Luca Turilli's Rhapsody", "Powerwolf", "Alestorm", "Threshold", "Turilli & Lione Rhapsody",  ];

var ul = document.getElementById("bandList");
for (var x = 0; x < bands.length; x++) {
    var band = bands[x];
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(band));
    ul.appendChild(li);
}
