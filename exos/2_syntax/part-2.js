'use strict';

// # 2-1_Syntax, Partie 2

console.log('');
console.log('--- PARTIE 2 ---');
console.log('');
console.log('> Ça va boucler sévère !');
/* [1]
  créer une fonction 'x10' qui prend un nombre en entrée et renvoie ce nombre multiplié par 10.
*/

function x10(nombre) {
  return nombre * 10;
}

console.log('--- 2 ---');
/*
  créer un nouveau tableau à partir de 'nombres' contenant chaque nombre multiplié par 10, en utilisant 'x10'
  Utiliser une boucle for
*/
const nombres = [23, 12, 57, 178, 139, 434, 222, 1000, 59, 887, 3141];

const nbx10 = [];
for (let i = 0; i < nombres.length; i++) {
  const newNb = x10(nombres[i]);
  nbx10.push(newNb);
}
console.log('nbx10', nbx10);

console.log('--- 2-bis ---');
// la même chose avec une boucle for ... of

const nbx10bis = [];
for (let nombre of nombres) {
  const newNb = x10(nombre);
  nbx10bis.push(newNb);
}
console.log('nbx10bis', nbx10bis);

console.log('--- 2-ter ---');
// la même chose avec .map

// const nbx10map = nombres.map(function (nb) {
//   return x10(nb);
// });
const nbx10map = nombres.map(x10);
console.log('nbx10map', nbx10map);

console.log('--- 3 ---');
/* [6] à partir de "nombres", créer un nouveau tableau avec seulement les entiers plus grands que 100
  en utilisant une boucle for et un if
*/

const plus100 = [];
for (let i = 0; i < nombres.length; i++) {
  const nb = nombres[i];
  if (nb > 100) {
    plus100.push(nb);
  }
}
console.log('plus100', plus100);

console.log('--- 3-bis ---');
// la même chose avec .filter

const plus100filter = nombres.filter(function (nb) {
  return nb > 100;
});
console.log('plus100filter', plus100filter);

console.log('--- 4 ---');
/*
  à partir de "nombres", créer un nouveau tableau avec seulement les entiers pairs
  en utilisant .filter()
*/

const pairs = nombres.filter(function (nb) {
  return nb % 2 === 0;
});
console.log('pairs', pairs);

console.log('--- 5 ---');
// créer une fonction 'getLength' qui prend une string en entrée en renvoie sa longueur

function getLength(string) {
  return string.length;
}

console.log('--- 6 ---');
/*
  logguer chacune des valeurs de "couleurs" et leur longueur dans la console
  en utilisant .forEach() et 'getLength'.
  ranger le résultat de couleurs.forEach(...) dans une variable '_longueurs'
*/

const couleurs = ['rouge', 'bleu', 'jaune'];

const _longueurs = couleurs.forEach(function (couleur) {
  console.log(couleur, getLength(couleur));
});

console.log('--- 7 ---');
/*
  à partir de couleurs créer un nouveau tableau 'longueurs' contenant toutes les longueurs
  en utilisant .map() et 'getLength'.
  logguer '_longueurs' et 'longueurs', comprendre la différence entre .map et .forEach
*/

const longueurs = couleurs.map(getLength);

console.log(longueurs, _longueurs);

console.log('');
console.log("> Si t'en as marre, c'est normal, c'est la fin");

/* [1]
  ajouter 2 ou 3 nouvelles personnes au tableau "personnes", en utilisant .push()
*/
const personnes = [{ nom: 'Romain', date: '1985-12-31' }];

/* [2]
  à partir de "personnes", créer un nouveau tableau contenant seulement les noms en utilisant .map()
*/

personnes.push({
  nom: 'Océane',
  date: '1991-11-19',
});
console.log(personnes);

console.log('--- 3 ---');
/*
  créer une fonction "calculerAge" qui en entrée prend un string représentant la date de naissance
  et renvoie l'âge en nombre, en utilisant Date()
*/

const yearsToMs = 1000 * 60 * 60 * 24 * 365.25;
function calculerAge(date) {
  const start = new Date(date);
  const now = new Date();

  const age = (now - start) / yearsToMs;

  return Math.floor(age);
}

console.log(calculerAge(personnes[0].date));

console.log('--- 4 ---');
/*
  à partir de "personnes" et "calculerAge", créer un nouveau tableau contenant seulement les âges
*/

const ages = personnes.map(function (personne) {
  return calculerAge(personne.date);
});

console.log('ages', ages);
