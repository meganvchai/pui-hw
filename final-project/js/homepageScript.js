// GSAP function & image following mouse source: https://gsap.com/community/forums/topic/30502-mouse-cursor-follow-animation/
// Set book cover image class to follow the mouse movement
gsap.set(".image-cursor", { xPercent: -50, yPercent: -50 });

// Create GSAP functions to create smooth animations
let xTo = gsap.quickTo(".image-cursor", "x", { duration: 0.3, ease: "power1" });
let yTo = gsap.quickTo(".image-cursor", "y", { duration: 0.3, ease: "power1" });

// Define hover image horizontal offset in pixels
const offsetX = 100;

const bookRows = document.getElementsByClassName("book-item");

// When the mouse enters each book row, the hover image will change based on the row
Array.from(bookRows).forEach(function (bookRow) {
  bookRow.addEventListener("mouseenter", function (hoverEvent) {
    const bookId = bookRow.id;
    const bookObject = books[bookId];
    const imageThumbnail = bookObject.imageThumbnail;

    if (imageThumbnail) {
      const imageCursor = document.querySelector(".image-cursor");
      imageCursor.src = "./assets/images/" + imageThumbnail;
      imageCursor.style.display = "block";
    }

    xTo(hoverEvent.clientX + offsetX);
    yTo(hoverEvent.clientY);
  });

  bookRow.addEventListener("mousemove", function (hoverEvent) {
    xTo(hoverEvent.clientX + offsetX);
    yTo(hoverEvent.clientY);
  });
});

// Hide hover image when the mouse leaves the book-list section
const bookListSection = document.getElementById("book-list");
bookListSection.addEventListener("mouseleave", function () {
  const imageCursor = document.querySelector(".image-cursor");
  imageCursor.style.display = "none";
});

const themePills = document.querySelectorAll(".theme-select");
const allBookItems = document.querySelectorAll(".book-item");

// For each pill, add the 'click' event listener
themePills.forEach(function (pill) {
  pill.addEventListener("click", function () {
    // Clicked pill currently has "selected" class
    const isSelected = pill.classList.contains("selected");

    // Ensure that only one pill can be selected at a time
    themePills.forEach(function (p) {
      p.classList.remove("selected");
    });

    // Add the "selected" class back to the clicked pill
    if (!isSelected) {
      pill.classList.add("selected");
    }

    const selectedTheme = pill.getAttribute("data-theme");

    if (isSelected) {
      showAllBooks(); // If the pill is deselected, show all books
    } else {
      filterBooksByTheme(selectedTheme); // If the pill is selected, filter books based on the theme
    }
  });
});

// Function to filter books by selected theme
function filterBooksByTheme(theme) {
  allBookItems.forEach(function (bookItem) {
    const themes = bookItem.getAttribute("data-theme").split(" ");

    if (themes.includes(theme)) {
      bookItem.style.display = "block"; // Show matching book
    } else {
      bookItem.style.display = "none"; // Hide non-matching book
    }
  });
}

// Function to show all books
function showAllBooks() {
  allBookItems.forEach(function (bookItem) {
    bookItem.style.display = "block";
  });
}
