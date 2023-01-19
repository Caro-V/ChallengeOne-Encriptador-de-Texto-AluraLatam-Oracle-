/* eslint-disable import/extensions */
/* eslint-disable prefer-const */
/* eslint-disable no-plusplus */

import { encodeFunction, decodeFunction } from './cipher.js';

const input = document.getElementById('input');
const btnEncriptar = document.getElementById('encriptar');
const btnDesencriptar = document.getElementById('desencriptar');
const output = document.getElementById('output');

btnEncriptar.addEventListener('click', (e) => {
  e.preventDefault();

  if (input.value === '') {
    const html = `
    <img src='https://i.postimg.cc/0Q92SrMw/Curious.png' alt='ilustración de un hombre sosteniendo sus anteojos, color verde oscuro'>
    <h3>Ningún mensaje fue encontrado. </h3>
    <h4>Ingresa el texto que desees encriptar o desencriptar.</h4>
    `;
    output.innerHTML = html;
  } else {
    // console.log(encodeFunction(input.value));
    output.innerHTML = encodeFunction(input.value);
  }
});

btnDesencriptar.addEventListener('click', (e) => {
  e.preventDefault();

  if (input.value === '') {
    const html = `
    <img src='https://i.postimg.cc/0Q92SrMw/Curious.png' alt='ilustración de un hombre sosteniendo sus anteojos, color verde oscuro'>
    <h3>Ningún mensaje fue encontrado. </h3>
    <h4>Ingresa el texto que desees encriptar o desencriptar.</h4>
    `;
    output.innerHTML = html;
  } else {
    output.innerHTML = decodeFunction(input.value);
  }
});
