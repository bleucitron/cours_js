'use strict';
console.log('Exos 5-1: Syntaxes modernes');

/**========================================================================
 *                           Arrows
 *========================================================================**/
console.log('*** Arrows ***');

/**
 * Transformez ces fonctions en leur équivalent fléché
 */

function bjr() {
  console.log('Bonjour !');
}

function plus10(x) {
  return x + 10;
}

function addition(x, y) {
  return x + y;
}

function multiplex(x, y) {
  console.log('result', x * y);
  return x * y;
}

function createPerson(nom, prenom) {
  return {
    nom: nom,
    prenom: prenom,
  };
}

/**========================================================================
 *                           Destructure moi !
 *========================================================================**/

const movie = {
  name: 'Les aristochats',
  released: 1970,
  studio: 'Disney',
};

const game = {
  name: 'Starcraft',
  released: 1998,
  studio: 'Blizzard',
  genre: 'rts',
  platforms: ['pc', 'mac'],
};

const years = [1978, 1986, 2011, 2018, 2021];

/**
 * Simplifier les assignations suivantes
 */

const name = movie.name;
const released = movie.released;
const studio = movie.studio;

const nom = game.name;
const date = game.released;
const other = {
  studio: game.studio,
  genre: game.genre,
  platforms: game.platforms,
};

const firstYear = years[0];
const secondYear = years[1];
const otherYears = [years[2], years[3], years[4]];

/**========================================================================
 *                           Fuuu-sion !
 *========================================================================**/

const l1 = [1, 2, 3];
const l2 = [4, 5, 6];
const l3 = [7, 8, 9];
const l4 = [10, 11, 12];

const adminInfos = {
  firstName: 'Paul',
  familyName: 'McCartney',
  birthDate: '1942-06-19',
  nationality: 'uk',
};
const musicInfos = {
  bands: ['The Beatles', 'The Wings'],
  instruments: ['bass', 'guitar', 'piano'],
};

/**
 * Simplifier les assignations suivantes
 */

const allLs = l1.concat(l2).concat(l3).concat(l4);

const paul = {
  firstName: adminInfos.firstName,
  familyName: adminInfos.firstName,
  birthDate: adminInfos.firstName,
  nationality: adminInfos.firstName,
  bands: musicInfos.bands,
  instruments: musicInfos.instruments,
};

/**========================================================================
 *                           All at once
 *========================================================================**/

/**
 * Tirer profit au maximum des syntaxes modernes pour simplifier la définition de cette fonction
 */

function clone(personne, nbAnnees) {
  if (nbAnnees === undefined) {
    nbAnnees = 1;
  }

  console.log('Nom', personne.nom);
  console.log('Prénom', personne.prenom);
  console.log('Âge', personne.age);
  console.log('nbAnnees', nbAnnees);

  const leClone = {
    nom: personne.nom,
    prenom: personne.prenom,
    age: personne.age + nbAnnees,
  };

  return leClone;
}
