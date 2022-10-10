# La fenêtre

> l'outil d'affichage principal de tout navigateur

Tout navigateur, pour pouvoir afficher quoi que ce soit à l'utilisateur, a besoin d'une fenêtre.

Il est possible d'obtenir des informations sur chaque fenêtre d'un navigateur, ainsi que des les manipuler, et ce grâce à Javascript.


Dans tout navigateur, on a accès à l'objet [`window`](https://developer.mozilla.org/fr/docs/Web/API/Window).

## Propriétés intéressantes

```js
window.document // le DOM
window.console

window.localStorage
window.sessionStorage

window.name
window.fullScreen
window.innerWidth
window.innerHeight
window.scrollX // distance de scroll sur X
window.scrollY // distance de scroll sur Y

window.location // l'url actuelle
window.history // l'historique de navigation
window.locationbar // la barre d'adresse
window.menubar // la barre de menu

...
```

## Méthodes intéressantes

```js
window.open() // ouvre un nouvel onglet ou fenêtre
window.close() // ferme la fenêtre
window.stop() // arrête le chargement de la page

window.scroll() // scroll jusqu'à une position donnée
window.scrollBy() // scroll d'une certaine distance
window.scrollTo() // scroll jusqu'à un élément particulier

window.setInterval() // crée un intervalle de temps régulier
window.clearInterval() // annule un intervalle donné
window.setTimeout() // crée un décalage de temps
window.clearTimeout() // annule un décalage de temps donné

window.fetch() // récupère de la donnée sur le réseau
window.addEventListener() // ajoute un écouteur d'évènement sur la fenêtre
window.removeEventListener() // supprime un écouteur d'évènement sur la fenêtre

...
```

> Toutes ces propriétés et méthodes sont accessibles sans avoir à préciser `window.` devant.

---

## Exos
- afficher l'heure toutes les secondes en utilisant `setInterval()`

---

### _À suivre: [Le DOM](./3-2_dom.md)_
