/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
let counter = document.querySelector("#btn__state");
counter.innerText = 0;
const add = document.querySelector("#btn__element");

add.addEventListener("click", () => {
  counter.innerText = Number(counter.innerText) + 1;
  return counter.innerText;
});
