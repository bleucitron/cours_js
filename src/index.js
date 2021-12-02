'use strict';

document.addEventListener(
  'DOMContentLoaded',
  async function () {
    const resp = await fetch(
      'https://raw.githubusercontent.com/iOiurson/data/master/data/tweets.json',
    );
    const tweets = await resp.json();
    console.log('Le tableau de tweet', tweets);

    // ### Projet Touitter ###

    // [0] observer la structure de donnée des tweets dans la console de votre navigateur

    // [1] créer et ajouter un <button> "bouton" qui quand on clique dessus affiche 'click' dans la console.
    // Ne pas oublier de donner un textContent au bouton

    const button = document.createElement('button');
    button.textContent = 'Click';

    document.body.append(button);

    // [2] créer une fonction, qui pour un tweet en entrée, crée et retourne un <li> contenant le texte du tweet

    function createLi(tweet) {
      const li = document.createElement('li');
      li.textContent = tweet.full_text;

      return li;
    }

    // [3] créer et ajouter un <ol> à la page, puis y ajouter les <li> de tweets en utilisant [2]

    const ol = document.createElement('ol');
    document.body.append(ol);

    tweets.forEach(tweet => {
      const li = createLi(tweet);

      ol.append(li);
    });

    // [4] créer une fonction checkFr qui pour un tweet en entrée renvoie vrai ou faux selon si la langue est 'fr'
    function checkFr(tweet) {
      return tweet.lang === 'fr';
    }

    // [5] modifier "bouton", et utiliser checkFr au clic du bouton pour afficher dans la console la liste des tweets français
    button.addEventListener('click', () => {
      const tweetsFr = tweets.filter(checkFr);

      const olFr = document.createElement('ol');

      tweetsFr.forEach(tweet => {
        const li = createLi(tweet);
        olFr.append(li);
      });

      ol.replaceWith(olFr);
    });

    // [6] modifier "bouton" pour que quand on clique dessus,
    //  - crée un nouveau <ol> avec seulement les tweets français
    //  - remplace le <ol> existant avec le nouvel <ol>, en utilisant .replaceWith()

    // [7] créer une variable booléenne isFr, et l'initialiser à false

    // [8] inverser la valeur du booléen au clic sur "bouton"

    // [9] modifier "bouton" pour pouvoir réafficher tous les tweets quand on reclique dessus
    //  Il faut utiliser isFr.

    // [10] changer l'intitulé de "bouton" de filtre en fonction de isFr

    /* [11] créer une fonction, qui pour un tableau tweets en entrée, crée et retourne un <ol> rempli de <li>
    et l'utiliser à [3], [6], [9] */

    /* [12] créer une fonction qui crée et renvoie le bouton de filtre.
      Cette fonction doit contenir toute la logique liée au filtre.
      Utiliser cette fonction pour remplacer le code de création du bouton de filtre.
    */

    // [13] Utiliser la fonction getJson() pour charger les tweets à la place des lignes 6 à 11

    /* [14] Utiliser Promise.all() pour charger également les tweets de cette url :
          'https://raw.githubusercontent.com/iOiurson/formation/correction/data/tweets2.json'
        */

    // ### BONUS: LOCALSTORAGE ###
    // [1] Rajouter un bouton "fav" à chaque li

    /* [2] quand le bouton est cliqué, changer le style du li (rajouter une classe 'fav')
      + et stocker l'ensemble des id_str fav dans le localStorage */

    // [3] au chargement de la page, lire le localStorage pour favoriser les favoris.
  },
  { once: true },
);
