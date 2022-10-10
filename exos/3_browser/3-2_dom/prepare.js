'use strict';

function getRandom(max) {
  return Math.floor(Math.random() * max);
}

const MAX = 2000;
const nb = getRandom(MAX);

function createCoordinates() {
  const left = getRandom(window.innerWidth);
  const top = getRandom(window.innerHeight);

  return {
    top,
    left,
  };
}

for (let i = 1; i <= nb; i++) {
  const element = document.createElement('i');
  element.classList.add('dot');

  const coord = createCoordinates();
  element.style.top = coord.top + 'px';
  element.style.left = coord.left + 'px';

  if (i % 5 === 0) {
    element.classList.add('red');
  } else if (i % 13 === 0) {
    element.classList.add('blue');
  }

  document.body.append(element);
}

for (let i = 1; i < 10; i++) {
  const element = document.createElement('div');
  element.classList.add('inutile');

  const coord = createCoordinates();
  element.style.top = coord.top + 'px';
  element.style.left = coord.left + 'px';

  document.body.append(element);
}
