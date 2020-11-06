
var books = ["The Eye of the World", "The Great Hunt ", "The Dragon Reborn", "The Shadow Rising", "The Fires of Heaven", "Lord of Chaos", "A Crown of Swords", "The Path of Daggers", "Winter's Heart", "Crossroads of Twilight", "Knife of Dreams", "The Gathering Storm", "Towers of Midnight", "A Memory of Light", "Philosopher's Stone", "Chamber of Secrets", "Prisoner of Azkaban", "Goblet of Fire", "Order of the Phoenix", "Half Blood Prince", "Deathly Hallows", "The Gunslinger", "The Drawing of the Three", "The Waste Lands", "Wizard and Glass", "Wolves of the Calla", "Song of Susannah", "The Dark Tower" , "The Way of Kings", "Words of Radiance", "Oathbringer"];

var ul = document.getElementById("bookList");
for (var x = 0; x < books.length; x++) {
    var book = books[x];
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(book));
    ul.appendChild(li);
}
