'use strict';

// # 4_Browser

/* Exercice 1: Couleurs
    - Créer une <div> pour chaque couleur, avec la class 'color'
    - L'ajouter à l'élément de la page qui a l'id 'exo1'
    - Chaque div doit avoir un fond coloré de sa couleur
    - Chaque div doit afficher en textContent le texte de sa couleur, ainsi que la position de la couleur dans le tableau  (1. white)
    - Au click, chaque div doit changer la couleur du background du body
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

const exo1 = document.getElementById('exo1');

colors.forEach(function (color, position) {
  const colorDiv = document.createElement('div');
  exo1.append(colorDiv);
  colorDiv.classList.add('color');
  colorDiv.style.background = color;
  colorDiv.textContent = position + 1 + '. ' + color;

  colorDiv.addEventListener('click', function () {
    document.body.style.background = color;
  });
});

// -------------------------------

/* Exercice 2: Taille
    - Créer une <section> avec l'id 'exo2', et l'ajouter au body
    - Créer une <div> carrée, de couleur noire, et l'ajouter à la 2e section
    - Lui ajouter un listener au mousemove, qui change sa largeur
    en fonction de la position de la souris à l'écran (event.clientX)
*/

const exo2 = document.createElement('section');
const carre = document.createElement('div');
document.body.append(exo2);
exo2.append(carre);
carre.classList.add('carre');

carre.addEventListener('mousemove', function (event) {
  carre.style.width = event.clientX + 'px';
});

console.log(localStorage.getItem('nb'));

// -------------------------------

/* Exercice 3: Timer
    - Créer une <section> avec l'id 'exo3', et l'ajouter au body
    - Y ajouter deux divs: une avec la classe 'nb', et l'autre avec la classe 'dots'
    - Pour chaque seconde écoulée depuis le chargement de la page, (utiliser setInterval())
      - afficher le nombre de points dans '.nb'
      - ajouter une div avec la classe 'dot' à l'élément '.dots'
    - Stocker dans le localstorage l'info du nb de points
    pour recharger la page avec le bon nombre de points dès le début
*/

const fromStorage = localStorage.getItem('counter');

let counter = fromStorage ? parseInt(fromStorage) : 0;

const exo3 = document.createElement('section');
const nb = document.createElement('div');
const dots = document.createElement('div');
document.body.append(exo3);
exo3.append(nb);
exo3.append(dots);
nb.classList.add('nb');
dots.classList.add('dots');

nb.textContent = counter;

function addDot() {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  dots.append(dot);
}

for (let i = 0; i < counter; i++) {
  addDot();
}

function startCounting() {
  return setInterval(function () {
    addDot();
    counter += 1;
    localStorage.setItem('counter', counter);

    nb.textContent = counter;
  }, 1000);
}

let interval = startCounting();
// -------------------------------

/* Exercice 4: Contrôle au clavier
    - Faire en sorte de changer la couleur du background du body quand on appuie sur 1, 2, 3...
    en fonction de la position des boutons de l'exo 1
    - Faire en sorte de remettre la page dans l'état initial (aucune section sauf exo1) lorsque l'on appuie sur CTRL-R (COMMAND-R)
    - Exécuter chacun des 3 premiers exercices lorsque la page est vide en appuyant sur ENTER
    - Faire en sorte de d'arrêter le timer quand on appuie sur S, et de le relancer en réappuyant
*/

document.addEventListener('keydown', function (event) {
  const key = event.key;
  const isCtrl = event.metaKey;

  if (key >= 1 && key < colors.length) {
    document.body.style.background = colors[event.key - 1];
  } else if (isCtrl && key === 'r') {
    event.preventDefault();
    exo1.remove();
    exo2.remove();
    exo3.remove();
    exoBonus.remove();
  } else if (key === 'Enter') {
    document.body.append(exo1);
    document.body.append(exo2);
    document.body.append(exo3);
    document.body.append(exoBonus);
  } else if (key === 's') {
    if (interval) {
      interval = clearInterval(interval);
    } else {
      interval = startCounting();
    }
  }
});

// -------------------------------

/* Exercice BONUS: Harry Potter
    - Créer une <section> avec l'id 'exoBonus', et l'ajouter au body
    - Créer une <div> pour Harry, avec la classe 'character' et l'ajouter à 'exoBonus'
    - La div 'character' a pour enfant une div avec la classe 'name' avec le nom en textContent
    et une img avec le src correspondant
    - Ajouter un listener qui, au click, choisit un personnage au hasard
    puis remplace la <div> cliquée par une nouvelle <div>
    créée de zéro de la même manière, avec les infos du nouveau personnage
    - Enregistrer le personnage affiché dans le localstorage pour le recharger au démarrage
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

const exoBonus = document.createElement('section');
exoBonus.id = 'exoBonus';
document.body.append(exoBonus);

function createCharacter(person) {
  const character = document.createElement('div');
  character.classList.add('character');

  const name = document.createElement('div');
  name.classList.add('name');
  name.textContent = person.name;
  const img = document.createElement('img');
  img.classList.add('img');
  img.src = person.src;
  img.alt = 'Picture of ' + person.name;

  character.append(name);
  character.append(img);

  character.addEventListener('click', function () {
    // remove current character to avoid picking the same one
    const allCharactersButCurrent = characters.filter(function (c) {
      return c.name !== person.name;
    });

    // choose random position
    const randomPosition = Math.floor(
      Math.random() * allCharactersButCurrent.length,
    );
    const newCharacter = allCharactersButCurrent[randomPosition];

    // recreate new div with recursivity
    const newDiv = createCharacter(newCharacter);
    // replace current with new
    character.replaceWith(newDiv);
  });

  return character;
}

const current = createCharacter(characters[0]);
exoBonus.append(current);
