"use strict";

//prompt
// let userAnswer = Number(prompt('Enetr Number'));

// if (userAnswer % 2 == 0) {
//   console.log('ლუწია');
// } else {
//   console.log('kenti');
// }

//array
// let userNames = ['anna',25, 'nika', null, true, 'lasha', 'nino'];
//               //   0        1       2       3

// console.log(userNames[userNames.length - 2]);

//object
let userInfo = {
  firstName: "mariami",
  userAge: 25,
  userStatus: true,
  email: "name@gmail.com",
  phone: {
    code: 593,
    number: 211544,
  },
  hobbies: ["music", "dance"],
  comments: [
    {
      id: 1,
      text: "Hello1",
    },
    {
      id: 2,
      text: "Hello2",
    },
  ],
};

// 1. dot notation
console.log(userInfo.comments[1].text);

// 2. bracket notation
console.log(userInfo["comments"][1]["text"]);

// ----
let studentInfo = {
  studentName: "anni",
  studentAge: 25,
};

studentInfo.studentAge = 26;
studentInfo.studentStatus = "female";
delete studentInfo.studentName;

console.log(studentInfo);

// loop - array
let userNames = ["anna", "mariami", "levani", "nika", "nini"];

// 1. for loop

for (let i = 0; i < userNames.length; i++) {
  console.log(userNames[i]);
}
// i++ => i = i + 1

// ---
let arrayNumbers = [
  [150, 12, 14],
  [13, 10, 7],
  [25, 14],
];

for (let index = 0; index < arrayNumbers.length; index++) {
  const element = arrayNumbers[index];
  // console.log(element);
  for (let item = 0; item < element.length; item++) {
    const value = element[item];
    console.log(value);
  }
}

for (let item of arrayNumbers) {
  // console.log(item);
  for (let element of item) {
    console.log(element);
  }
}

// --- while

let userNames2 = ["anna", "mariami", "levani", "nika", "nini"];

let index = 0;
while (index < userNames2.length) {
  console.log(userNames2[index]);
  index++;
}

// for
let userNames3 = ["anna", "mariami", "levani", "nika", "nini"];

for (let item of userNames3) {
  console.log(item); //values
}

for (let key in userNames3) {
  console.log(key); //index
}

//break & continue
let number = 0;

while (true) {
  console.log(number);
  number++;
  if (number == 10) {
    break;
  }
}

let numbersNewArray = [25, 36, 100, 14, 5];

for (let item of numbersNewArray) {
  if (item == 14) {
    continue;
  }
  console.log(item);
}

//----
for (let i = 0; i < 5; i++) {
  if (i == 3) {
    continue;
  }
  console.log(i); //0 1 2 4
}

// --- practice
// 1.
let numbersArray5 = [15, 14, 23, 36, 9, 25];

for (let index = 0; index < numbersArray5.length; index++) {
  const element = numbersArray5[index];
  // console.log(element);
  if (element > 30) {
    console.log(element);
  }
}

for (let item of numbersArray5) {
  if (item > 30) {
    console.log(item);
  }
}

// 2.
let languages = ["html", 25, "css", true, "js"];

for (let index = 0; index < languages.length; index++) {
  const element = languages[index];

  if (typeof element == "string") {
    console.log(element);
  }
}

for (let x of languages) {
  if (typeof x == "number") {
    console.log(x);
  }
}

//comparison operators
// == // ===

console.log(5 == 5); //true
console.log(5 == "5"); //true

console.log(5 === "5"); //false
