/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

const form = document.querySelector("form");
const weightInput = document.querySelector("#search");

function convertWeight(e) {
  e.preventDefault();
  return (
    createCard(convertToLb(), "Weight in pounds", "lb"),
    createCard(convertToGram(), "Weight in grams", "g"),
    createCard(convertToOz(), "Weight in ounces", "oz")
  );
}

const convertToLb = () => {
  const converted = Number(weightInput.value) * 2.2046;
  return converted.toFixed(2);
};
const convertToGram = () => {
  const converted = Number(weightInput.value) / 0.001;
  return converted;
};
const convertToOz = () => {
  const converted = Number(weightInput.value) * 35.274;
  return converted.toFixed(2);
};

const createCard = (converterMethod, converterTitle, converterUnit) => {
  const convertedWeight = document.querySelector("#output");

  const cardDiv = document.createElement("div");
  const title = document.createElement("h2");
  const weight = document.createElement("h3");
  const unit = document.createElement("span");

  cardDiv.setAttribute("class", "card");
  title.innerText = converterTitle;
  weight.innerText = converterMethod;
  unit.innerText = converterUnit;
  weight.append(unit);
  cardDiv.append(title, weight);

  return convertedWeight.append(cardDiv);
};

form.addEventListener("submit", convertWeight);
