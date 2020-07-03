'use strict';

let data = {
  name: '',
  job: '',
};

//selectors

const inputName = document.querySelector('.input__name');
const inputJob = document.querySelector('.input__job');

function readForm() {
  data.name = document.querySelector('.js-input-name').value;
  data.job = document.querySelector('.js-input-job').value;

  updateCard();
}

inputName.addEventListener('keyup', readForm);
inputJob.addEventListener('keyup', readForm);

function updateCard() {
  updateCardItem('name', 'Nombre Apellido');
  updateCardItem('job', 'Front End Developer');

  // updateCardItem('linkedin', 'https://linkeding/in/', 'href');
  // updateCardItem('github', 'https://github.com/', 'href');
  // updateCardLink('github', 'https://github.com/', 'href');
}

function updateCardItem(propertyName, placeholder) {
  const inputValue = data[propertyName];
  let cardValue;
  if (inputValue) {
    cardValue = inputValue;
  } else {
    cardValue = placeholder;
  }

  document.querySelector('.js-' + propertyName).innerHTML = cardValue;
}

// function updateCardLink(propertyName, placeholder) {
//     const inputValue = data[propertyName];
//     let cardValue;
//     if (inputValue) {
//         cardValue = inputValue;
//     } else {
//         cardValue = placeholder;
//     }
//     document.querySelector('.js-' + propertyName).href = cardValue;
// }

//color-palette

//Guardamos los inputs
const inputPalette1 = document.querySelector('.js_palette1');
const inputPalette2 = document.querySelector('.js_palette2');
const inputPalette3 = document.querySelector('.js_palette3');
const inputPalette4 = document.querySelector('.js_palette4');
const inputPalette5 = document.querySelector('.js_palette5');

//Guardamos los inputs desde design.html
//const inputPalette1 = document.querySelector(".js_palette1");
//const inputPalette2 = document.querySelector(".js_palette2");
//const inputPalette3 = document.querySelector(".js_palette3");

//Cuando la llamamos borra las clases de los elementos que se añaden al seleccionar o que ya tenían (ahora en card preview)
function removeClassesFromElement(element, property) {
  element.classList.remove(`js_palette1${property}`);
  element.classList.remove(`js_palette2${property}`);
  element.classList.remove(`js_palette3${property}`);
  element.classList.remove(`js_palette4${property}`);
  element.classList.remove(`js_palette5${property}`);
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
  console.log(event.target.className);
  const cardPreviewName = document.querySelector('.js-name');
  const cardPreviewBorderBox = document.querySelector('.js-border-box');
  const cardPreviewIcons = document.querySelectorAll('.js-icon');
  const cardPreviewIconsContainer = document.querySelectorAll(
    '.js-icon-container'
  );

  //Borramos las clases que ya no queremos con las funciones previamente declaradas
  removeClassesFromElement(cardPreviewName, '_color');
  removeClassesFromElement(cardPreviewBorderBox, '_border_box');
  removeClassesFromElements(cardPreviewIcons, '_color');
  removeClassesFromElements(cardPreviewIconsContainer, '_border_color');

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
inputPalette1.addEventListener('change', changeToPalette);
inputPalette2.addEventListener('change', changeToPalette);
inputPalette3.addEventListener('change', changeToPalette);
inputPalette4.addEventListener('change', changeToPalette);
inputPalette5.addEventListener('change', changeToPalette);

//Palette reset




// MEDIA

const inputEmail = document.querySelector('.form__email');
const inputLinkedin = document.querySelector('.form__linkedin');
const inputGithub = document.querySelector('.form__github');
const inputPhone = document.querySelector('.form__phone');

/*<<<<<<< ticket/17
function addHref(event) {
  const inputValue = event.target.value;
  if (event.target.name === "email") {
    document.querySelector(
      ".js-" + event.target.name
    ).href = `mailto:${inputValue}`;
  } else if (event.target.name === "phone") {
    document.querySelector(
      ".js-" + event.target.name
    ).href = `tel:+34${inputValue}`;
    console.log(`tel:+34${inputValue}`);
  } else {
    document.querySelector(".js-" + event.target.name).href = `${inputValue}`;
=======*/
function hideIcon(name, inputValue) {
  const iconContainer = document.querySelector(`.jscontainer-${name}`);
  console.log(`jscontainer-${name}`);
  if (inputValue !== '') {
    iconContainer.classList.remove('hidden-icon');
  } else {
    iconContainer.classList.add('hidden-icon');
  }
}

function addHref(event) {
  const inputValue = event.target.value;

  const icon = document.querySelector('.js-' + event.target.name);

  hideIcon(event.target.name, inputValue);

  if (event.target.name === 'email') {
    icon.href = `mailto:${inputValue}`;
  } else if (event.target.name === 'phone') {
    icon.href = `tel:+34${inputValue}`;
  } else if (event.target.name === 'linkedin') {
    icon.href = `https://www.linkedin.com/in/${inputValue}`;
  } else if (event.target.name === 'github') {
    icon.href = `https://github.com/${inputValue}`;
  }
}

inputEmail.addEventListener('keyup', addHref);
inputLinkedin.addEventListener('keyup', addHref);
inputGithub.addEventListener('keyup', addHref);
inputPhone.addEventListener('keyup', addHref);

//Collapsable

/* const collapsable = document.querySelectorAll(".js-collapsable");
function collapse(event){
collapsable.classList.toggle(".content");
console.log(collapsable);
}


collapsable.addEventListener("click", collapse);

 */

// Boton clear

const cardPreviewName = document.querySelector('.js-name');
const cardPreviewBorderBox = document.querySelector('.js-border-box');
const cardPreviewIcons = document.querySelectorAll('.js-icon');
const cardPreviewIconsContainer = document.querySelectorAll(
  '.js-icon-container'
);

const clearButton = document.querySelector('.js-clear-button');

function handleClearButtonClick() {
  document.querySelector('.js-form').reset();
  //Creo una variable que es un objeto. Dentro de ese objeto defino target y classname, que es lo mismo que le pasábamos antes a la función changeToPalette -más abajo-.
  let defaultPalete = {
    target: {
      className: 'js_palette1'
    }
  };
  //Vuelvo a usar dentro de la función de reset esta función que es la que usábamos antes para eliminar y añadir clases, solo que ahora en vez de dejar que identifique el evento automáticamente se lo pasamos "a la fuerza".
  changeToPalette(defaultPalete);
  data.name = '';
  data.position = '';

  updateCard();
}

clearButton.addEventListener('click', handleClearButtonClick);
