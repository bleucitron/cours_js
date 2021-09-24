# [DOM (Document Object Model)](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)

Une page HTML est un arbre grosso modo composée de noeuds et d'élements.

Le DOM est une API pour manipuler un document HTML ou XML (arbre). Souvent,
parlant de DOM, on désigne indifféremment l'arbre HTML ou l'API DOM.

[L'essentiel](https://developer.mozilla.org/fr/docs/Web/API/Document_Object_Model/Introduction#Interfaces_essentielles_du_DOM)

La plupart des entités du DOM sont des éléments. Mais ces éléments héritent de
propriétés d'autres entités, comme les noeuds, ou les écouteurs. Cela est
similaire à la façons dont les humains héritent des propriétés des mammifères,
etc...

Être vivant -> Mammifère -> Humain

EventTarget -> Node -> Element

Les `element` sont des `nodes`, mais pas l'inverse, les `nodes` sont des
`event targets`, mais pas l'inverse.

## Window

TODO => Détailler

```js
const timeoutId = setTimeout(function() {}, 1000) // exécute la fonction au bout de 1000ms
const intervalId = setInterval(function() {}, 1000) // exécute la fonction toutes les 1000ms

clearTimeout(timeoutId) // annule le timeout
clearInterval(intervalId) // annule l'intervalle
```

## [Node](https://developer.mozilla.org/fr/docs/Web/API/Node)

Représentent les noeuds de l'arbre.

```js
n.children;
n.parentNode;
parent.append(enfant);
n.remove();
n.replaceWith(n2);
```

Tant qu'un noeud n'est pas "accroché" au <body>, (via éventuellement des noeuds
intermédiaires), il ne sera pas affiché à l'écran.

## [Document](https://developer.mozilla.org/fr/docs/Web/API/Document)

Le document est un noeud spécial.

Il englobe tous les noeuds/éléments de la page, permet de rechercher des
éléments, de les créer, de les ajouter à la page.

```js
document.body; // renvoie le body

const maDiv = document.createElement("div"); // crée une div orpheline
const monSvg = document.createElementNS("http://www.w3.org/2000/svg", "g"); // pour le SVG

const myElement = document.getElementById("myId"); // renvoie l'élément qui a l'id 'myId'
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

Tout est un `EventTarget`. Un `EventTarget` écoute les évènements qui se
produise sur lui-même, et réagit si on lui a donné un `listener` (une fonction).

```js
n.addEventListener(type, listener, options); // si l'évèvement type se produit sur n, alors exécute listener, avec des options
n.removeEventListener(type, listener); // attention, comparaison par référence

// Exemple
monElement.addEventListener(
  "click",
  function () {
    console.log("yo");
  },
  { once: true },
);
```

Éviter les `onclick`, `onmousemove`... Ils sont uniques par élément.

## À suivre: [Évènements](../3_browser/3-2_events.md)
