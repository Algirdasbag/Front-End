let products = PROD_DATA_JSON_STRING;

let user = localStorage.getItem("name");
if (user != ""){
  document.getElementById("sveiki").innerHTML = "Sveiki, "+ user + "!";
}

let info = document.getElementById("rezultatai-kaire");
let dataArrayInitial = JSON.parse(PROD_DATA_JSON_STRING);
let dataArrayCurrent = dataArrayInitial;

let numberOfItems = dataArrayInitial.length;
let productsFound = document.getElementById("items-found");
productsFound.innerHTML = numberOfItems;

let currentView = "grid";
console.log(numberOfItems);

let kiekisPuslapyjeValue = 6;
let sortByValue = "1";

function setView(newView) {
  currentView = newView;
  createCards(dataArrayCurrent);
}

function createCards() {
  createPageNumbers(dataArrayCurrent.length);
  productsFound.innerHTML = dataArrayCurrent.length;
  document.getElementById("desine-inner").innerHTML = "";
  let counter = 0;
  dataArrayCurrent.forEach((element) => {
    counter++;
    if (
      (einamasPslNr - 1) * kiekisPuslapyjeValue < counter &&
      counter <= einamasPslNr * kiekisPuslapyjeValue
    ) {
      generateCardHtml(
        element.id,
        element.name,
        element.description.substring(0, 60) + " ...",
        element.price,
        element.image,
        element.weight
      );
    }
  });
}

function generateCardHtml(cardId, name, description, price, image, weight) {
  let viewClass = "";
  if (currentView === "grid") {
    viewClass = "cardGrid";
  } else {
    viewClass = "cardList";
  }

  let cardText = `
  <div id = "${cardId}" class="${viewClass}">
  <img class="image-item" src="${image}" alt="">
  <div class="card-body">
    <p class="card-title">${name}</p>
    <p class="card-text">${description}</p>
    <p class="card-text">Svoris: ${weight}g</p>
    <p class="card-title">${price}€</p>
    <a class="btn btn-primary" onclick="addToCart()">Pridėti į krepšelį</a>
  </div>
  </div>
  `;
  document.getElementById("desine-inner").innerHTML += cardText;
}

function kiekisPuslapyjeFunction() {
  let kiekisPuslapyje = document.getElementById("kiekisPuslapyje");
  console.log("Pasirinktas prekių kiekis puslapyje: " + kiekisPuslapyje.value);
  kiekisPuslapyjeValue = kiekisPuslapyje.value;
  createPageNumbers(numberOfItems);
  createCards();
}

let pslNr = 1;
let einamasPslNr = 1;
function createPageNumbers(prekiuSk) {
  pslNr = 0;
  let pagination = document.getElementById("pagination");
  pagination.innerHTML = `<li class="page-item"><a class="page-link" href="#" onclick="paginationActivation(0)">Ankstesnis</a></li>`;
  while (prekiuSk > 0) {
    pslNr++;
    pagination.innerHTML += `<li class="page-item" id="${pslNr}"><a class="page-link" href="#" onclick="paginationActivation(${pslNr})">${pslNr}</a></li>`;
    prekiuSk -= kiekisPuslapyjeValue;
  }
  pagination.innerHTML += `<li class="page-item" onclick="paginationActivation(999)"><a class="page-link" href="#">Sekantis</a></li>`;
}

let sort = document.getElementById("sortBy");
sort.addEventListener("change", function () {
  sortByValue = sort.value;
  sortBy(sortByValue);
});

function paginationActivation(pslNrCurrent) {
  if (pslNrCurrent == 0) {
    console.log("PASPAUSTAS MAZEJIMO MYGTUKAS");
    if (einamasPslNr > 1) {
      einamasPslNr--;
      console.log("Page number: " + einamasPslNr + "<");
    } else if (einamasPslNr > 0) {
      console.log("Page number: " + einamasPslNr);
    }
  } else if (pslNrCurrent == 999) {
    console.log("PASPAUSTAS DIDEJIMO MYGTUKAS");
    if (einamasPslNr < pslNr) {
      einamasPslNr++;
      console.log("Page number: " + einamasPslNr + ">");
    } else {
      console.log("Page number: " + einamasPslNr + ">");
    }
  } else {
    einamasPslNr = pslNrCurrent;
    console.log("Page number: " + einamasPslNr);
  }
  createCards();
}

let counterOfItems = 0;
let counterCart = document.getElementById("counter");
counterCart.innerHTML = counterOfItems;
function addToCart(){
    counterOfItems++;
    counterCart.innerHTML = counterOfItems;
}