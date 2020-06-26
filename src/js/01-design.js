"use strict";
console.log("partial 1");

//selectors

const inputName = document.querySelector(".input__name");
const inputPosition = document.querySelector(".input__position");

function addInfo(event) {
  const inputValue = event.target.value;
  document.querySelector(".js-" + event.target.name).innerHTML = inputValue;
  console.log(".js-" + event.target.name);
}

inputName.addEventListener("keyup", addInfo);
inputPosition.addEventListener("keyup", addInfo);
