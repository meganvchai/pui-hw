// Attempt to retrieve the cart from the local storage.
let cart = JSON.parse(localStorage.getItem("storedCart"));

// If no cart exists in the storage, create an empty cart array.
if (!cart) {
  cart = [];
}

class Roll {
  constructor(rollType, rollGlazing, packSize, basePrice) {
    this.type = rollType;
    this.glazing = rollGlazing;
    this.size = packSize;
    this.basePrice = basePrice;
  }
}

// Roll type data
const rolls = {
  Original: {
    basePrice: 2.49,
    imageFile: "original-cinnamon-roll.jpg",
  },
  Apple: {
    basePrice: 3.49,
    imageFile: "apple-cinnamon-roll.jpg",
  },
  Raisin: {
    basePrice: 2.99,
    imageFile: "raisin-cinnamon-roll.jpg",
  },
  Walnut: {
    basePrice: 3.49,
    imageFile: "walnut-cinnamon-roll.jpg",
  },
  "Double-Chocolate": {
    basePrice: 3.99,
    imageFile: "double-chocolate-cinnamon-roll.jpg",
  },
  Strawberry: {
    basePrice: 3.99,
    imageFile: "strawberry-cinnamon-roll.jpg",
  },
};

// Glazing options and price adaptation data
const glazingOptions = [
  {
    glaze: "Keep Original",
    priceAdaptation: 0,
  },
  {
    glaze: "Sugar Milk",
    priceAdaptation: 0,
  },
  {
    glaze: "Vanilla Milk",
    priceAdaptation: 0.5,
  },
  {
    glaze: "Double Chocolate",
    priceAdaptation: 1.5,
  },
];

// Pack size options and price adaptation data
const packOptions = [
  {
    packSize: "1",
    priceAdaptation: 1,
  },
  {
    packSize: "3",
    priceAdaptation: 3,
  },
  {
    packSize: "6",
    priceAdaptation: 5,
  },
  {
    packSize: "12",
    priceAdaptation: 10,
  },
];
