//variables

let userName = "anna"; //string
let userAge = 25; //number
let userStatus = false; //boolean true = 1; false = 0
let x = null; //null
let y; //undefined

console.log(typeof userAge);
console.log(typeof userName);
console.log(typeof x);

//let & const
// const fisrtName = 'mariami';

// fisrtName = 'nino';
// console.log(fisrtName); //error

//
let number1 = "Good";
let number2 = "Evening";
let sum = number1 + " " + number2;

console.log(sum);

let a = 4;
a += 5; // a = a + 5
console.log(a);

let el1 = true;
console.log(!el1);

//comparison operators
console.log(5 == 5); //true
console.log(15 >= 50); //false

//logical operators
// && - და
// || - ან

console.log(true && false); //false
console.log(true && true); //true
console.log(false && true); //false
console.log(true && "hello world"); //hello world
console.log(false && "hello world"); //false

console.log(true || true); //true
console.log(true || false); //true
console.log(false || true); //true
console.log(false || false); //false

//false values
// "" false undefined null NaN 0 -0
console.log(" " && "hello world"); //""
console.log(undefined && "hello"); //udnefined

//type conversion
// 1. explicit
let item1 = String(10);
console.log(item1);
console.log(typeof item1);

let item2 = true.toString();
console.log(typeof item2);
console.log(item2.length);

let item3 = Number("10");
console.log(typeof item3);

let item4 = Number(false); //0
let item5 = Number(true); //1
let item6 = Number(null); //0
let item7 = parseInt("text"); //NaN

console.log(item7);

// 2. implicit
let item8 = "10";
let item9 = 5;
let result = item8 - item9;

console.log(result);
console.log(typeof result);

//conditional statement - if
let element = 15;

if (element > 25) {
  console.log("hello1");
} else if (element > 10 && element > 5) {
  console.log("hello2");
} else if (element < 50) {
  console.log("hello3");
} else {
  console.log("error");
}

//ternary operator
let el5 = 5;

// if (el5 > 3) {
//     console.log('hello');
// } else {
//     console.log('error');
// }

let resultCondition =
  el5 < 3
    ? "hello"
    : el5 < 10
    ? "hello2"
    : el5 > 50
    ? "hello3"
    : el5 > 35
    ? "Hello4"
    : "error";

console.log(resultCondition);

//switch
let expr = "Bananas";

switch (expr) {
  case "Oranges":
    console.log("Oranges are $0.59 a pound.");
    break;
  case "Apples":
    console.log("Apples are $0.32 a pound.");
    break;
  case "Bananas":
    console.log("Bananas are $0.48 a pound.");
    break;
  case "Cherries":
    console.log("Cherries are $3.00 a pound.");
    break;
  case "Mangoes":
  case "Papayas":
    console.log("Mangoes and papayas are $2.79 a pound.");
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}
