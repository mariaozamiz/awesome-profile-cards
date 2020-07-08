'use strict';

const createCardButton = document.querySelector('.js-createcard__button');
const shareContainer = document.querySelector('.js-share__section');

function updateButtonStatus() {
  if (data.name === '') {
    createCardButton.classList.add('createcard__button--inactive');
    createCardButton.disabled = true;
  } else {
    createCardButton.classList.remove('createcard__button--inactive');
    createCardButton.disabled = false;
  }
}

function createCard() {
  event.preventDefault;
  createCardButton.classList.add('createcard__button--inactive');
  shareContainer.classList.toggle('content');
}

createCardButton.addEventListener('click', createCard);
