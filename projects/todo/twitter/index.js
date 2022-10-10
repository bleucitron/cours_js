// ### Projet Touitter ###

/* [0] récupérer les tweets à l'aide des questions 3 et 4 des exos Async.
    Observer la structure de donnée des tweets dans la console de votre navigateur.
*/

// [1] créer et ajouter un <button> "bouton" qui quand on clique dessus affiche 'click' dans la console.
// Ne pas oublier de donner un textContent au bouton

// [2] créer une fonction, qui pour un tweet en entrée, crée et retourne un <li> contenant le texte du tweet

// [3] créer et ajouter un <ol> à la page, puis y ajouter les <li> de tweets en utilisant [2]

// [4] créer une fonction checkFr qui pour un tweet en entrée renvoie vrai ou faux selon si la langue est 'fr'

// [5] modifier "bouton", et utiliser checkFr au clic du bouton pour afficher dans la console la liste des tweets français

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

// ### BONUS: LOCALSTORAGE ###
// [1] Rajouter un bouton "fav" à chaque li

/* [2] quand le bouton est cliqué, changer le style du li (rajouter une classe 'fav')
      + et stocker l'ensemble des id_str fav dans le localStorage */

// [3] au chargement de la page, lire le localStorage pour favoriser les favoris.
