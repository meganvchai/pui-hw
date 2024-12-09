// Get book from URL params
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const book = params.get("book");
const bookData = books[book];

// Function to update book content
const updateElement = function (selector, property, value) {
  const element = document.querySelector(selector);
  if (property === "textContent") {
    element.textContent = value;
  } else if (property === "src" || property === "alt") {
    element[property] = value;
  }
};

// Update book details
updateElement("#detail-book-title", "textContent", bookData.title); // Update title
updateElement("#detail-book-author", "textContent", bookData.author); // Update author
updateElement("#detail-image-file", "src", `./assets/images/${bookData.imageFile}`); // Update image file
updateElement("#detail-image-file", "alt", bookData.alt); // Update alt text
updateElement("p.theme-pill", "textContent", bookData.theme); // Update theme
updateElement("#summary", "textContent", bookData.summary); // Update summary
updateElement("#notes", "textContent", bookData.notes); // Update notes