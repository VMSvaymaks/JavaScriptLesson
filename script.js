let num = 100;
if (num < 50) {
  console.log("<50");
} else if (num > 20) {
  console.log("<20");
} else {
  console.log("error 404");
}

let name = "maria's";
let resultCondition1 = "maria's" ? "true" : "false";
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
