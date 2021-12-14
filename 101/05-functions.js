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


// hoisting
// GLOBAL SCOPE
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

let arr = [1, 12, 45, 2, 8, 68];
function orderByAscendingValue(originalArray) {
  let originalLength = originalArray.length;
  let q = 0;
  var newArray = [];
  newArray[0] = originalArray[0];
  for (let i = 0; i < originalLength; i++) {
    for (let j = 0; j < originalLength; j++) {
      if (originalArray[j] < newArray[q]) {
        newArray[q] = originalArray[j];
      }
    }
    q++;
    newArray[q] = newArray[q - 1];
  }
}

// David

let arr = [15, 1, 12, 45, 2, 8, 68, 5];
function sortArray(array) {
  let newArr = [1];
// 1
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i] < array[j]) {
        newArr[j] = array[i];
      }
    }
  }
  return newArr;
}
