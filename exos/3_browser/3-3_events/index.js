'use strict';
console.log('Exos 3-3: Évènements');

/**========================================================================
 *                           Couleurs
 *========================================================================**/
console.log('*** Couleurs ***');

/**
 * 1) Créez une <div> pour chaque couleur, avec la class 'color'
 * 2) L'ajouter à l'élément de la page qui a l'id 'exo1'
 * 3) Chaque div doit avoir un fond coloré de sa couleur
 * 4) Chaque div doit afficher en textContent le texte de sa couleur,
 * ainsi que la position de la couleur dans le tableau  (1. white)
 * 5) Au click, chaque div doit changer la couleur du background du body
 */

const colors = [
  'white',
  'blue',
  'red',
  'green',
  'black',
  'grey',
  'orange',
  'purple',
];

/**========================================================================
 *                           Taille
 *========================================================================**/
console.log('*** Taille ***');

/**
 * 1) Créez une <section> avec l'id 'exo2', et l'ajouter au body
 * 2) Créez une <div> carrée, de couleur noire, et l'ajouter à la 2e section
 * 3) Lui ajouter un listener au mousemove, qui change sa largeur
 * en fonction de la position en Y de la souris à l'écran (event.clientY)
 */

/**========================================================================
 *                           Nom
 *========================================================================**/
console.log('*** Nom ***');

/**
 * 1) Créez une <section> avec l'id 'exo3', et l'ajouter au body
 * 2) Ajouter un `<input />` à la section 'exo3'
 * 3) Lui ajouter un listener au input, qui change le 'textContent' du '<h1>' pour y mettre le contenu de l'input
 */

/**========================================================================
 *                           Clavier
 *========================================================================**/
console.log('*** Clavier ***');

/**
 * 1) Faire en sorte de changer la couleur du background du body quand on appuie sur 1, 2, 3...
 * en fonction de la position des boutons de l'exercice Couleurs
 * 2) Faire en sorte de remettre la page dans l'état initial (aucune section sauf exo1)
 * lorsque l'on appuie sur CTRL-R (COMMAND-R)
 * 3) Exécutez chacun des 3 premiers exercices lorsque la page est vide en appuyant sur ENTER
 */

/**========================================================================
 *                           [Bonus] Harry Potter
 *========================================================================**/
console.log('*** [Bonus] Harry Potter ***');

/**
 * 1) Créez une <section> avec l'id 'exoBonus', et l'ajouter au body
 * 2) Créez une <div> pour Harry, avec la classe 'character' et l'ajouter à la section 'exoBonus'
 * 3) La div 'character' a pour enfant une div avec la classe 'name' avec le nom en textContent
 * et une img avec le src correspondant
 * 4) Ajoutez un listener qui, au click, choisit un personnage au hasard
 * puis remplace les infos
 * 5) Essayez de faire la même chose, mais le listener doit recréer de zéro une nouvelle <div>,
 * puis remplacer la <div> courante, et garder le même comportement au click
 */

const characters = [
  {
    name: 'Harry',
    src: 'static/Harry_Potter_character_poster.jpeg',
  },
  {
    name: 'Hermione',
    src: 'static/Hermione_Granger_poster.jpeg',
  },
  {
    name: 'Ron',
    src: 'static/Ron_Weasley_poster.jpeg',
  },
  {
    name: 'Sirius',
    src: 'static/Sirius_Black.jpeg',
  },
  {
    name: 'Rubeus',
    src: 'static/RubeusHagrid.jpeg',
  },
  {
    name: 'Albus',
    src: 'static/Dumbledore_and_Elder_Wand.jpeg',
  },
];
