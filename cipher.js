/* eslint-disable max-len */
/* eslint-disable prefer-const */
/* eslint-disable no-plusplus */

export const encodeFunction = (input) => {
  let inputText = input.replace(/e/igm, 'enter');
  let modifiedText = inputText.replace(/o/igm, 'ober');
  let modifiedText2 = modifiedText.replace(/i/igm, 'imes');
  let modifiedText3 = modifiedText2.replace(/a/igm, 'ai');
  let modifiedText4 = modifiedText3.replace(/u/igm, 'ufat');
  return modifiedText4;
};

export const decodeFunction = (input) => {
  let inputText = input.replace(/enter/igm, 'e');
  let modifiedText = inputText.replace(/ober/igm, 'o');
  let modifiedText2 = modifiedText.replace(/imes/igm, 'i');
  let modifiedText3 = modifiedText2.replace(/ai/igm, 'a');
  let modifiedText4 = modifiedText3.replace(/ufat/igm, 'u');
  return modifiedText4;
};

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

// Requisitos:
// - Debe funcionar solo con letras minúsculas
// - No deben ser utilizados letras con acentos ni caracteres especiales
// - Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original.

// Por ejemplo:
// "gato" => "gaitober"
// gaitober" => "gato"

// La página debe tener campos para
// inserción del texto que será encriptado o desencriptado, y el usuario debe poder escoger entre as dos opciones.
// El resultado debe ser mostrado en la pantalla.
