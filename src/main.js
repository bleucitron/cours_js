fetch('https://raw.githubusercontent.com/iOiurson/data/master/data/tweets.json')
  .then(function (resp) {
    return resp.json();
  })
  .then(function (tweets) {
    console.log('Le tableau de tweet', tweets);

    // ### Projet Touitter ###
    // Attention: toucher au DOM coûte cher, utiliser le moins possible les APIs du DOM

    // [1] créer une fonction createLi(), qui pour un tweet en entrée, crée et retourne un <li> contenant le texte du tweet

    // [2] créer et ajouter un <ol> à la page, puis y ajouter les <li> de tweets en utilisant [1]

    // [3] créer un <button> de filtre pour que quand on clique dessus, ne garde que les tweets en français à l'écran

    // [4] modifier le bouton de filtre pour pouvoir réafficher tous les tweets quand on reclique dessus

    /* [5] créer une fonction createOl(), qui pour un tableau tweets en entrée, crée et retourne un <ol> rempli de <li>
    et l'utiliser à [2], [3], [4] */

    /* [6] Créer un bouton qui, quand on clique dessus:
            - active le tracking de la souris: la console affiche position de la souris (event.clientX, event.clientY) quand la souris bouge
            - désactive le tracking quand on reclique dessus
        */

    /* [7] créer une fonction qui crée et renvoie le bouton de filtre.
          Cette fonction doit contenir toute la logique liée au filtre.
          Utiliser cette fonction pour remplacer le code de création du bouton de filtre.
        */

    // [8] Utiliser la fonction getJson() pour charger les tweets à la place des lignes 6 à 11

    /* [9] Utiliser Promise.all() pour charger également les tweets de cette url :
          'https://raw.githubusercontent.com/iOiurson/formation/correction/data/tweets2.json'
        */

    // ### BONUS : LOCALSTORAGE ###

    // [1] Rajouter un bouton "fav" à chaque li

    /* [2] quand le bouton est cliqué, changer le style du li (rajouter une classe 'fav')
      + et stocker l'ensemble des id_str fav dans le localStorage */

    // [3] au chargement de la page, lire le localStorage pour favoriser les favoris.
  })
  .catch(function (e) {
    console.error(e);
  });
