'use strict';
import { waitACertainTime } from '../../utils/index.js';
console.log('Exos 4-4: Plus de promesses');

/**========================================================================
 *                          GetJson
 *========================================================================**/
console.log('*** GetJson ***');

/**
 * 1) Créez une fonction getJSON qui:
 * - en entrée prend une url
 * - en sortie renvoie la promesse de la donnée parsée en JSON
 * 2) Utilisez cette fonction getJson pour afficher les données à cette adresse:
 * https://swapi.dev/api/people/6/
 */

function getJson(url) {
  return fetch(url).then(resp => resp.json());
}

const p = getJson('https://swapi.dev/api/people/6/');

p.then(data => {
  console.log('Data', data);
});

/**========================================================================
 *                          La rebellion
 *========================================================================**/
console.log('*** La rebellion ***');

/**
 * 1) Chargez les données des 5 premiers personnages Star Wars en parallèle,
 * et affichez leur données
 */

Promise.all(
  [1, 2, 3, 4, 5].map(id => `https://swapi.dev/api/people/${id}`).map(getJson),
).then(data => {
  console.log('All data', data);
});

/**========================================================================
 *                          [Bonus] Medium
 *========================================================================**/
console.log('*** [Bonus] Medium ***');

/**
 * La fonction waitACertainTime crée une promesse similaire à celle de l'exercice 4-1: Bonus
 * 1) Trouvez un moyen d'estimer le temps d'attente maximum qu'accepte
 * d'attendre la promesse créée par cette fonction
 */
