'use strict';

export { default as pokemons } from './pokemon.js';

export function createRandomNumber() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      const n = Math.floor(Math.random() * 100);

      resolve(n);
    }, 3000);
  });
}

export function waitACertainTime() {
  const maxTime = 3500;

  return new Promise(function (resolve, reject) {
    const delay = Math.floor(Math.random() * 7000);

    setTimeout(() => {
      resolve(delay);
    }, delay);

    setTimeout(() => {
      reject('Trop long...');
    }, maxTime);
  });
}
