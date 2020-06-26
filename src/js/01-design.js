'use strict';
console.log('partial 1');

//selectors

const inputName = document.querySelector('.input__name');

function addInfo(event) {
    const inputValue = event.currentTarget.value;
    console.log(inputValue);
}

inputName.addEventListener('keyup', addInfo);
// console.log(addInfo());
