// "use strict";

//lesson 6

//events
const btn = document.getElementById("click-btn");

btn.addEventListener("click", function () {
  document.body.classList.toggle("body-new");
  // document.body.style.backgroundColor = 'yellow';
});

// -----
// const buttons = document.querySelectorAll('.submit-btn');

function btnOnClick() {
  alert("hello");
}

// buttons.forEach(function(item) {
//   item.addEventListener('click', btnOnClick)
// })

// ----
const mainBtnDiv = document.querySelector(".btn-wraper");

mainBtnDiv.addEventListener("click", btnOnClick);

// focus
const inputElement = document.getElementById("username");

inputElement.addEventListener("focus", function () {
  inputElement.style.outline = "none";
});

inputElement.addEventListener("keyup", function (event) {
  console.log(event.target);
  event.target.style.border = "2px solid green";
});

// ----
const divBox = document.getElementById("boxElement");

divBox.addEventListener("click", function (event) {
  // console.log(event.target);
  // event.target.style.backgroundColor = "yellow";
  console.log(event.currentTarget);
});

document.getElementById("btn-delete").addEventListener("click", function (e) {
  e.stopPropagation();
  console.log(e.target);
});

// ----
document.getElementById("link").addEventListener("click", function (e) {
  e.preventDefault();
});

//to do List
const inputElementToDo = document.getElementById("itemInput");
const addButtonToDo = document.querySelector(".btn");
const ulItems = document.querySelector(".ul-lists");
const deleteAll = document.getElementById("clearAll");
const formElement = document.getElementById('formElement');


formElement.addEventListener("submit", function (e) {
  e.preventDefault();
  // 1.get input value
  const valueInput = inputElementToDo.value;



  // 2. input value -> li > ul
  const li = document.createElement("li");

  //
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete This Item";
  deleteBtn.addEventListener("click", function () {
    li.remove();
  });

  li.textContent = valueInput;

  li.appendChild(deleteBtn);
  ulItems.appendChild(li);

  // 3.clear input value
  inputElementToDo.value = " ";
});

deleteAll.addEventListener("click", function () {
  ulItems.innerHTML = " ";
});



// burger bar
const nav = document.getElementById('navBar');
const burger = document.getElementById('burgerBar');


burger.addEventListener('click', function(){
  nav.classList.toggle('activeNav')
})


// this
// 1. default binding

function test() {
  console.log(this);
}

test(); //window

// 2 implicit binding

const user = {
  userName: 'nini',
  printName: function() {
    console.log(this.userName);
  }
}

user.printName();

// 3.explicit binding
function personInfo(x,y) {
  console.log(this);
  console.log(x,y);
}

personInfo.apply( {}, ['HelloX', 'HelloY']);


const user1 = {
  userName: 'lasha'
}

const user3 = {
  userName: 'mariami'
}

const user2 = {
  userName: 'anna',
  printName: function() {
    console.log(this.userName);
  }
}

const printNameFnc = user2.printName.bind(user3);

printNameFnc();


// 
const objNew = {
  name: 'mari',
  printName: () => {
    console.log(this);
  }
}

objNew.printName();