# [Evènements](https://developer.mozilla.org/en-US/docs/Web/Events)

## Types classiques

### Souris

- `click`, `mousedown`, `mouseup`, `dblclick`
- `mousemove`, `mouseover`, `mouseenter`, `mouseleave`

### Formulaires

- `submit` (&lt;form>)
- `input`
- `change`
- `keypress`, `keyup`, `keydown`
- `scroll` (listener après le scroll)

### Autres

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
  event.bubbles; // renseigne sur la position dans le chemin de propagation
  event.isTrusted; // dit si l'évènement a été généré naturellement ou via du code
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
  event.key; // renvoie la valeur de la touche
  event.repeat; // informe si la touche est laissée enfoncée
  // non exhaustif
});
```

etc...

---

## À suivre: [Localstorage](../3_browser/3-3_localstorage.md)
