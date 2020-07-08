'use strict';

function updateAll() {
  // guardo en local storage
  updateCardItem('name', 'Nombre Apellido');
  updateCardItem('job', 'Front End Developer');
  updateCardLink('email', 'mailto:');
  updateCardLink('linkedin', 'https://linkedin.com/in/');
  updateCardLink('github', 'https://github.com/');
  updateCardLink('phone', 'tel:+34');
  updateCardPalette();
  updateButtonStatus();
}

updateAll();

/* 
const url = 'https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/';
let data = {};

fetch(url, {
  method: 'POST', // or 'PUT'
  body: JSON.stringify(data), // data can be `string` or {object}!
  headers: {
    'Content-Type': 'application/json'
  }
}).then(response => response.json())
  .catch(error => console.error('Error:', error))
  .then(info => console.log('Success:', info)); */
