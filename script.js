let num = 100;
if (num < 50) {
  console.log("<50");
} else if (num > 20) {
  console.log("<20");
} else {
  console.log("error 404");
}

let name1 = "maria's";
let resultCondition1 = name1 == "maria's" ? "true" : "false";
console.log(resultCondition1);

let el5 = 5;
let resultCondition = el5 > 4 ? "true" : "false";
console.log(resultCondition);

const name2 = "maria's";
switch (name2) {
  case "elena":
    console.log(false);
    break;
  case "marco":
    console.log(false);
    break;
  case "maria's":
    console.log(true);
    break;
  default:
    console.log(error);
}

//prompt function

let userAnswer = prompt("Please enter your username");

if (userAnswer % 2 == 0) {
  console.log("true");
} else {
  console.log("false");
}

console.log(userAnswer);

("use strict");
let x = 5;
console.log(x);

//array

let userNames = ["ale", "marco", "mar", "alisa", [36, 54, 67]];
console.log(userNames);

// object

let userInfo = {
  firstName: "marco",
  userAge: 15,
  userStatus: true,
  email: "marco@gmail.com",
  phone: {
    code: 593,
    number: 594678,
  },
  hobbies: [" music", "dance"],
  comments: [
    {
      id: 1,
      text: "hello",
    },
    {
      id: 2,
      text: "hello world",
    },
  ],
};
// dot notation
console.log(userInfo.comments[1].text);
//bracket notation
console.log(userInfo["comments"][1]["text"]);

//-----
let studentInfo = {
  studentName: "marco",
  studentAge: 15,
};

studentInfo.studentAge = 25;
delete studentInfo.studentStatus;
console.log(studentInfo);
//loop-array
let userName = ["marco", "anastasia", "mariana", "student"];
// for loop

for (let i = 0; i < userName.length; i++) {
  console.log(userName[i]);
}

//---
let arrayNumbers = [
  [56, 454, 435],
  [23, 78, 67],
  [3, 148, 5656, 56],
];

for (let index = 0; index < arrayNumbers.length; index++) {
  const element = arrayNumbers[index];
  console.log(element);
  for (let item = 0; item < element.length; item++) {
    const value = element[item];
    console.log(value);
  }
}

let userName3 = ["marco", "anastasia", "mariana", "student"];

for (let item of userName3) {
  console.log(item);
}

for (let key in userName3) {
  console.log(key);
}

for (let item of arrayNumbers) {
  for (let element of item) {
  }
}

//break & continue

let number = 0;

while (true) {
  console.log(number);
  number++;
  if (number == 11) {
    break;
  }
}

let numNewArray = [24, 24, 33, 14, 44, 267];

for (let item of numNewArray) {
  if (item == 44) {
    break;
  }
  console.log(item);
}

//--
for (let i = 0; i < 5; i++) {
  if (i == 3) {
    continue;
  }
  console.log(i);
}

let numArray5 = [15, 4, 5, 456, 54, 757, 57];

for (let index = 0; index < numArray5.length; index++) {
  const element = numArray5[index];
  if (element > 30) {
    console.log(element);
  }
}

//comparison operation
console.log(5 == 5); // true
console.log(5 == 5); // true
console.log(5 === "5"); //false

// Function

let array4 = [1, 2, 3, 4, 5];
let sum = 0;
for (let item of array4) {
  sum += item;
}
console.log(sum);

//---
let user = {
  userName: "anna",
  userAge: 18,
};

let printName = user.userName + "are" + user.userAge + " years old";
let printName2 = "${user.userName}are ${user.userAge} years old";
console.log(printName2);

//loop object
let user2 = {
  userName: "anna",
  userAge: 18,
};

for (let key in user2) {
  console.log(user2[key]);
}

// object.keys() object.value() object.entries()

//--------------------------------

//function decoration == hoisted
function testFcn(x, y) {
  return x + y;
}
let result = testFcn(15, 54);
console.log(result);

//function expression == not hoisted
let fnc2 = function () {
  console.log("hello2");
};

fnc2();

//function arrow == not hoisted
let fnc3 = () => x + y;
let resultFnc3 = fnc3(5, 13);
console.log(resultFnc3);

//var ->> hoisted
// let & const ->> not hoisted

//----------------------------------------------------------------

//scope
//1. global

//2. function on local

//3. block

//----

function getAge(birthYear) {
  let age = 2024 - birthYear;

  function printAge() {
    let info = `You are ${age}, born in ${birthYear}`;
    console.log(info);
  }
  printAge();
  return age;
}
let resultGerAge = getAge(2003);
console.log(resultGerAge);

//closure

// method array

//forEach
// splice
//slice
//map
//filter

//----------------------------------------------------------------

// LESSON  5 ----------------
// reverse
let array = ["banana", "apple", "mango"];
array.reverse();
console.log(array);

// indexOf

let array2 = ["banana", "apple", "mango"];
console.log(array2.indexOf("apple"));

//every & some / true & false
let array3 = [100, 5, 15, 36, 100].every((number) => number < 100);

let condition = (number) => number < 110;

let result1 = array3.some(condition);
console.log(result1);

//concat
let names1 = ["pomeranian", "pineapple", "mango"];
let names2 = ["banana", "apple", "targum"];
let allNames = names2.concat(names1);
console.log(allNames);

//reduce
let arrayReduce = [
  [0, 1],
  [2, 3],
  [4, 5],
].reduce(function (accumulator, currentValue) {
  return accumulator.concat(currentValue);
}, []);

//[].concat([0,1]) => [0, 1];
//[0,1].concat([2,3]) => [0, 1, 2, 3]
//[0,1,2,3].concat([4,5]) => [0, 1, 2, 3, 4, 5]

console.log(arrayReduce); //[0, 1, 2, 3, 4, 5]

//----------------------------------------------------------------
//  string methods

let value = "hello";

console.log(value.length);
console.log(value.endsWith('o'));
console.log(value.startsWith('h'));
console.log(value.includes('a'));
console.log(value.toUpperCase());
console.log(value.toLowerCase());
console.log(value.trim());


let value2 = "hello";

console.log(value2.indexOf('l'));
console.log(value2.lastIndexOf('l'));
console.log(value2.indexOf('a'));

console.log(value2.charAt(1));
console.log(value2.charAt(value2.length -1));


// slice
let value3 = "hello";

console.log(value3.slice(1,3));
console.log(value3.substring(1,3));

//split
let stringValue = "abcd";
console.log(stringValue.split(""));


//----
let numbers = '123456789';
let numResult1 = numbers.split("").reverse().join("");
console.log(numResult1);

//--------------------------------
let text = 'I\'m 30 years old';
let text2 = "I like \"name\" ";
console.log(text2);


// DOM

//console.log(newElementJs);
//Document.body.appendChild(newElementJs);

document.getElementsById('wrapper').appendChild(newElementJs);
let newElementJs = document.createElement('p');

let newDIvElement = document.createElement('div');
newDIvElement.classList.add('container');

let link = Document.createElement('a');
link.setAttribute('href', 'https://google.com');
link.setAttribute('target', '_blank');


document.querySelector('wrapper').appendChild(link);
document.querySelectorAll('wrapper').appendChild(link);
