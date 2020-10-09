// https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=yourkey
// 72qx6ixSuFxjcKBGV3RIBSA6QAjC96WX
let url = "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=72qx6ixSuFxjcKBGV3RIBSA6QAjC96WX"
fetch(url)
  .then(response => response.json())
  .then(data => console.log(data));
