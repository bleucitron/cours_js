'use strict';

// # 2-1_Syntax, Partie 1

console.log('--- PARTIE 1 ---');
console.log('');
console.log("> Bienvenue sur l'autoroute A7");

const x = 34;

console.log('--- 2 ---');
// logguer cette variable dans la console avec console.log()

console.log('X', x);

console.log('--- 3 ---');
/*
logguer chacune des valeurs de "speeds" dans la console
en utilisant une boucle for.
*/
const speeds = [23, 12, 57, 178, 129, 434, 222, 1000, 59, 887, 134];

for (let i = 0; i < speeds.length; i++) {
  console.log('Speed', speeds[i]);
}

console.log('--- 4 ---');
/*
  créer une fonction 'moins5' qui en entrée prend un nombre et renvoie le nombre moins 5
  puis logguez le résultat de la fonction 'moins5' appliquée sur x.
*/

function moins5(nb) {
  return nb - 5;
}

console.log('--- 5 ---');
/*
  changer la boucle de la question 3 pour corriger chaque nombre avec la fonction 'moins5'.
  Si le résultat est supérieur à 130, logguer 'Vous allez trop vite !'
*/

for (let i = 0; i < speeds.length; i++) {
  const correction = moins5(speeds[i]);
  console.log('Vitesse', speeds[i], ', corrigée', correction);

  if (correction > 130) {
    console.log('Ralentissez !');
  }
}

console.log('');
console.log('> Merci de réinitialiser votre mot de passe');

/* [1]
  créer une fonction 'getNumber' qui en entrée prend un nombre et renvoie un nombre entier aléatoire
  entre 0 et ce nombre (ex: si on lui passe 4, on veut récupérer, 0, 1, 2 ou 3, au hasard).
  Logguer le résultat de la fonction random appliquée sur x.
  ( Utiliser Math.random() et Math.floor() )
*/

function getNumber(limit) {
  const between0And1 = Math.random();
  const randomNb = between0And1 * limit;

  const randomInt = Math.floor(randomNb);

  return randomInt;
}

console.log('Un nb aléatoire entre 0 et ', 19, '=>', getNumber(19));

console.log('--- 2 ---');
/*
créer une fonction 'getLetter' qui renvoie une lettre au hasard parmi le tableau 'letters'.
*/

const letters = 'abcdefghijklmnopqrstuvwxyz';

function getLetter() {
  const position = getNumber(letters[0].length);

  const letter = letters[0][position];

  return letter;
}

console.log('Une lettre aléatoire ', getLetter());

console.log('--- 3 ---');
/*
  créer une fonction 'makePassword' qui en entrée prend un nombre 'size' et renvoie un mot de cette longueur
  construit avec des lettres au hasard.
  Utiliser la fonction 'getNumber', 'getLetter' ainsi qu'une boucle for.
*/

function makePassword(size) {
  let password = '';

  for (let i = 0; i < size; i++) {
    password = password + getLetter();
  }

  return password;
}

console.log('Mon mdp:', makePassword(12));

console.log('--- bonus ---');
/*
  créer une fonction 'makeStrongerPassword' qui en entrée prend un nombre 'size' et un booléen 'withNumbers'
  et renvoie une chaine de caractères sur le même principe que précédemment, mais avec les contraintes suivantes:
  - Si 'withNumber' est vrai, faire en sorte qu'un caractère sur deux soit un nombre au hasard.
  - Si 'size' est plus petit que 8, logguer un message d'avertissement, mais créer le password quand même.
*/

function makeStrongerPassword(size, withNumber) {
  let password = '';

  for (let i = 0; i < size; i++) {
    if (withNumber) {
      if (i % 2 === 0) {
        password = password + getLetter();
      } else {
        password = password + getNumber(10);
      }
    } else {
      password = password + getLetter();
    }
  }

  if (password.length < 8) {
    console.log("c'est de la merde ton pwd");
  }

  return password;
}

console.log('Mon meilleur mdp ', makeStrongerPassword(16, true));
console.log('Mon meilleur mdp ', makeStrongerPassword(4, false));

console.log('');
console.log('> Dis bonjour à mamie');

/* [1]
  créer une fonction 'bonjour' qui prend un 'name' en entrée
  et qui renvoie une chaine de caractère de type Bonjour personnalisé (ex: Bonjour Romain).
  Utiliser cette fonction avec votre prénom en logguant son résultat
*/

function bonjour(name) {
  return 'Bonjour ' + name;
}
console.log(bonjour('Clemence'));
console.log('--- 2 ---');
/*
  sur le même principe, créer une fonction 'bonsoir'
*/
function bonsoir(name) {
  return 'Bonsoir ' + name;
}
console.log(bonsoir('Clemence'));
console.log('--- 3 ---');
/*
  créer une fonction 'saluer', qui en fonction de l'heure, utilise 'bonjour' ou 'bonsoir'.
  Utiliser new Date().getHours() pour avoir l'heure actuelle.
*/
function saluer() {
  const hour = new Date().getHours();
  if (hour > 18) {
    console.log(bonsoir('Clemence'));
  } else {
    console.log(bonjour('Clemence'));
  }
}

const result = saluer();
console.log('resulatst', result);
console.log('--- 4 ---');
/*
en utilisant le tableau de langues 'languages' ainsi qu'une boucle for,
dire bonjour dans toutes les langues disponibles
*/
const languages = ['fr', 'es', 'de', 'it', 'jp'];

for (let i = 0; i < languages.length; i++) {
  let langue = languages[i];
  if (langue === 'fr') {
    console.log('Bonjour');
  } else if (langue === 'es') {
    console.log('Hola');
  } else if (langue === 'de') {
    console.log('Hallo');
  } else if (langue === 'it') {
    console.log('Ciao');
  } else if (langue === 'jp') {
    console.log('Konnichiwa');
  }
}
console.log('--- bonus ---');
/*
  créer une fonction 'prepareHello' qui prend en entrée une langue 'lang' ('fr', 'it', 'es', 'de', ...)
  et qui, en fonction de la langue, renvoie une fonction anonyme qui prend en entrée un 'name',
  et renvoie une chaine de caractères de type Bonjour personnalisé.
  Si on ne passe pas de langue, ou si la langue n'est pas reconnue, l'anglais doit être le défaut.
  Utiliser 'prepareHello' pour créer plusieurs fonctions pour dire bonjour dans plusieurs langues, et les essayer.
*/

function prepareHello(lang) {
  if (lang === 'fr') {
    return function (name) {
      return 'Bonjour ' + name;
    };
  } else if (lang === 'es') {
    return function (name) {
      return 'Hola ' + name;
    };
  } else if (lang === 'it') {
    return function (name) {
      return 'Ciao ' + name;
    };
  } else if (lang === 'de') {
    return function (name) {
      return 'Hallo ' + name;
    };
  } else if (lang === 'jp') {
    return function (name) {
      return 'Konnichiwa ' + name;
    };
  } else {
    return function (name) {
      return 'Hello ' + name;
    };
  }
}

const helloFr = prepareHello('fr');
const helloIt = prepareHello('it');
const helloRu = prepareHello('ru');

console.log(helloFr('Jacky'));
console.log(helloFr('Nicole'));
console.log(helloIt('Jacky'));
console.log(helloRu('Jacky'));
