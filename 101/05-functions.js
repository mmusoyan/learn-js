 /* function declaration */
function calculateAgeIn5Years (currentAge) {
  let newAge = currentAge + 5;
  
  return newAge;
}

function juicer (fruit) {
// something happened
  return `${fruit} juice`
}

function sayHello (person = "me") {
  console.log(`hello, ${person}`);
  console.log(age, color, car);
  color = "red"
}

let var const
- follows block scoping + - +
- will be hoisted - + -
- value can be changed + + -
// hoisting
// GLOBAL SCOPE
// block scope
{
 var potato = true;
 let tomato = false;
}
// function scope
function sayWhat(param1, param2, etc..){
 {var hey = "hello";}
 {let why = "because";}
 console.log(hey)
 return param1 + param2;
}

var age = 27;

console.log(potato)
sayHello();
sayYourAge();
sayHello("Vardan");

const sayYourAge = function (age) {
  console.log(age)
}; /* function expression */
var potato = 56;

sayYourAge();
sayYourAge(25);

const faveColor = (color) => {
  console.log(color)
} /* arrow function */

faveColor();
faveColor('yellow');



let myAgeIn5Years = calculateAgeIn5Years(29);




var glass = juicer('apple');


// define a function that takes an array and sorts the numbers within it in ascending order
function doStuff () {}


// Vardan
let arr = [1, 12, 45, 2, 8, 68];
let newArray = [];

function sortArrayByAscending(arr) {
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] < ) {

    }
  }
}

// Gor
// assignment by reference vs assignment by value
var originalArr = [11, 6, 2, -46, 8, 43];
var newArr = [];
var cloneArr = [...originalArr];
var tempIndex;

for (let i = 0; i < originalArr.length; i++) {

  newArr[i] = cloneArr[0];
  tempIndex = 0;

  for (let j = 1; j < cloneArr.length; j++) {
    if (newArr[i] >= cloneArr[j]) {
      newArr[i] = cloneArr[j];
      tempIndex = j;
    }
  }
  cloneArr.splice(tempIndex, 1);
}

// David

let arr = [15, 1, 12, 45, 2, 8, 68, 5];
function sortArray(array) {
  let newArr = [1];

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i] < array[j]) {
        newArr[j] = array[i];
      }
    }
  }
  return newArr;
}

let go = [11, 6, 2, -46, 8, 43];
let newGo = [...go];
let tempMin = 0;

// for (let i = 0; i < go.length; i++) {
//   newGo[i] = go[i];
// }

// bubble sort
for (let i = 0; i < go.length; i++) {
  for (let j = i; j < newGo.length; j++) {
    if (newGo[i] > newGo[j]) {
      tempMin = newGo[j];
      newGo[j] = newGo[i];
      newGo[i] = tempMin;
    }
  }
}
