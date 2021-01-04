'use strict';

const uploadBtn = document.querySelector('.js__profile-trigger');
const fileField = document.querySelector('.js__profile-upload-btn');
const profileImage = document.querySelector('.js__profile-image');
const profilePreview = document.querySelector('.js__profile-preview');
const cameraButton = document.querySelector('.js__camera-button');
const takePicButton = document.querySelector('.button_take-picture');
const designSectionColl = document.querySelector('.designform.js-collapsable');
const video = document.querySelector('.js-video');
const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext('2d');
let cameraStream;

function startPhotoBooth() {
  // if (screen.width < 768) {
  //   designSectionColl.classList.add('content');
  //   window.scrollTo(0, 0);
  // }
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: false })
    .then((localMediaStream) => {
      cameraStream = localMediaStream;
      video.classList.remove('content');
      video.srcObject = localMediaStream;
      video.play();
    })
    .catch((error) => {
      window.alert('¡Lo siento! No hemos conseguido acceder a tu cámara');
      console.log(error);
    });
  takePicButton.classList.remove('content');
}

function takePicture() {
  //define size
  const width = video.videoWidth;
  const height = video.videoHeight;
  canvas.width = width;
  canvas.height = height;
  //flip image
  ctx.translate(width, 0);
  ctx.scale(-1, 1);
  //save image data
  ctx.drawImage(video, 0, 0, width, height);
  const imageData = canvas.toDataURL('image/jpeg');
  //style
  profileImage.style.backgroundImage = `url(${imageData})`;
  profilePreview.style.backgroundImage = `url(${imageData})`;
  video.classList.add('content');
  takePicButton.classList.add('content');
  //stop camera
  cameraStream.getTracks()[0].stop();
  cameraStream = false;
  saveImage(imageData);
}

function saveImage(imageData) {
  data.photo = imageData;
  saveInfo();
  writeImage();
}

function uploadImage(e) {
  const myFile = e.currentTarget.files[0];
  const fr = new FileReader();
  fr.addEventListener('load', () => saveImage(fr.result));
  fr.readAsDataURL(myFile);
}

function writeImage() {
  if (data.photo !== '') {
    profileImage.style.backgroundImage = `url(${data.photo})`;
    profilePreview.style.backgroundImage = `url(${data.photo})`;
  }
}

function resetImage() {
  profileImage.style.backgroundImage = `url('assets/images/profile-image.jpg')`;
  profilePreview.style.backgroundImage = `url('assets/images/profile-image.jpg')`;
}

function fakeFileClick() {
  fileField.click();
}

uploadBtn.addEventListener('click', fakeFileClick);
fileField.addEventListener('change', uploadImage);
cameraButton.addEventListener('click', startPhotoBooth);
takePicButton.addEventListener('click', takePicture);
