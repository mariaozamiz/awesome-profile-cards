"use strict";
console.log("partial 1");

//selectors

const inputName = document.querySelector(".input__name");
const inputPosition = document.querySelector(".input__position");

function addInfo() {
  addInfo2("name", "Nombre Apellido");
  addInfo2("position", "Front End Developer");
}

function addInfo2(name, placeholder) {
  const inputValue = document.querySelector(".js-input-" + name).value;
  document.querySelector(".js-" + name).innerHTML = inputValue;
  console.log(inputValue);
  if (!inputValue) {
    document.querySelector(".js-" + name).innerHTML = placeholder;
  }
}

inputName.addEventListener("keyup", addInfo);
inputPosition.addEventListener("keyup", addInfo);

//color-palette

//Guardamos los inputs
const inputPalette1 = document.querySelector(".js_palette1");
const inputPalette2 = document.querySelector(".js_palette2");
const inputPalette3 = document.querySelector(".js_palette3");

//Cuando la llamamos borra las clases de los elementos que se añaden al seleccionar o que ya tenían
function removeClassesFromElement(element, property) {
  element.classList.remove(`js_palette1${property}`);
  element.classList.remove(`js_palette2${property}`);
  element.classList.remove(`js_palette3${property}`);
}

//Lo mismo que removeClassesFromElement para más de un elemento (array de iconos)
function removeClassesFromElements(elements, property) {
  for (let i = 0; i < elements.length; i++) {
    removeClassesFromElement(elements[i], property);
  }
}

//Añade una clase a una lista de elementos (array)
function addClassToElements(elements, classToAdd) {
  for (let i = 0; i < elements.length; i++) {
    elements[i].classList.add(classToAdd);
  }
}

//Cambia el color
function changeToPalette(event) {
  // Cogemos los elementos por clase
  const cardPreviewName = document.querySelector(".js-name");
  const cardPreviewBorderBox = document.querySelector(".js-border-box");
  const cardPreviewIcons = document.querySelectorAll(".js-icon");
  const cardPreviewIconsContainer = document.querySelectorAll(
    ".js-icon-container"
  );

  //Borramos las clases que ya no queremos con las funciones previamente declaradas
  removeClassesFromElement(cardPreviewName, "_color");
  removeClassesFromElement(cardPreviewBorderBox, "_border_box");
  removeClassesFromElements(cardPreviewIcons, "_color");
  removeClassesFromElements(cardPreviewIconsContainer, "_border_color");

  //Añadimos las clases basándonos en la clase del checkbox que se seleccionó
  cardPreviewName.classList.add(`${event.target.className}_color`);
  cardPreviewBorderBox.classList.add(`${event.target.className}_border_box`);
  addClassToElements(cardPreviewIcons, `${event.target.className}_color`);
  addClassToElements(
    cardPreviewIconsContainer,
    `${event.target.className}_border_color`
  );
}

//Añadimos los escuchadores a los checkbox
inputPalette1.addEventListener("change", changeToPalette);
inputPalette2.addEventListener("change", changeToPalette);
inputPalette3.addEventListener("change", changeToPalette);

// media

const inputEmail = document.querySelector(".form__email");
const inputLinkedin = document.querySelector(".form__linkedin");
const inputGithub = document.querySelector(".form__github");
const inputPhone = document.querySelector(".form__phone");

function addHref(event) {
  const inputValue = event.target.value;
  if (event.target.name === "email") {
    document.querySelector(
      ".js-" + event.target.name
    ).href = `mailto:${inputValue}`;
  } else if(event.target.name==="phone"){
    document.querySelector(".js-"+ event.target.name).href= `tel:+34${inputValue}`;
    console.log(`tel:+34${inputValue}`);
  } else {
    document.querySelector(".js-" + event.target.name).href = `${inputValue}`;
  }
}

inputEmail.addEventListener("keyup", addHref);
inputLinkedin.addEventListener("keyup", addHref);
inputGithub.addEventListener("keyup", addHref);
inputPhone.addEventListener("keyup",addHref);

//Collapsable

/* const collapsable = document.querySelectorAll(".js-collapsable");
function collapse(event){
collapsable.classList.toggle(".content");
console.log(collapsable);
}


collapsable.addEventListener("click", collapse);

 */

// Boton clear

const cardPreviewName = document.querySelector(".js-name");
const cardPreviewBorderBox = document.querySelector(".js-border-box");
const cardPreviewIcons = document.querySelectorAll(".js-icon");
const cardPreviewIconsContainer = document.querySelectorAll(
  ".js-icon-container"
);

const clearButton = document.querySelector(".js-clear-button");

function handleClearButtonClick() {
  document.querySelector(".js-form").reset();
  addInfo();
  // cardPreviewName.innerHTML = "";
}

clearButton.addEventListener("click", handleClearButtonClick);
