'use strict';

// # 2-1_Syntax, Partie 1

console.log('--- PARTIE 1 ---');
console.log('');
console.log("> Bienvenue sur l'autoroute A7");

// [1] créer une variable x, et lui assigner un nombre

// [2] logguer cette variable dans la console avec console.log()

/* [3]
  logguer chacune des valeurs de "speeds" dans la console
  en utilisant une boucle for.
*/
const speeds = [23, 12, 57, 178, 129, 434, 222, 1000, 59, 887, 134];

/* [4]
  créer une fonction 'moins5' qui en entrée prend un nombre et renvoie le nombre moins 5
  puis logguez le résultat de la fonction 'moins5' appliquée sur x.
*/

/* [5]
  changer la boucle de la question 3 pour corriger chaque nombre avec la fonction 'moins5'.
  Si le résultat est supérieur à 130, logguer 'Vous allez trop vite !'
*/

console.log('');
console.log('> Merci de réinitialiser votre mot de passe');

/* [1]
  créer une fonction 'getNumber' qui en entrée prend un nombre et renvoie un nombre entier aléatoire
  entre 0 et ce nombre (ex: si on lui passe 4, on veut récupérer, 0, 1, 2 ou 3, au hasard).
  Logguer le résultat de la fonction random appliquée sur x.
  ( Utiliser Math.random() et Math.floor() )
*/

/* [2]
  créer une fonction 'getLetter' qui renvoie une lettre au hasard parmi le tableau 'letters'.
*/

const letters = 'abcdefghijklmnopqrstuvwxyz';

/* [3]
  créer une fonction 'makePassword' qui en entrée prend un nombre 'size' et renvoie un mot de cette longueur
  construit avec des lettres au hasard.
  Utiliser la fonction 'getNumber', 'getLetter' ainsi qu'une boucle for.
*/

/* [Bonus]
  créer une fonction 'makeStrongerPassword' qui en entrée prend un nombre 'size' et un booléen 'withNumbers'
  et renvoie une chaine de caractères sur le même principe que précédemment, mais avec les contraintes suivantes:
  - Si 'withNumber' est vrai, faire en sorte qu'un caractère sur deux soit un nombre au hasard.
  - Si 'size' est plus petit que 8, logguer un message d'avertissement, mais créer le password quand même.
*/

console.log('');
console.log('> Dis bonjour à mamie');

/* [1]
  créer une fonction 'bonjour' qui prend un 'name' en entrée
  et qui renvoie une chaine de caractère de type Bonjour personnalisé (ex: Bonjour Romain).
  Utiliser cette fonction avec votre prénom en logguant son résultat
*/

/* [2]
  sur le même principe, créer une fonction 'bonsoir'
*/

/* [3]
  créer une fonction 'saluer', qui en fonction de l'heure, utilise 'bonjour' ou 'bonsoir'.
  Utiliser new Date().getHours() pour avoir l'heure actuelle.
*/

/* [4]
en utilisant le tableau de langues 'languages' ainsi qu'une boucle for,
dire bonjour dans toutes les langues disponibles
*/
const languages = ['fr', 'es', 'de', 'it', 'jp'];

/* [Bonus]
  créer une fonction 'prepareHello' qui prend en entrée une langue 'lang' ('fr', 'it', 'es', 'de', ...)
  et qui, en fonction de la langue, renvoie une fonction anonyme qui prend en entrée un 'name',
  et renvoie une chaine de caractères de type Bonjour personnalisé.
  Si on ne passe pas de langue, ou si la langue n'est pas reconnue, l'anglais doit être le défaut.
  Utiliser 'prepareHello' pour créer plusieurs fonctions pour dire bonjour dans plusieurs langues, et les essayer.
*/
