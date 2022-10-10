# [Evènements](https://developer.mozilla.org/en-US/docs/Web/Events)

> Réagir à ce qu'il se passe sur la page

Comme la `window` ou le `document`, tous les éléments sont des [EventTarget](https://developer.mozilla.org/fr/docs/Web/API/EventTarget).

Un `EventTarget` écoute les évènements qui se
produisent sur lui-même, et réagit si on lui a donné un *listener* (une fonction).

## Ajouter un *listener*

```js
element.addEventListener(type, listener, options); // si l'évènement type se produit sur element, alors exécute listener, avec des options
```
```js
// Exemple
monElement.addEventListener(
  "click",
  function () { console.log("yo"); }
);
```

> Éviter les `element.onclick = ...`, `element.onmousemove = ...`. Ils permettent moins de choses, notamment ils sont uniques par élément.

## Supprimer un *listener*

On peut supprimer un *listener* pour un élément et un type d'évènement donné.
```js
element.removeEventListener(type, listener);
```

Il faut faire attention, car il faut absolument que le *listener* que l'on supprime soit le même que l'on ait ajouté plus tôt.

L'exemple suivant n'aura aucun effet:
```js
monElement.addEventListener("click", function () { console.log("yo"); });
monElement.removeEventListener("click", function () { console.log("yo"); }); // ceci n'aura aucun effet
```

**Pour supprimer correctement un *listener*, il faut passer sa référence**.
```js
function maFonction() {
  console.log('yo');
}
monElement.addEventListener("click", maFonction);
monElement.removeEventListener("click", maFonction);
```

## Inputs

```js
const input = document.getElementById('nom');

input.addEventListener('input', e => {
  console.log('valeur actuelle', e.target.value);
})
```

## Évènements classiques

### Souris

- `click`, `mousedown`, `mouseup`, `dblclick`
- `mousemove`, `mouseover`, `mouseenter`, `mouseleave`

### Formulaires

- `submit`
- `input`
- `change`
- `keypress`, `keyup`, `keydown`

### Autres

- `scroll`
- `resize`
  - Quand la fenêtre est redimensionnée
- `touchstart`, `touchend`
  - Lié aux mobiles/tablettes
- `DOMContentLoaded`
  - Quand le HTML est chargée et que l'arbre DOM est construit
- `load`
  - Quand la page entière est chargée (CSS, fonts, images, etc.)


## Propriétés

Tout évèvenement produit a des propriétés. Certaines sont communs à tous les types d'évènement, d'autres sont spécifiques.

### [Communes](https://developer.mozilla.org/en-US/docs/Web/API/Event)

```js
element.addEventListener("peu importe l'évènement", function (event) {
  event.target; // renvoie l'élément qui a généré l'évènement
  event.timestamp; // renvoie la date de l'évènement en ms depuis le chargement de la page
  event.stopPropagation(); // stoppe la propagation de l'évènement
  event.preventDefault(); // empêche les comportements par défaut
  // non exhaustif
});
```

### [Souris](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent)

```js
element.addEventListener("click", function (event) {
  event.clientX; // renvoie la position X de la souris
  event.clientY; // renvoie la position Y de la souris
  event.button; // renvoie le numéro du bouton utilisé
  event.altKey; // informe si ALT / OPTION est enfoncée
  event.ctrlKey; // informe si CTRL est enfoncée
  event.metaKey; // informe si META / COMMAND est enfoncée
  event.shiftKey; // informe si SHIFT est enfoncée
  // non exhaustif
});
```

### [Clavier](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent)

```js
element.addEventListener("keydown", function (event) {
  event.code; // renvoie le code de la touche
  event.key; // renvoie la valeur de la touche
  event.altKey; // informe si ALT / OPTION est enfoncée
  event.ctrlKey; // informe si CTRL est enfoncée
  event.metaKey; // informe si META / COMMAND est enfoncée
  event.shiftKey; // informe si SHIFT est enfoncée
  event.key; // renvoie la valeur de la touche
  event.repeat; // informe si la touche est laissée enfoncée
  // non exhaustif
});
```

---

## À retenir

- on peut écouter tout type d'évènement sur un élément, ainsi que sur `window` et `document`
- utiliser plutôt `.addEventListener()` que `.onclick`
- pour supprimer correctement un listener, passer sa référence
- les évènements ont différentes propriétés

---

## Exercices

- Ouvrir le dossier `/exos/3_browser/3-3_events`
- Ouvrir le fichier `index.html` dans votre navigateur
- Suivre les indications du fichier `index.js`, et vérifier les résultats dans votre navigateur

---

### _À suivre: [Storage](./3-4_storage.md)_
