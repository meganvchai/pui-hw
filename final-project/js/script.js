gsap.set(".cursor-hover", {xPercent: -50, yPercent: -50});

let xTo = gsap.quickTo(".cursor-hover", "x", {duration: 1, ease: "power3"});
let yTo = gsap.quickTo(".cursor-hover", "y", {duration: 1, ease: "power3"});

const offsetX = 100; // image horizontal offset in pixels

const bookRows = document.getElementsByClassName('book-item');

Array.from(bookRows).forEach(bookRow => {
  bookRow.addEventListener("mouseover", e => {  
    xTo(e.clientX + offsetX);
    yTo(e.clientY);
  });
});

gsap.set(".flair", {xPercent: -50, yPercent: -50});