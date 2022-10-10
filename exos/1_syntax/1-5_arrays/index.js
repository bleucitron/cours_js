'use strict';
console.log('Exos 1-5: Tableaux');

/**========================================================================
 *                           Pop 'n Push
 *========================================================================**/
console.log("*** Pop 'n Push ***");

const nombres = [5, 6, 1, 2, 3, 4, 7];
/**
 * 1) Enlevez des éléments de 'nombres' pour ne garder que [1, 2, 3]
 * 2) Ajoutez des éléments dans 'nombres' pour faire [0, 1, 2, 3, 4, 5, 6]
 */

/**========================================================================
 *                           A7
 *========================================================================**/
console.log('*** A7 ***');

const speeds = [23, 12, 57, 178, 129, 434, 222, 1000, 59, 887, 134];

/**
 * 1) Logguez chacune des valeurs du tableau speeds dans la console avec une boucle for
 * 2) Faire de même avec une boucle .forEach()
 */

/**
 * 3) Créer une fonction 'moins5' qui en entrée prend un nombre et renvoie le nombre moins 5
 * 4) Changer la boucle de la question 2 pour corriger chaque vitesse avec la fonction 'moins5'.
 * Si le résultat est supérieur à 130, logguer 'Vous allez trop vite !'
 */

/**========================================================================
 *                           Conversions
 *========================================================================**/
console.log('*** Conversions ***');

/**
 * 1) Créez un nouveau tableau avec les vitesses en m/s, en utilisant une boucle for.
 * 2) Même chose, en utilisant une boucle for of.
 * 3) Même chose, en utilisant .map().
 */
const kmHtoms = 1000 / 3600; // conversion de km/h à m/s

/**
 * 4) Créez un tableau filtré (avec .filter) avec uniquement les vitesses en km/h supérieures à 130 km/h
 */

/**
 * 5) Créez une fonction pour transformer une vitesse en km/h en vitesse en noeud;
 * 6) Utilisez cette fonction pour créer un tableau des vitesses en noeuds
 */

const ndTokmH = 1.852; // 1 noeud vaut 1.852 km/h

/**========================================================================
 *                           [Bonus] Pokemons
 *========================================================================**/
console.log('*** [Bonus] Pokemons ***');

/**
 * 1) Trouvez toutes les types uniques de Pokemons à partir du tableau de données pokemons
 */
import { pokemons } from '../../utils/index.js';
