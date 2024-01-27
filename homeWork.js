"use strict";
//1----------------------------------------------------------------
let array = [14, 150, "css", null, "javascript", 25];

let newArray = array.map((item) => {
  if (typeof item === "number") {
    return item * item;
  } else if (typeof item === "string") {
    return item.toUpperCase();
  }
  return item;
});

console.log(newArray);

//2----------------------------------------------------------------

let info = "good day";

let word = info.slice(5);

console.log(word);

//3----------------------------------------------------------------

function stringLength(str) {
  return str.length;
}
let length = stringLength("Hello, world, nice to me to");
console.log(length);

//4----------------------------------------------------------------

//testing
//let name = prompt("Please enter your name:");
//console.log("Hello, " + name + "!");

let userAnswer = prompt("საქართველოს დადაქალაქი?");
let correctAnswer = "თბილისი";
if (userAnswer !== null) {
  userAnswer = userAnswer.trim().toLowerCase();
  if (userAnswer === correctAnswer.toLowerCase()) {
    console.log("სწორია");
  } else {
    console.log("არასწორია");
  }
}

//5---------------------------------------------------------------

let fruits = ["apple", "mango", "avocado", "kiwi"];

fruits.splice(-2, 1, "strawberry");
console.log(fruits);

//6----------------------------------------------------------------

let valueArray = [5, 25, 89, 120, 36];

valueArray.push("javaScript", "python");
valueArray.unshift("HTML", "css");
console.log(valueArray.length, valueArray);

valueArray.shift();
valueArray.pop();
console.log(valueArray.length, valueArray);

//7----------------------------------------------------------------

let fruit = ["orange", "banana", "kiwi"];

console.log(fruit.length, fruit);

fruit.push("apple", "pineapple");
fruit.unshift("watermelon");

console.log(fruit.length, fruit);
fruit.splice(2, 0, "mango");

fruit.shift();
fruit.pop();
console.log(fruit.length, fruit);

//8----------------------------------------------------------------

let array3 = [1, 2, 3, 4, 5];

array3.splice(3, 0, "a", "b", "c");

console.log(array3);

//9----------------------------------------------------------------

let array5 = [12, 25, 3, 6, 8, 14, 7, 23];

let newArrayMap = array5.map((item) => item / 3);

console.log(newArrayMap);

//10----------------------------------------------------------------

let array7 = [15, 100, 25, 10, 36];

let filterArray7 = array7.filter((item) => item !== 10);

console.log(filterArray7);

//11----------------------------------------------------------------

let array8 = [1, 2, 3 , 4 , 5];

array8.splice(2, 1, "three");

console.log(array8);

//12----------------------------------------------------------------

let array1 =["hello1", 14, 24, "hello2"];

let number =  array1.filter((item) => typeof item !== "string");

console.log(number);

//13----------------------------------------------------------------

let array4 = [1, 2, 3, 4, 5];
let sum = 0;

array4.forEach(item =>{
  sum += item;
});

console.log(sum);

//14----------------------------------------------------------------

let languages = ['html', 'css', 'javascript', 'python', 'php'];

let filteredLanguages = languages.filter(element => element.length > 3);
console.log(filteredLanguages);

//15----------------------------------------------------------------

let words = ['Madrid', 'rome', 'Milan', 'berlin'];

let filterWords = words.filter(word => word.includes('m') || word.includes('M'));

console.log(filterWords);
