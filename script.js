//your JS code here. If required.
// Select all squares
const squares = document.querySelectorAll('.square');

// Loop through each square
squares.forEach((square) => {
  // When the mouse enters one square
  square.addEventListener('mouseenter', () => {
    squares.forEach((sq) => {
      if (sq !== square) {
        sq.style.backgroundColor = '#6F4E37'; // Coffee color
      } else {
        sq.style.backgroundColor = '#E6E6FA'; // Keep hovered one lavender
      }
    });
  });

  // When the mouse leaves, reset all squares to lavender
  square.addEventListener('mouseleave', () => {
    squares.forEach((sq) => {
      sq.style.backgroundColor = '#E6E6FA';
    });
  });
});
