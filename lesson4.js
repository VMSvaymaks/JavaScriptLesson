"use strict";

//lesson 4
//h.w
// 4.
// let user = {
//   firstname: 'giorgi',
//   lastname: 'saakadze',
//   age: 32,
//   isloggedin: true
// }
// let user2 = {
//   firstname: 'anna',
//   lastname: 'ragaca',
//   age: 32,
//   isloggedin: true
// }

// function printName(obj) {
//   if (obj.isloggedin) {
//     // return user.firstname + user.lastname;
//     return `${obj.firstname} ${obj.lastname}`
//   }
//     return false;
// }

// let result = printName(user);
// console.log(result);

// 3.

// function getMax(...numbers) {
//   let maxValue = 0;

//   for (let item of numbers) {
//     if (item > maxValue) {
//       maxValue = item;
//     }
//   }

//   return maxValue;
// }

// let resultMAxVAlue = getMax(15, 25, 14, 7, 18, 150, 250, 6)
// console.log(resultMAxVAlue);

// 5.
// let array = [1,2,3,4,10];

// for (let i = array.length - 1; i >= 0; i--) {
//   console.log(array[i]);
// }

//----------------------------------------------------------------

// scope
// 1. global scope
// let firstName = 'anna';

// 2 function an local scope
// function getAge(birthYear) {
//   let yearNow = 2024;
//   let age = yearNow - birthYear;
//   return age;
// }

// console.log(age); //is not defined
// console.log(yearNow); //yearNow is not defined
// let result = getAge(1995);
// console.log(result);
// 3. block scope
// let birthAge = 20;

// if (birthAge > 18) {
//   let isAdult = true;
//   console.log(isAdult); //true
// }

// console.log(isAdult);// isAdult is not defined

//
// var -> function scoped
// let & const -> function & block scoped

//-----
let userName = "anna";

function getAge(birthYear) {
  let age = 2024 - birthYear;

  function printAge() {
    let info = `${userName} is ${age}, born in ${birthYear}`;
    console.log(info);

    if (age > 18) {
      let adult = `${userName} is adult`;
      console.log(adult);
    }
  }
  // console.log(adult);

  printAge();

  return age;
}

let resultGetAge = getAge(2004);
console.log(resultGetAge);

// -----
let count = 0;

function test() {
  if (count == 0) {
    let count = 1;
    console.log(count); // 1
  }
  console.log(count); //0
}

test();

//closure

function outside(x) {
  let y = 100;
  function inside() {
    let y = 200;
    return x + x + y;
  }

  return inside;
}

let i = outside(10);
let i2 = outside(5);

let result = i2();
console.log(result);

// methods arrays
let array = [100, 25, 36, 7];

array.forEach((item) => console.log(item));



let newArray2 = array2.filter(function (item) {
  return item.length > 5;
});
console.log(newArray2);

let array2 = ["html", "css", "javascript", "bootstrap"];
array2.forEach((element) => {
  if (element.length > 5) {
    console.log(element);
  }
});

for (let item of array2) {
  if (item.length > 5) {
    console.log(item);
  }
}

//---
let names = ["anna", "lasha", "levani", "nini"];

// names.push('beka');
// names.unshift('mariami');
// names.shift();
names.pop();
console.log(names);
console.log(names.length);

// ---

//მასივის მნიშვნელობების წაშლა
// 1. newARray = [];
// 2.newARray.length = 0;
// 3.
for (let i = newARray.length - 1; i >= 0; i--) {
  newARray.pop();
}
console.log(newARray.length);
console.log(newARray);

// --
// let deletedValuesArray = newARray.splice(1,2);
// // console.log(deletedValuesArray);
// deletedValuesArray.forEach(function(item) {
//   if (item.length > 4) {
//     console.log(item);
//   }
// })

// newARray.splice(1,2);
// newARray.splice(2,1, 'scss');

// newARray.splice(2,0,['10, 15']);
let newARray = ["html", "css", "javascript", "c#"];
newARray.splice(-2, 1, "scss");
console.log(newARray);

// ---
let fruits = ["apple", "mango", "kiwi", "orange"];

//
let newFruistArray = fruits.slice(1, 3);
console.log(newFruistArray);

let newMapFruitsArray = fruits.map((item) => item.toUpperCase());
console.log(newMapFruitsArray);

// ---map
let numbersArray = [100, 14, 25, 6];

let newNumbersArray = numbersArray.map(function (x) {
  return x * 2;
});

let newNumbersArray2 = numbersArray.map((x) => x * 2);

console.log(newNumbersArray);

// filter
let numbersArray2 = [100, 14, 25, 6, 36, 78];

let newFilterArray = numbersArray2.filter(function (y) {
  return y > 20;
});

console.log(newFilterArray);
