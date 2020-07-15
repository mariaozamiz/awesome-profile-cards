'use strict';

function saveInfo() {
  localStorage.setItem('data', JSON.stringify(data));
}

function getInfo() {
  const data = JSON.parse(localStorage.getItem('data'));
  return data;
}
