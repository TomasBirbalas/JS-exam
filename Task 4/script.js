/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = "./cars.json";

fetch(ENDPOINT)
  .then((response) => response.json())
  .then((cars) => {
    renderCards(cars);
  });

const renderCards = (cars) => {
  const output = document.querySelector("#output");
  output.innerHTML = "";

  cars.forEach((car) => {
    const carCard = createCarCard(car);
    output.append(carCard);
  });
};

const createCarCard = (car) => {
  const carCard = document.createElement("div");
  const title = document.createElement("h2");
  const ul = document.createElement("ul");

  title.innerText = car.brand;
  car.models.forEach((model) => {
    const li = document.createElement("li");
    li.innerText = model;
    ul.append(li);
  });

  carCard.setAttribute("class", "card");
  carCard.append(title, ul);

  return carCard;
};
