'use strict';
console.log('Exos 1-6: Libs');

/**========================================================================
 *                           Aléatoire
 *========================================================================**/
console.log('*** Aléatoire ***');

/**
 * 1) Créer une fonction 'lanceDés' qui renvoie un nombre entre 1 et 6.
 *
 * Utiliser
 * - Math.random() (donne un nombre aléatoire >= 0 et < 1)
 * - Math.floor() (tronque le nombre qu'on lui fournit)
 *
 *
 * 2) Utiliser cette fonction pour obtenir un nombre aléatoire entre 1 et 6
 */

/**
 * 3) Modifier la fonction "lanceDés" pour pouvoir choisir la taille du dé (limites inférieures et supérieures)
 */

/**========================================================================
 *                           Noms
 *========================================================================**/
console.log('*** Noms ***');

/**
 * 1) Sur le modèle de Romain, ajoutez 2 ou 3 personnes au tableaux "personnes", en utilisant .push()
 */
const romain = {
  nom: 'Romain',
  date: '1985-12-31',
};
const personnes = [romain];

/**
 * 2) Créez un nouveau tableau contenant uniquement les noms des personnes en minuscules,
 * en utilisant .map() et .toLowerCase()
 */

/**
 * 3) Créez un nouveau tableau contenant uniquement les années de naissance,
 * en utilisant .map() et .getFullYear()
 * - transformez la string de date en object Date
 */

/**
 * 4) Créer une fonction "calculerAge" qui en entrée prend un string représentant la date de naissance
 * et renvoie l'âge en années
 * - un âge est une simple durée, soit la différence entre 2 dates.
 * - commencez par calculer l'âge en millisecondes
 */

/**
 * 5) À partir de "personnes" et "calculerAge", créer un nouveau tableau contenant seulement les âges.
 */

/**========================================================================
 *                           [Bonus] Mot de passe
 *========================================================================**/
console.log('*** [Bonus] Mot de passe ***');

/**
 * 1) En utilisant la fonction "lanceDés", créez une fonction `getLetter`
 * qui renvoie une lettre aléatoire parmi les lettres de l'alphabet.
 * Vous pouvez utiliser la string "letters".
 */

const letters = 'abcdefghijklmnopqrstuvwxyz';

/**
 * 2) Créez une fonction "makePassword" qui:
 * - en entrée prend un nombre 'size'
 * - renvoie un string de longueur 'size' construite avec des lettres au hasard
 *
 * Utiliser une boucle for et la fonction "getLetter".
 */

/**
 * Bonus) Créer une fonction 'makeStrongerPassword' qui:
 * - en entrée prend un nombre 'size' et un booléen 'withNumbers'
 * - renvoie une chaine de caractères avec des lettres aléatoires, selon les règles suivantes.
 *
 * Si 'withNumber' est vrai, faire en sorte qu'un caractère sur deux soit un nombre au hasard.
 * Si 'size' est plus petit que 8, logguer un message d'avertissement, mais créer le password quand même.
 */
