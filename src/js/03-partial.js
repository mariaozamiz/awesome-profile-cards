'use strict';

const fr = new FileReader();
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

function savePicture() {
  console.log('¡patata!');
  const width = video.videoWidth;
  const height = video.videoHeight;
  canvas.width = width;
  canvas.height = height;
  ctx.translate(width, 0);
  ctx.scale(-1, 1);
  ctx.drawImage(video, 0, 0, width, height);
  const data = canvas.toDataURL('image/jpeg');
  profileImage.style.backgroundImage = `url(${data})`;
  profilePreview.style.backgroundImage = `url(${data})`;
  video.classList.add('content');
  takePicButton.classList.add('content');
  cameraStream.getTracks()[0].stop();
  cameraStream = false;
}

// canvas.translate(width, 0);
// canvas.scale(-1, 1);
// this.canvasContext.drawImage(image, 0, 0);

/**
 * Recoge el archivo añadido al campo de tipo "file"
 * y lo carga en nuestro objeto FileReader para que
 * lo convierta a algo con lo que podamos trabajar.
 * Añade un listener al FR para que ejecute una función
 * al tener los datos listos
 * @param {evento} e
 */

let imgcurrent = '';
function getImage(e) {
  const myFile = e.currentTarget.files[0];
  fr.addEventListener('load', writeImage);
  fr.readAsDataURL(myFile);
}

/**
 * Una vez tenemos los datos listos en el FR podemos
 * trabajar con ellos ;)
 */
function writeImage() {
  /* En la propiedad `result` de nuestro FR se almacena
   * el resultado. Ese resultado de procesar el fichero que hemos cargado
   * podemos pasarlo como background a la imagen de perfil y a la vista previa
   * de nuestro componente.
   */
  if (data.photo !== '' || fr.result) {
    profileImage.style.backgroundImage = `url(${data.photo || fr.result})`;
    profilePreview.style.backgroundImage = `url(${data.photo})`;

    if (fr.result) {
      data.photo = fr.result;
    }

    saveInfo();
  }
}

function resetImage() {
  /* En la propiedad `result` de nuestro FR se almacena
   * el resultado. Ese resultado de procesar el fichero que hemos cargado
   * podemos pasarlo como background a la imagen de perfil y a la vista previa
   * de nuestro componente.
   */
  profileImage.style.backgroundImage = `url('assets/images/profile-image.jpg')`;
  profilePreview.style.backgroundImage = `url('assets/images/profile-image.jpg')`;
}

/**
 * Genera un click automático en nuesto campo de tipo "file"
 * que está oculto
 */
function fakeFileClick() {
  fileField.click();
}

/**
 * Añadimos los listeners necesarios:
 * - al botón visible para generar el click automático
 * - al campo oculto para cuando cambie su value
 */
uploadBtn.addEventListener('click', fakeFileClick);
fileField.addEventListener('change', getImage);
cameraButton.addEventListener('click', startPhotoBooth);
takePicButton.addEventListener('click', savePicture);
