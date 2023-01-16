import cipher from './cipher.js';

const input = document.getElementById('input');
const btnEncriptar = document.getElementById('encriptar');
const output = document.getElementById('output');

btnEncriptar.addEventListener('click', (e) => {
  e.preventDefault();

  if (input.value === '') {
    const html = `
    <h3>Ningún mensaje fue encontrado. </h3>
    <h4>Ingresa el texto que desees encriptar o desencriptar.</h4>
    `;
    output.innerHTML = html;
  } else {
    // output.innerHTML = cipher.encode(input.value);
    let encodeFunction = cipher.encode(input.value);
    console.log(encodeFunction);
  }
});
