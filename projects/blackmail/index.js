import { createLetterDiv } from './utils.js';

const msg = localStorage.getItem('letters');

const input = document.createElement('input');
const container = document.createElement('section');

document.body.append(input);
document.body.append(container);

function displayLetters(s) {
  const letters = s.split('');

  container.innerHTML = '';

  letters.map(createLetterDiv).forEach(div => {
    container.append(div);
  });
}

displayLetters(msg);

input.addEventListener('input', event => {
  const value = event.target.value;
  localStorage.setItem('letters', value);

  displayLetters(value);
});
