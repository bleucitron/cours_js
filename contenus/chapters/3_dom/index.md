# [DOM (Document Object Model)](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)

Une page HTML est un arbre grosso modo composée de noeuds et d'élements.

Le DOM est une API pour manipuler un document HTML ou XML (arbre). Souvent, parlant de DOM, on désigne indifféremment l'arbre HTML ou l'API DOM.

[L'essentiel](https://developer.mozilla.org/fr/docs/Web/API/Document_Object_Model/Introduction#Interfaces_essentielles_du_DOM)

La plupart des entités du DOM sont des éléments. Mais ces éléments héritent de propriétés d'autres entités, comme les noeuds, ou les écouteurs. Cela est similaire à la façons dont les humains héritent des propriétés des mammifères, etc...

Être vivant -> Mammifère -> Humain

EventListener -> Node -> Element

Les `element` sont des `nodes`, mais pas l'inverse, les `nodes` sont des `event listeners`, mais pas l'inverse.

## [Node](https://developer.mozilla.org/fr/docs/Web/API/Node)

Représentent les noeuds de l'arbre.

```js
n.children;
n.parentNode;
parent.append(enfant);
n.remove();
n.replaceWith(n2);
```

## [Document](https://developer.mozilla.org/fr/docs/Web/API/Document)

Le document est un noeud spécial.

Il englobe tous les noeuds/éléments de la page, permet de rechercher des éléments, de les créer, de les ajouter à la page.

```js
document.body; // renvoie le body

const maDiv = document.createElement('div'); // crée une div orpheline
const monSvg = document.createElementNS('http://www.w3.org/2000/svg', 'g'); // pour le SVG

const found = document.querySelector(selector); // renvoie le premier élément correspondant de la page
const founds = document.querySelectorAll(selector); // renvoie un iterateur avec tous les éléments de la page correspondant
```

## [Element](https://developer.mozilla.org/en-US/docs/Web/API/element)

Tous les éléments sont des noeuds, mais pas l'inverse.

Il existe notamment des `HTMLElement`, des `SVGElement`, etc...

### Modifier un élément

```js
e.getAttribute(key);
a.getAttribute('href');
e.setAttribute(key, value);
e.removeAttribute(key);
e.removeAttribute('hidden');

e.textContent = 'Blablabla...';

/!\ e.innerHTML = ... // DANGEREUX, à éviter
e.innerHTML = ''; // pour vider un élément
```

### Rechercher un élément enfant

```js
e.querySelector(selector);
e.querySelectorAll(selector);
```

### Jouer avec le style

```js
e.className // ancien, à éviter
e.classList // moderne, pour accéder aux styles
e.classList.add/remove/contains/toggle

e.style.backgroundColor = ... // l'équivalent CSS est background-color
```

## [EventTarget](https://developer.mozilla.org/fr/docs/Web/API/EventTarget)

Tout est un `EventTarget`. Un `EventTarget` écoute les évènements qui se produise sur lui-même, et réagit si on lui a donné un `listener` (une fonction).

```js
n.addEventListener(type, listener, options); // si l'évèvement type se produit sur n, alors exécute listener, avec des options
n.removeEventListener(type, listener); // attention, comparaison par référence
n.dispatchEvent(e); // génére un évènement custom
// Exemple
monElement.addEventListener(
  'click',
  function () {
    console.log('yo');
  },
  { once: true },
);
```

Éviter les `onclick`, `onmousemove`...
Ils sont uniques par élément.

## [Evènements](https://developer.mozilla.org/en-US/docs/Web/Events)

- `DOMContentLoaded`
  - Quand le HTML est chargée et que l'arbre DOM est construit
- `load`
  - Quand la page entière est chargée (CSS, fonts, images, etc.)
- `click`, `mousedown`, `mouseup`, `dblclick`
- `mousemove`, `mouseover`, `mouseenter`, `mouseleave`
- `submit` (&lt;form>)
- `keypress`, `keyup`, `keydown`
- `input`
- `change`
- `scroll` (listener après le scroll)
- `touchstart`

### Event properties

```js
element.addEventListener('click', function (e) {
  e.target; // renvoie l'élément qui a généré l'évènement
  e.currentTarget; // renvoie l'élément courant lors de la traversée du DOM
  e.timestamp; // renvoie la date de l'évènement en ms depuis le chargement de la page
  e.preventDefault(); // empêche les comportements par défaut
  e.clientX; // renvoie la position X de la souris
  e.clientY; // renvoie la position Y de la souris
  e.bubbles; // renvoie true si l'évènement remonte l'arbre, false s'il descend
  e.stopPropagation(); // arrête la propagation de l'évènement
});
```

---

# _**À vos claviers !!!**_

- Ouvrir le dossier `/exos/3_dom`
- Ouvrir le fichier `index.html` dans votre navigateur
- Suivre les indications du fichier `index.js`, et vérifier les résultats dans votre navigateur

## À suivre: [Asynchrone](../4_async/index.md)
