const sizes = [2, 3, 4, 5];
const fontClasses = sizes.map(s => `font-${s}`);
const weights = [400, 600, 800, 1000];
const weightClasses = weights.map(s => `weight-${s}`);

function random(nb) {
  const randomNumber = Math.floor(Math.random() * nb);

  return randomNumber;
}

export function createLetterDiv(letter) {
  const div = document.createElement('div');
  div.textContent = letter;
  div.classList.add('letter');

  const font = fontClasses[random(fontClasses.length)];
  const weight = weightClasses[random(weightClasses.length)];

  div.classList.add(font);
  div.classList.add(weight);
  return div;
}
