// https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=yourkey
// 72qx6ixSuFxjcKBGV3RIBSA6QAjC96WX
let url = "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=72qx6ixSuFxjcKBGV3RIBSA6QAjC96WX"
//link naar het json-bestand voor de api
let boekTitels = document.getElementById("Bestsellers");
fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    //Alle data wordt opgehaald en in de console gezet.
    data.results.books.map(book => {
      console.log(book.title);
      //Alle titels worden opgehaald en in de console gezet.
      let a = document.createElement("a");
      a.setAttribute('href', book.url);
      a.innerHTML = book.title;
      boekTitels.appendChild(a);
    })
  })
