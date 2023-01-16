/* eslint-disable prefer-const */
/* eslint-disable no-plusplus */
const cipher = {

  encode(input) {
    let textArray = input.split('');
    // let output = '';

    for (let i = 0; i < textArray.legth; i++) {
      if (i === 'e') {
        let index = textArray.indexOf(i);
        textArray.push(index);
      }
    }
    console.log(textArray);
  },

  decode(output) {

  },
};

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

export default cipher;
