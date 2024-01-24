"use strict";
// 1 დავალება
var resultSumNumbers = firstSum([10, 50, 6, 7, 8, 11, 6, 3, 9]);
function firstSum(numbers) {
  var sum = 0;
  for (const item of numbers) {
    sum += item;
  }
  return sum;
}
console.log(resultSumNumbers);

//----------------------------------------------------------------

const secondSum = //[10, 50, 6, 7, 8, 11, 6, 3, 9] მაინტერესებს თუ შეიძლება ერთ ცვლადში მოვათავსო მასივი და ფუნქცია?
  function secondSumFnc(numbers) {
    var sum = 0;
    for (const item of numbers) {
      sum += item;
    }
    return sum;
  };
var resultSumNumbers = secondSumFnc([10, 50, 6, 7, 8, 11, 6, 3, 9]);
console.log(resultSumNumbers);

//----------------------------------------------------------------

let thirdSum = (...numbers) => {
  let sum = 0;
  for (let items of numbers) {
    sum += items;
  }
  return sum;
};
var resultSumNumbers = thirdSum(10, 50, 6, 7, 8, 11, 6, 3, 9);
console.log(resultSumNumbers);

//----------------------------------------------------------------

// 2 დავალება

function getFullName(user) {
  if (user.isLoggedIn) {
    return `${user.firstname} ${user.lastname}`;
  } else {
    return false;
  }
}

let user = {
  firstName: "giorgi",
  lastName: "saakadze",
  age: 32,
  isLoggedIn: true,
};

let result = getFullName(user);
console.log(result);

//----------------------------------------------------------------

// 3 დავალება

function findMaxNumber(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    return "შეუძლებელია მასივის გადაცემა";
  }

  let maxNumber = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > maxNumber) {
      maxNumber = numbers[i];
    }
  }

  return maxNumber;
}

let numbersArray = [7, 2, 9, 1, 4, 6];
let result2 = findMaxNumber(numbersArray);
console.log(result2);

//-----------------------------------------------------------------

// 4 დავალება

function checkOddEven(number) {
  if (typeof number !== "number") {
    return "შეუძლებელია რიცხვის გადაცემა";
  }

  //if (number % 2 === 0) {
  //  return "this number is even";
  //} else {
  //  return "this number is odd";
  //}
  let numberOdd =
    number % 2 === 0 ? "this number is even" : "this number is odd";
  return numberOdd;
}

let resultOdd = checkOddEven(8);
console.log(resultOdd);

let resultOdd2 = checkOddEven(7);
console.log(resultOdd2);

//-----------------------------------------------------------------

// 5 დავალება

let array = [1, 2, 3, 4, 5];
let reversedArray = [];

for (let i = array.length - 1; i >= 0; i--) {
  reversedArray.push(array[i]);
}

console.log(reversedArray);

//-----------------------------------------------------------------

// 6 დავალება

const calculateUserStatus = (age) =>
  age > 18 ? "სრულლოვანი" : "არასწორელწლოვანი";
const userAge = 27;
const userStatus = calculateUserStatus(userAge);
console.log(userStatus);
