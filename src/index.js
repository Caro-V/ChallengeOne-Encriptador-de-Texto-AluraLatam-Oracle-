/* eslint-disable import/extensions */
/* eslint-disable prefer-const */
/* eslint-disable no-plusplus */

import { encodeFunction, decodeFunction } from './cipher.js';

const formInput = document.getElementById('form_input');
const input = document.getElementById('input');
const btnEncriptar = document.getElementById('encriptar');
const btnDesencriptar = document.getElementById('desencriptar');
const output = document.getElementById('output');
const imgGirl = document.getElementById('img_girl');
const btnCopiar = document.getElementById('copy');
const msgCopiado = document.getElementById('msgCopiado');

btnEncriptar.addEventListener('click', (e) => {
  e.preventDefault();

  if (input.value === '') {
    imgGirl.style.display = 'none';
    btnCopiar.style.display = 'none';
    const html = `
    <h3 class='textError'>Ningún mensaje fue encontrado. </h3>
    <h4 class='textError2'>Ingresa el texto que desees encriptar o desencriptar.</h4>
    <img class='img_boy' src='https://i.postimg.cc/0Q92SrMw/Curious.png' alt='ilustración de un hombre sosteniendo sus anteojos, color verde oscuro'>
    `;
    output.innerHTML = html;
  } else {
    // console.log(encodeFunction(input.value));
    imgGirl.style.display = 'block';
    btnCopiar.style.display = 'block';
    output.innerHTML = encodeFunction(input.value);
  }
});

btnDesencriptar.addEventListener('click', (e) => {
  e.preventDefault();

  if (input.value === '') {
    imgGirl.style.display = 'none';
    btnCopiar.style.display = 'none';
    const html = `
    <h3 class='textError'>Ningún mensaje fue encontrado. </h3>
    <h4 class='textError2'>Ingresa el texto que desees encriptar o desencriptar.</h4>
    <img class='img_boy' src='https://i.postimg.cc/0Q92SrMw/Curious.png' alt='ilustración de un hombre sosteniendo sus anteojos, color verde oscuro'>
    `;
    output.innerHTML = html;
  } else {
    imgGirl.style.display = 'block';
    btnCopiar.style.display = 'block';
    output.innerHTML = decodeFunction(input.value);
  }
});

btnCopiar.addEventListener('click', () => {
  navigator.clipboard.writeText(output.innerHTML);
  msgCopiado.innerHTML = '¡Mensaje copiado al portapapeles!';
  formInput.reset();
  setTimeout(() => {
    msgCopiado.innerHTML = '';
  }, 1000);
});
