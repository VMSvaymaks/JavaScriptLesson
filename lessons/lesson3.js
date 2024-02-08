"use strict";

//lesson 3
//h.w
// let array3 = [1, 2, 3, 4, 5];

// let sum = 0;
// for (let item of array3) {
//   // sum = sum + item;
//   sum += item;
// }

// let result = sum / array3.length;
// console.log(result);

//-----
// let user = {
//   userName: 'anna',
//   userAge: 18
// }

// let printName = user.userName + " " + 'არის' + " " + user.userAge + " " + 'წლის';
// let printName2 = `${user.userName} არის ${user.userAge} წლის`;

// console.log(printName);
// console.log(printName2);

// -----
// loop object
// let user2 = {
//   userName: 'anna',
//   userAge: 18
// }

// for (let key in user2) {
//   // console.log(key);
//   console.log(user2[key]);
// }

//object.keys() object.values() object.entries()

// console.log(Object.entries(user2));

// for (let [key,value] of Object.entries(user2)) {
//   console.log(key);
//   console.log(value);
// }

//function

// 1. function declaration -> hoisted

function testFnc(x, y) {
  return x + y;
}

let result = testFnc(5, 30);
console.log(result);

// 2. function expression -> not hoisted
let Fnc2 = function (x) {
  console.log("hello2");
};

Fnc2();
// 3. arrow function -> not hoisted

let Fnc3 = (x, y) => x + y;

let resultFnc3 = Fnc3(4, 10);
console.log(resultFnc3);

// var -> hoisted
//let & const -> not hoisted

// ---
function numberFnc(number) {
  if (number == 5) {
    console.log("Hello");
    return "გამოძახების დროს გადაეცი რიცხვი 5";
    console.log("HelloNew");
  } else if (number == 10) {
    console.log("hello2");
    return "გამოძახების დროს გადაეცი რიცხვი 10";
  }
  return "error";
}

let numberFncResult = numberFnc(5);
console.log(numberFncResult);

// ----declaration
function getAge(birthYear, YearNow) {
  // return YearNow - birthYear;
  let userAGe = YearNow - birthYear;
  return userAGe;
}

let resultgetAge = getAge(2003, 2024);
console.log(resultgetAge);

//--- expression
let getAge2 = function (birthYear, YearNow) {
  return YearNow - birthYear;
};

let resultgetAge2 = getAge2(1994, 2024);
console.log(resultgetAge2);

// ---arrow function
let getAge3 = (birthYear, YearNow) => {
  let age = YearNow - birthYear;

  //  if (age > 18) {
  //   return 'სრულწლოვანი'
  //  }
  //  return 'araswulwlovani'

  let ageResult = age > 18 ? "სრულწლოვანი" : "araswulwlovani";
  return ageResult;
};

let resultGetAge3 = getAge3(1994, 2024);
console.log(resultGetAge3);

// ---
function sumNumbers(...numbers) {
  let numbersSum = 0;
  for (let item of numbers) {
    // numbersSum = numbersSum + item;
    numbersSum += item;
  }

  return numbersSum;
}

let resultSumNumbers = sumNumbers(15, 25, 36, 18, 19, 20);
let resultSumNumber2 = sumNumbers(100, 2);

console.log(resultSumNumbers);
