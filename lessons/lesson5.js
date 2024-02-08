"use strict";

//lesson 5
//reverse
// let array1 = ['banana', 'apple', 'mango'];

// array1.reverse();
// console.log(array1);

//indexOf
let array2 = ["banana", "apple", "mango"];

console.log(array2.indexOf("apple"));

// every & some

let array3 = [100, 5, 15, 160, 36].every((number) => number < 110);

console.log(array3);

//concat
let names1 = ["anna", "lasha", "beka"];
let names2 = ["nini", "mariami"];

let allnames = names1.concat(names2);
console.log(allnames);

//reduce
let arrayReduce = [
  [0, 1],
  [2, 3],
  [4, 5],
].reduce(function (accumulator, currentValue) {
  return accumulator.concat(currentValue);
}, []);

// [].concat([0,1]) => [0,1]
// [0,1].concat([2,3]) => [0,1,2,3]
// [0,1,2,3].concat([4,5]) => [ 0, 1, 2, 3, 4, 5 ]
console.log(arrayReduce);
//[0,1,2,3,4,5]

//
let arrayNew = [
  [15, -23, 25],
  [-9, -7, 12],
].reduce(function (accumulator, currentValue) {
  return accumulator.concat(currentValue);
}, []);

// console.log(arrayNew);

let newArrayFilter = arrayNew.filter((item) => item > 0);

console.log(newArrayFilter);

//string methods
let value = "       Hello      ";

console.log(value.length); //5
console.log(value.endsWith("o")); //true
console.log(value.startsWith("L")); //false
console.log(value.includes("a")); //false
console.log(value.toUpperCase()); //HELLO
console.log(value.toLowerCase()); //hello
console.log(value.trim());

let firstName = "anna";
let lastName = "smith";

let resultConcatString = firstName.concat(" ", lastName);
console.log(resultConcatString);

//
// let value2 = "Hello";

// console.log(value2.indexOf('l'));
// console.log(value2.lastIndexOf('l'));
// console.log(value2.indexOf('a')); //-1

//
let value2 = "Hello";
console.log(value2.charAt(1)); //e
console.log(value2.charAt(value2.length - 1)); //o

// slice
let value3 = "Hello";
console.log(value3.slice(1, 3)); //el
//
console.log(value3.substring(1, 3)); //el

// split
let stringValue = "ABCD";

console.log(stringValue.split(""));

// ---
let number = "12345";

// let numberResult1 = number.split('');
// let numberResult2 = numberResult1.reverse();
// let numberResult3 = numberResult2.join("");

let sabolooShedegi = number.split("").reverse().join("");

console.log(sabolooShedegi);

//
let text = "I'm 30 years old";
let text2 = 'i Like "Movie Name" ';

console.log(text);

// hw
let words = ["Madrid", "rome", "Milan", "berlin"];

let wordsResult = words.filter((item) => item.toLowerCase().includes("m"));

console.log(wordsResult);

// // prompt
// let userAnswer = prompt("საწართველოს დედაქალაქი");
// let correctAnswer = "tbilisi";

// let lowAnswer = userAnswer.toLowerCase();

// if (lowAnswer === correctAnswer) {
//   console.log("ok");
// } else {
//   console.log("not ok");
// }

// dom
let newElement = document.createElement("p");
// newElement.setAttribute('class', 'text');
newElement.classList.add("test1", "test2");
newElement.classList.replace("test2", "description");
newElement.classList.remove("test1");
// newElement.innerText = 'Hello World';
newElement.textContent = "Hello Wordl";
newElement.style.backgroundColor = "yellow";

document.getElementById("wraper").appendChild(newElement);

// ----
let newDivElement = document.createElement("div");
newDivElement.classList.add("container");

let link = document.createElement("a");
link.setAttribute("href", "https://google.com");
link.setAttribute("target", "_blank");
link.textContent = "Hello";

newDivElement.appendChild(link);
document.getElementById("wraper").appendChild(newDivElement);

// ---

let divArray = document.querySelectorAll(".test");

divArray.forEach(function (item) {
  let link2 = document.createElement("a");
  link2.setAttribute("href", "https://google.com");
  link2.setAttribute("target", "_blank");
  link2.textContent = "Hello";

  item.appendChild(link2);
});



// document.querySelector('#')
// document.querySelector('.')

//innerText & innerHtml
document.getElementById('block').innerHTML = '<p>World</p>';
