// Global website functions

// Display the roll or total cart price
function displayPrice(priceToDisplay, element) {
  const price = document.querySelector(element);
  price.innerText = "$" + priceToDisplay.toFixed(2);
}

// Save cart to local storage
function saveToLocalStorage() {
  const cartArrayString = JSON.stringify(cart);
  localStorage.setItem("storedCart", cartArrayString);
}

// Retrieve cart items from local storage
function retrieveFromLocalStorage() {
  const cartArrayString = localStorage.getItem("storedCart");
  const cartArray = JSON.parse(cartArrayString);
  for (const rollData of cartArray) {
    const roll = new Roll(
      rollData.type,
      rollData.glazing,
      rollData.size,
      rollData.basePrice
    );
    displayCartItem(roll);
  }
}
