'use strict';

const createCardButton = document.querySelector('.js-createcard__button');
const shareContainer = document.querySelector('.js-share__section');

function createCard() {
    event.preventDefault;
    createCardButton.classList.add('createcard__button--inactive');
    shareContainer.classList.toggle('content');
}

createCardButton.addEventListener('click', createCard);
