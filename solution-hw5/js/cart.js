const glazingOptions = [
    {
      glaze: "Keep original",
      priceAdaptation: 0,
    },
    {
      glaze: "Vanilla milk",
      priceAdaptation: 0,
    },
    {
      glaze: "Sugar milk",
      priceAdaptation: 0,
    },
    {
      glaze: "Double Chocolate",
      priceAdaptation: 1.5,
    },
  ];
  
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


// Initialize shopping cart
class Roll {
  constructor(rollType, rollGlazing, packSize, basePrice) {
    this.type = rollType;
    this.glazing = rollGlazing;
    this.size = packSize;
    this.basePrice = basePrice;

    this.element = null;
  }
}

const original = new Roll('Original', 'Sugar Milk', 1, rolls.Original.basePrice);
const walnut = new Roll('Walnut', 'Vanilla Milk', 12, rolls.Walnut.basePrice);
const raisin = new Roll('Raisin', 'Sugar Milk', 3, rolls.Raisin.basePrice);
const apple = new Roll('Apple', 'Original', 3, rolls.Apple.basePrice);

const cart = new Set([original, walnut, raisin, apple]);

const totalPrice = 0;

function displayCartItem(roll) {
    const template = document.querySelector('.cart-item');
    const clone = template.content.cloneNode(true);

    const rollType = roll.type;
    const glazingType = roll.glazing;
    const pack = roll.size;

    console.log('rolltype' + rollType);
    console.log('glazingtype' + glazingType);
    console.log('pack: ' + pack);

    const glazePriceAdaptation = glazingOptions.find(options => options.glaze === glazingType)?.priceAdaptation;
    console.log('glazePriceAdaptation: ' + glazePriceAdaptation)?.priceAdaptation;
    const packPriceAdaptation = packOptions.find(options => options.packSize === pack)?.priceAdaptation;
    const rollPrice = (roll.basePrice + glazePriceAdaptation) * packPriceAdaptation;

    console.log(rollPrice);

    clone.querySelector('.roll-image').src = "../assets/products/" + rolls[rollType].imageFile;
    clone.querySelector('.roll-image').alt = rollType + " cinnamon roll";
    clone.querySelector('.roll-type').textContent = rollType;
    clone.querySelector('.glazing-type').textContent = roll.glazing;
    clone.querySelector('.pack-size').textContent = roll.size;
    // clone.querySelector('.price').textContent = rollPrice;

    const rollCart = document.querySelector('#cart');
    rollCart.prepend(clone);
    clone.element = document.querySelector('.cart-item-wrapper');
    // totalPrice += rollPrice;

    const removeBtn = clone.querySelector('.remove');
    removeBtn.addEventListener('click', function() {
        clone.element.remove();
        cart.delete(roll);
        // totalPrice -= rollPrice;
    });
}

for (const roll of cart) {
    displayCartItem(roll);
}