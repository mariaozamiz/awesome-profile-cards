'use strict';

const createCardButton = document.querySelector('.js-createcard__button');
const shareContainer = document.querySelector('.js-share__section');
const url = 'https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/';

const testObject = {
  palette: 1,
  name: 'María',
  job: 'Front-end developer',
  phone: '+34 666666666',
  email: 'mariagar@example.com',
  linkedin: 'mariagar',
  github: 'mariagar',
  photo: 'data:image/png;base64,2342ba...',
};

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
  event.preventDefault();
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json',
    },
  })
    .then((resp) => resp.json())
    .then((result) => getURL(result))
    .catch((error) => console.error('Error:', error));

  const twitterBtn = document.querySelector('.js-share__button');
  const notification = document.querySelector('.notification');
  const responseURL = document.querySelector('.js-apiLink');

  function getURL(result) {
    if (result.success) {
      const tweet =
        '¡Hola! Leela me ha ayudado a crear esta tarjeta de presentación. ¡Sube a nuestra nave y échale un vistazo! 🚀 🚀';
      responseURL.innerHTML = `<a href="${result.cardURL}" target="_blank">${result.cardURL}</a>`;
      notification.classList.remove('content');
      twitterBtn.setAttribute(
        'href',
        `https://twitter.com/intent/tweet?text=${tweet}&url=${result.cardURL}`
      );
    }
  }
}

createCardButton.addEventListener('click', createCard);
