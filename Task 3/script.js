/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";

const button = document.getElementById("btn");
const p = document.querySelector("#message");

button.addEventListener("click", () => {
  fetch(ENDPOINT)
    .then((response) => response.json())
    .then((gitHubUsers) => {
      renderCards(gitHubUsers);
    });
});

const renderCards = (gitHubUsers) => {
  const output = document.querySelector("#output");
  output.innerHTML = "";

  gitHubUsers.forEach((user) => {
    const userCard = createUserCard(user);
    output.append(userCard);
  });
};

const createUserCard = (user) => {
  const userCard = document.createElement("div");
  const title = document.createElement("h2");
  const image = document.createElement("img");

  title.innerText = user.login;
  image.setAttribute("src", user.avatar_url);

  userCard.setAttribute("class", "card");
  userCard.append(image, title);

  return userCard;
};
