// Get book from URL params
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const book = params.get("book");

// Update book title
const headerElement = document.getElementById("detail-book-title");
const title = books[book].title;
headerElement.textContent = title;

// Update book author
const authorElement = document.getElementById("detail-book-author");
const author = books[book].author;
authorElement.textContent = author;

// Update book cover image
const imageElement = document.getElementById("detail-image-file");
const imageFile = books[book].imageFile;
imageElement.src = "./images/" + imageFile;

// Update image alt text
const imageAlt = books[book].alt;
imageElement.alt = imageAlt;

// Update theme
const pillElement = document.querySelector("p.theme-pill");
const theme = books[book].theme;
pillElement.textContent = theme;