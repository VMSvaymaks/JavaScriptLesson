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
  login("true");
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
