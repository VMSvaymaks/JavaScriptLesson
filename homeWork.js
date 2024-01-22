"use strict";
for (let index = 5; index < 101; index++) {
  if (index == 101) {
    break;
  }
  console.log(index);
}

let array1 = [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];

for (let item of array1) {
  if (item < 1) {
    continue;
  }
  if (item > 10) {
    break;
  }
  console.log(item);
}

let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let item of array2) {
  if (item < 5) {
    continue;
  }
  if (item > 5) {
    break;
  }
  console.log("aris");
}

let array5 = [1, 2, 3, 7, 6, 9];
for (let item of array5) {
  if (item == 7) {
    continue;
  }
  console.log(item);
}

let user = {
  firstNAme: "giorgi",
  lastName: "smith",
  age: 25,
  studentStatus: "active",
};

console.log(user.studentStatus);
console.log(user["studentStatus"]);

let user2 = {
  name: "anna",
  age: 20,
  studentStatus: "active",
};

if (user2["age"] < 18) {
  console.log("hello user");
} else if (user2["name"] == "levani") {
  console.log("hello levani");
} else if (user2["studentStatus"] == "active" || user2["age"] < 25) {
  console.log("hello anna");
} else {
  console.log("error");
}

let resultCondition =
  user2["age"] < 18
    ? "hello user"
    : user2["name"] == "levani"
    ? "hello levani"
    : user2["studentStatus"] == "active" || user2["age"] < 25
    ? "hello anna"
    : "error";
console.log(resultCondition);

let array6 = [2, 3, 5, 10, 25, 24, 11, 100, 6, 7, 10];
for (let item of array6) {
  if (item % 2 == 1) {
    continue;
  }
  console.log(item);
}
