'use strict';

function createRandomNumber() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      const n = Math.floor(Math.random() * 100);

      resolve(n);
    }, 3000);
  });
}

function waitForNumber() {
  const maxTime = 2000;

  return new Promise(function (resolve, reject) {
    const delay = Math.floor(Math.random() * 4000);

    setTimeout(() => {
      resolve(delay);
    }, delay);

    setTimeout(() => {
      reject('Trop long...');
    }, maxTime);
  });
}
