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
    event.preventDefault();
    // fetch(url, {
    //     method: 'POST', // or 'PUT'
    //     body: JSON.stringify(data), // data can be `string` or {object}!
    //     headers:{
    //       'Content-Type': 'application/json'
    //     }
    //   }).then(res => res.json())
    //   .catch(error => console.error('Error:', error))
      .then(data => {
          console.log('Success:', data)
          document.querySelector('.response__url').innerHTML = data.algo
          document.querySelector('.js-twitter-btn').href = 'https://twitter.....?url=' + data.algo
        //   
      });
//   createCardButton.classList.add('createcard__button--inactive');
//   shareContainer.classList.toggle('content');
}

createCardButton.addEventListener('click', createCard);

