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
