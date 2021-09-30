'use strict';

// # 2-1_Syntax, Partie 2

console.log('');
console.log('--- PARTIE 2 ---');
console.log('');
console.log('> Ça va boucler sévère !');
/* [1]
  créer une fonction 'x10' qui prend un nombre en entrée et renvoie ce nombre multiplié par 10.
*/

/* [2]
  créer un nouveau tableau à partir de 'nombres' contenant chaque nombre multiplié par 10, en utilisant 'x10'
  Utiliser une boucle for
*/
const nombres = [23, 12, 57, 178, 139, 434, 222, 1000, 59, 887, 3141];

// [2bis] la même chose avec une boucle for ... of

// [2ter] la même chose avec .map

/* [3] à partir de "nombres", créer un nouveau tableau avec seulement les entiers plus grands que 100
  en utilisant if et une boucle for
*/

// [3bis] la même chose avec .filter

/* [4]
  à partir de "nombres", créer un nouveau tableau avec seulement les entiers pairs
  en utilisant .filter()
*/

// [5] créer une fonction 'getLength' qui prend une string en entrée en renvoie sa longueur

/* [6]
  logguer chacune des valeurs de "couleurs" et leur longueur dans la console
  en utilisant .forEach() et 'getLength'.
  ranger le résultat de couleurs.forEach(...) dans une variable '_longueurs'
*/

const couleurs = ['rouge', 'bleu', 'vert', 'marron', 'turquoise', 'fuschia'];

/* [7]
  à partir de couleurs créer un nouveau tableau 'longueurs' contenant toutes les longueurs
  en utilisant .map() et 'getLength'.
  logguer '_longueurs' et 'longueurs', comprendre la différence entre .map et .forEach
*/

console.log('');
console.log("> Si t'en as marre, c'est normal, c'est la fin");

/* [1]
  ajouter 2 ou 3 nouvelles personnes au tableau "personnes", en utilisant .push()
*/
const personnes = [{ nom: 'Romain', date: '1985-12-31' }];

/* [2]
  à partir de "personnes", créer un nouveau tableau contenant seulement les noms en utilisant .map()
*/

/* [3]
  créer une fonction "calculerAge" qui en entrée prend un string représentant la date de naissance
  et renvoie l'âge en nombre, en utilisant Date()
*/

/* [4]
  à partir de "personnes" et "calculerAge", créer un nouveau tableau contenant seulement les âges
*/
