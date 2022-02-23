/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 3 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
function Calculator(numberA, numberB) {
  this.numberA = numberA;
  this.numberB = numberB;

  this.sum = () => {
    return numberA + numberB;
  };
  this.subtraction = () => {
    return numberA - numberB;
  };
  this.multiplication = () => {
    return numberA * numberB;
  };
  this.division = () => {
    return numberA / numberB;
  };
}

const numbers = new Calculator(6, 4);
console.log("Suma ", numbers.sum());
console.log("Atimtis ", numbers.subtraction());
console.log("Daugyba ", numbers.multiplication());
console.log("Dalyba ", numbers.division());
