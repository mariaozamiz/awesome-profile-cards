console.log('partial 2');

const collContent = document.querySelector('.js-contentFill');
const collButton = document.querySelector('.js-coll');

function collForm(event) {
  collContent.classList.toggle('content');
}

collButton.addEventListener('click', collForm);
