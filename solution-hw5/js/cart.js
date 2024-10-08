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

const apple = new Roll("Apple", "Keep Original", "3", rolls.Apple.basePrice);
const raisin = new Roll("Raisin", "Sugar Milk", "3", rolls.Raisin.basePrice);
const walnut = new Roll("Walnut", "Vanilla Milk", "12", rolls.Walnut.basePrice);
const original = new Roll("Original", "Sugar Milk", "1", rolls.Original.basePrice);

const cart = new Set([apple, raisin, walnut, original]);

let totalPrice = 0;

function displayPrice(totalPrice) {
  const calculatedTotal = document.querySelector("#calculated-total");
  calculatedTotal.textContent = "$" + totalPrice.toFixed(2);
}

function displayCartItem(roll) {
  const template = document.querySelector(".cart-item");
  const clone = template.content.cloneNode(true);

  const rollType = roll.type;
  const glazingType = roll.glazing;
  const pack = roll.size;

  console.log(rollType);

  const removeBtn = clone.querySelector(".remove");

  const glazePriceAdaptation = glazingOptions.find(
    (options) => options.glaze === glazingType
  ).priceAdaptation;
  const packPriceAdaptation = packOptions.find(
    (options) => options.packSize === pack
  ).priceAdaptation;
  const rollPrice =
    (roll.basePrice + glazePriceAdaptation) * packPriceAdaptation;

  clone.querySelector(".roll-image").src =
    "../assets/products/" + rolls[rollType].imageFile;
  clone.querySelector(".roll-image").alt = rollType + " cinnamon roll";
  clone.querySelector(".roll-type").textContent = rollType;
  clone.querySelector(".glazing-type").textContent = glazingType;
  clone.querySelector(".pack-size").textContent = pack;
  clone.querySelector(".price").textContent = "$" + rollPrice.toFixed(2);

  const rollCart = document.querySelector("#cart");
  rollCart.prepend(clone);
  clone.element = document.querySelector(".cart-item-wrapper");
  totalPrice += rollPrice;
  displayPrice(totalPrice);

  removeBtn.addEventListener("click", function () {
    clone.element.remove();
    cart.delete(roll);
    totalPrice -= rollPrice;
    displayPrice(totalPrice);
  });
}

for (const roll of cart) {
  displayCartItem(roll);
}
