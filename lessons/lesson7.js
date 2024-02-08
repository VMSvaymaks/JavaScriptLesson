"use strict";

//lesson 7

//to do List
const inputElementToDo = document.getElementById("itemInput");
const addButtonToDo = document.querySelector(".btn");
const ulItems = document.querySelector(".ul-lists");
const deleteAll = document.getElementById("clearAll");
const formElement = document.getElementById("formElement");

formElement.addEventListener("submit", function (e) {
  e.preventDefault();
  // 1.get input value
  const valueInput = inputElementToDo.value;

  // 2. input value -> li > ul
  const li = document.createElement("li");

  //
  // const deleteIcon = document.createElement('i');
  // deleteIcon.classList.add('fa-solid', 'fa-trash');
  const deleteDiv = document.createElement("div");
  deleteDiv.innerHTML = '<i class="fa-solid fa-trash"></i>';
  deleteDiv.addEventListener("click", function () {
    li.remove();
  });

  li.textContent = valueInput;

  li.appendChild(deleteDiv);
  ulItems.appendChild(li);

  // 3.clear input value
  inputElementToDo.value = " ";
});

deleteAll.addEventListener("click", function () {
  ulItems.innerHTML = " ";
});

//
const box = document.getElementById("boxElement");

box.addEventListener("click", function (event) {
  // event.target.style.backgroundColor = 'red';
  // event.currentTarget.style.backgroundColor = 'red';
  this.style.backgroundColor = "red";
});

//
const input = document.getElementById("inpuElmn");

input.addEventListener("focus", function (e) {
  // this.style.outline = "none";
  e.target.style.outline = "none";
  console.log(e.target);
  console.log(this);
});

input.addEventListener("keyup", function () {
  this.style.border = "2px solid green";
});

// accordion
const divAccordion = document.querySelectorAll(".container");

// divAccordion.forEach(function (item) {
//   item.addEventListener("click", function (e) {
//     this.classList.toggle("active");
//     // e.currentTarget.classList.toggle('active')
//     // console.log(this);
//   });
// });

//
for (let item of divAccordion) {
  item.addEventListener("click", function (e) {
    this.classList.toggle("active");
  });
}

// ajax
// 1. xml http requist
const div = document.getElementById("api-users");

function getUsers() {
  const reqsuist = new XMLHttpRequest();

  reqsuist.open("GET", "https://reqres.in/api/users?page=2");

  reqsuist.addEventListener("load", function () {
    // console.log(this);
    // console.log(this.responseText);
    const mosuliInfo = this.responseText;
    const mosuliInfoRogrocJs = JSON.parse(mosuliInfo);
    console.log(mosuliInfoRogrocJs);
    const ulElement = document.createElement("ul");

    // mosuliInfoRogrocJs.data.forEach((element) => {
    //   // console.log(element);
    //   const li = document.createElement("li");
    //   // li.textContent = element.first_name + element.last_name;
    //   li.textContent = `${element.first_name} ${element.last_name}`;
    //   ulElement.appendChild(li);
    // });
    let li = document.createElement('li');
    li.textContent = mosuliInfoRogrocJs.data[3].email;
    ulElement.appendChild(li);

    div.appendChild(ulElement);
  });
  reqsuist.send();
}

getUsers();

// 2. fetch
