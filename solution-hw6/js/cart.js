let totalPrice = 0;

// Helper function to get the price adaptation based on the given glaze or pack size
function getPriceAdaptation(item, options) {
  return options.find(
    (option) => option.glaze === item || option.packSize === item
  ).priceAdaptation;
}

// Helper function to calculate the roll price
function calculateRollPrice(basePrice, glazeAdaptation, packAdaptation) {
  return (basePrice + glazeAdaptation) * packAdaptation;
}

// Helper function to create clone with given roll data
function createClone(clone, rollType, glazingType, pack, rollPrice) {
  clone.querySelector(".roll-image").src =
    "../assets/products/" + rolls[rollType].imageFile;
  clone.querySelector(".roll-image").alt = rollType + " Cinnamon Roll";
  clone.querySelector(".roll-type").textContent = rollType + " Cinnamon Roll";
  clone.querySelector(".glazing-type").textContent = glazingType;
  clone.querySelector(".pack-size").textContent = pack;
  clone.querySelector(".price").textContent = "$" + rollPrice.toFixed(2);
}

// Display roll clones from HTML template and update the total cart price
function displayCartItem(roll) {
  // Clone cart item template
  const template = document.querySelector(".cart-item");
  const clone = template.content.cloneNode(true);

  const rollType = roll.type;
  const glazingType = roll.glazing;
  const pack = roll.size;
  const basePrice = roll.basePrice;
  const removeBtn = clone.querySelector(".remove");

  // Calculate the roll price given the selection
  glazePriceAdaptation = getPriceAdaptation(glazingType, glazingOptions);
  packPriceAdaptation = getPriceAdaptation(pack, packOptions);
  rollPrice = calculateRollPrice(
    basePrice,
    glazePriceAdaptation,
    packPriceAdaptation
  );

  // Create clone with corresponding roll data
  createClone(clone, rollType, glazingType, pack, rollPrice);

  // Add clone to the DOM and update the total cart price
  const rollCart = document.querySelector("#cart");
  rollCart.prepend(clone);
  clone.element = document.querySelector(".cart-item-wrapper");
  totalPrice = calculateTotalPrice();
  displayPrice(totalPrice, "#calculated-total");

  // Remove roll from the cart if click on "Remove"
  removeBtn.addEventListener("click", function () {
    clone.element.remove();

    // Find the index of the roll to remove & remove if found
    const indexToRemove = cart.findIndex(
      (item) =>
        item.type === roll.type &&
        item.glazing === roll.glazing &&
        item.size === roll.size &&
        item.basePrice === roll.basePrice
    );

    cart.splice(indexToRemove, 1);

    // Update price after removal
    totalPrice = calculateTotalPrice();
    displayPrice(totalPrice, "#calculated-total");

    // Update local storage after removal
    saveToLocalStorage();

    console.log("Local storage cart: " + localStorage.getItem("storedCart"));
  });
}

// When the page loads, retrieve cart items from local storage
if (localStorage.getItem("storedCart") != null) {
  retrieveFromLocalStorage();
  displayPrice(totalPrice, "#calculated-total");
}

function calculateTotalPrice() {
  let total = 0;

  for (const roll of cart) {
    const glazePriceAdaptation = getPriceAdaptation(
      roll.glazing,
      glazingOptions
    );
    const packPriceAdaptation = getPriceAdaptation(roll.size, packOptions);
    const rollPrice = calculateRollPrice(
      roll.basePrice,
      glazePriceAdaptation,
      packPriceAdaptation
    );
    total += rollPrice;
  }

  return total;
}
