function sayHello (person = "me") {
  console.log(`hello, ${person}`)
} /* function declaration */

sayHello();
sayHello("Vardan");

const sayYourAge = function (age) {
  console.log(age)
}; /* function expression */

sayYourAge();
sayYourAge(25);

const faveColor = (color) => {
  console.log(color)
} /* arrow function */

faveColor();
faveColor('yellow');

function calculateAgeIn5Years (currentAge) {
  let newAge = currentAge + 5;
  
  return newAge;
}

let myAgeIn5Years = calculateAgeIn5Years(29);

function juicer (fruit) {
// something happened
  return `${fruit} juice`
}

var glass = juicer('apple');
