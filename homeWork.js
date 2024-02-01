"use strict";
//1----------------------------------------------------------------

function checkHTTPS(link) {
  return link.indexOf("https://") !== -1;
}
let link = "https://google.com";
console.log(checkHTTPS(link));

//2----------------------------------------------------------------

var div = document.createElement("div");
div.setAttribute("class", "wrapper");
div.setAttribute("id", "myWrapper");
var img = document.createElement("img");
img.setAttribute(
  "src",
  "https://ichef.bbci.co.uk/news/999/cpsprodpb/15951/production/_117310488_16.jpg"
);
img.setAttribute("alt", "image");
var h2 = document.createElement("h2");
h2.setAttribute("class", "title");
h2.textContent = "Perfect";
h2.style.color = "red";
h2.style.fontSize = "30px";
div.appendChild(img);
div.appendChild(h2);
document.body.appendChild(div);

//3----------------------------------------------------------------

function addParagraph(containerId, text) {
  var container = document.getElementById(containerId);
  var paragraph = document.createElement("p");
  paragraph.setAttribute("class", "text");
  paragraph.textContent = text;
  container.appendChild(paragraph);
}
addParagraph("div1", "hello");
addParagraph("div2", "hello");
addParagraph("div3", "hello");

//4----------------------------------------------------------------

let array = [-1, -2, -3, 4];
let isPositive = array.some((num) => num > 0);
console.log(isPositive);

//5----------------------------------------------------------------

let str = "12345";
let sum = 0;

let array1 = str.split("");
for (let i = 0; i < array1.length; i++) {
  sum += parseInt(array1[i]);
}
console.log(sum);

//6----------------------------------------------------------------

let numbers = [4, 55, 65, 8, 3];
sum1 = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(sum1);

//----------------დამატებითად ძალიან დამაინტერესა ))-----------------------------\\

function collatSequence(n) {
  let steps = 0;
  while (n !== 1) {
    if (n % 2 === 0) {
      n /= 2;
    } else {
      n = 3 * n + 1;
    }
    steps++;
  }
  return steps;
}

function generateArray(start, end) {
  const result = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
}

function applyCollat(array) {
  const result = [];
  array.forEach((num) => {
    let steps = collatSequence(num);
    result.push(steps);
  });
  return result;
}

const myArray = generateArray(5, 104);
const stepsArray = applyCollat(myArray);
console.log(stepsArray);
