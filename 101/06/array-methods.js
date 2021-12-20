forEach
[1, 2, 5, 7, 9, 85, 68, 968, 100]
[{name: "Vardan", age: 21}, {name: "Gor", age: 45}, {name: "David", age: 17}, {name: "Vova", age: null}, {name: null, age: 15}]

Array.length

[].length -> 0
[{name: "Vardan", age: 21}, {name: "Gor", age: 45}, {name: "David", age: 17}, {name: "Vova", age: null}, {name: null, age: 15}].length -> 5
[1, 2, 5, 7, 9, 85, 68, 968, 100].length -> 9

var students = [{name: "Vardan", age: 21}, {name: "Gor", age: 45}, {name: "David", age: 17}, {name: "Vova", age: null}, {name: null, age: 15}];

students.forEach();

// Array.find()
let people = [{name: "Vardan", age: 21}, {name: "Gor", age: 45}, {name: "David", age: 17}, {name: "Vova", age: null}, {name: null, age: 15}]

let callback = (el) => el.name === 'Gor';
people.find(callback);

 // https://sdras.github.io/array-explorer/

let people = [{
    name: "Vardan",
    age: 21
  },
  {
    name: "Gor",
    age: 45
  },
  {
    name: "David",
    age: 17
  },
  {
    name: "Vova",
    age: 26
  },
  {
    name: "Gor",
    age: 19
  },
  {
    name: "Khach",
    age: 15
  },
];

let colors = ["red", "yellow", "green", "blue"];

let callback = (el) => el.name === "Mariam";
console.log(people.find(callback));
console.log(people.findIndex(callback));
console.log(people.filter(callback));

people.find((el) => {
  return el.name === "Gor";
});
people.find((el) => {
  const tomatoes = true;
  console.log(tomatoes);
  return el.name === "Gor";
});
people.find((el) => el.name === "Gor");

people.forEach((person) => person.age++);

let newPeople = people.map((person) => person.name + "no");

let Khach = people.pop();
people.push(Khach);
let Vardan = people.shift();
people.push(Vardan);
let keys = Array.from(people.keys());

console.log(colors.indexOf("yellow"));

console.log(colors.includes("yellow"));




