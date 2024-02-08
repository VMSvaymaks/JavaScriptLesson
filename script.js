"use strict";
// callback functions, promises, async-functions

//ajax
//1 xml https request

function getUsers() {
  const request = new XMLHttpRequest();
  request.open("GET", "https://reqres.in/api/users?page=2");
  request.addEventListener("lod", function () {
    //console.log(this.responseText);
    const usersInfo = this.responseText;
    const usersInfoReset = JSON.parse(usersInfo);
    console.log(usersInfoReset);
  });
  request.send();
}
getUsers();
