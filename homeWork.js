"use strict";

const elements = document.getElementById("value-port");

function getElements() {
  const reqsuist = new XMLHttpRequest();

  reqsuist.open("GET", "https://reqres.in/api/unknown");
  reqsuist.addEventListener("load", function () {
    const returnInfo = this.responseText;
    const returnInfoJs = JSON.parse(returnInfo);
    console.log(returnInfoJs);
    const ulElement = document.createElement("ul");

    returnInfoJs.data.forEach((element) => {
      // console.log(element);
      const li = document.createElement("li");
      li.textContent = `${element.name} ${element.color}`;
      ulElement.appendChild(li);
    });
    elements.appendChild(ulElement);
  });
  reqsuist.send();
}
getElements();
