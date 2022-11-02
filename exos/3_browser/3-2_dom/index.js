'use strict';
console.log('Exos 3-2: DOM');

/**========================================================================
 *                           Chirugie
 *========================================================================**/
console.log('*** Chirurgie ***');

/**
 * 1) Changez le texte et la couleur du background de l'élément avec l'id 'coucou'
 * 2) Comptez les éléments de type 'i'
 * 3) Comptez les 'i' gris, bleus, et rouge
 * 4) Supprimez les éléments avec la classe 'inutile', ainsi que les i bleus et rouge
 * 5) Créez un élément de type 'p', avec:
 * - votre ville en textContent
 * - la classe 'blue'
 * - ajoutez cet élément en dernier enfant du footer
 * 6) Créez un élément de type 'h3', avec:
 * - 'Infos' en textContent
 * - la classe 'red'
 * - ajoutez cet élément en premier enfant du footer
 * Bonus) Créez 15 éléments de type 'div', avec la classe 'numero'.
 * - Ajoutez en textContent de ces éléments leur numero (entre 1 et 15) et ajoutez les à la 2e section
 */

const idCoucou = document.getElementById('coucou');
idCoucou.style.background = 'green';
idCoucou.textContent = 'Hey !';

const allI = document.querySelectorAll('i');
const allRed = document.querySelectorAll('i.blue');
const allBlue = document.querySelectorAll('i.red');

const nbAll = allI.length;
const nbBlue = allBlue.length;
const nbRed = allRed.length;

console.log(nbAll, nbBlue, nbRed, nbAll - nbBlue - nbRed);

allRed.forEach(e => e.remove());
allBlue.forEach(e => e.remove());
document.querySelectorAll('.inutile').forEach(e => e.remove());

const footer = document.querySelector('footer');
const p = document.createElement('p');
p.textContent = 'Bègles';
p.classList.add('blue');
footer.append(p);

const h3 = document.createElement('h3');
h3.textContent = 'Infos';
h3.classList.add('red');
footer.prepend(h3);

const section2 = document.querySelectorAll('section')[1];

for (let i = 1; i <= 15; i++) {
  const div = document.createElement('div');
  div.classList.add('numero');
  div.textContent = i;
  section2.append(div);
}

// Array.from({ length: 15 }).map((n, i) => {
//   const div = document.createElement('div');
//   div.classList.add('numero');
//   div.textContent = i + 1;
//   section2.append(div);
// });

/**========================================================================
 *                           [BONUS] Article
 *========================================================================**/
console.log('*** [BONUS] Article ***');

/**
 * 1) Déplacer l'article dans la 1ère section
 * 2) Reproduire programmatiquement l'élément d'article, et l'ajouter à la 2e section
 */
