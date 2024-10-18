// Update detail page according to URL params
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get("roll");

const headerElement = document.getElementById("detail-header");
headerElement.innerText = rollType + " Cinnamon Roll";

const rollImgFile = rolls[rollType].imageFile;
const rollImage = document.getElementById("roll-image");
rollImage.src = "../assets/products/" + rollImgFile;

// Store cart information from "Add to Cart" button
const addCartButton = document.getElementById("add-to-cart");
addCartButton.addEventListener("click", function () {
  const selectedGlazeText =
    selectGlaze.options[selectGlaze.selectedIndex].innerText;
  const selectedPackText =
    selectPack.options[selectPack.selectedIndex].innerText;

  const addRoll = new Roll(
    rollType,
    selectedGlazeText,
    selectedPackText,
    rollBasePrice
  );
  cart.push(addRoll);
  saveToLocalStorage();

  console.log("Local storage cart: " + localStorage.getItem("storedCart"));
});

// Display roll price and dropdowns
const rollBasePrice = rolls[rollType].basePrice;
displayPrice(rollBasePrice, "#detail-price");

const selectGlaze = document.getElementById("glazing-options");
const selectPack = document.getElementById("pack-options");

function createSelectOptions(optionsType, selectionElement, text, price) {
  for (let i = 0; i < 4; i++) {
    const element = document.createElement("option");
    element.innerText = optionsType[i][text];
    element.value = optionsType[i][price];
    selectionElement.appendChild(element);
  }
}

createSelectOptions(glazingOptions, selectGlaze, "glaze", "priceAdaptation");
createSelectOptions(packOptions, selectPack, "packSize", "priceAdaptation");

// Calculate price for selected roll glazing type and pack size
function priceChange() {
  const basePrice = rollBasePrice;
  const glazingPriceChange = parseFloat(selectGlaze.value);
  const packPriceChange = parseFloat(selectPack.value);

  const priceToDisplay = (basePrice + glazingPriceChange) * packPriceChange;
  displayPrice(priceToDisplay, "#detail-price");
}

// Change price when the dropdown selection is changed
selectGlaze.addEventListener("change", priceChange);
selectPack.addEventListener("change", priceChange);
