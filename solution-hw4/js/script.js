// URL params
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get("roll");

const cart = [

]

const headerElement = document.querySelector('.header');
headerElement.innerText = rollType + ' Cinnamon Roll'

const rollImgFile = rolls[rollType].imageFile;
const rollImage = document.getElementById('roll-image');
rollImage.src = '../assets/products/' + rollImgFile;

const rollBasePrice = rolls[rollType].basePrice;
displayPrice(rollBasePrice)

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

function displayPrice(priceToDisplay) {
  const price = document.querySelector("#detail-price");
  price.innerText = "$" + priceToDisplay.toFixed(2);
}

function priceChange() {
  const basePrice = rollBasePrice;
  const glazingPriceChange = parseFloat(
    document.getElementById("glazing-options").value
  );
  const packPriceChange = parseFloat(
    document.getElementById("pack-options").value
  );

  const priceToDisplay = (basePrice + glazingPriceChange) * packPriceChange;
  displayPrice(priceToDisplay);
}

document.getElementById("glazing-options").addEventListener("change", priceChange);
document.getElementById("pack-options").addEventListener("change", priceChange);