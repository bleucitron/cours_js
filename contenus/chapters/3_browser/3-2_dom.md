# [DOM (Document Object Model)](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)

> Lire et manipuler une page

Le HTML permet de structurer de l'information sous la forme d'un arbre. Dans un navigateur, cet arbre est accessible dans le *`document`*.

[TODO] Schéma du DOM

> Vous pouvez visualiser le DOM via les outils développeur de votre navigateur, dans l'onglet *Éléments*

**Le DOM est une API pour manipuler un document HTML** (ou XML). Souvent,
parlant de DOM, on désigne indifféremment l'arbre HTML ou l'API DOM.

[L'essentiel](https://developer.mozilla.org/fr/docs/Web/API/Document_Object_Model/Introduction#Interfaces_essentielles_du_DOM)

**La plupart des entités du DOM sont des éléments**. Les éléments DOM représentent les éléments HTML de nos pages. Ils héritent de différentes propriétés, venant par exemple des *noeuds* ainsi que des *cibles d'évènements*.

À ce niveau, on va se concentrer sur les *éléments*, et ce qu'il est possible de faire avec.

## Le `body`

Le `<body>` est la racine du DOM visible.

```js
document.body;
```

## Créer des éléments

Le `<body>` est la racine du DOM visible.

```js
document.body;
```

Créer des éléments se fait avec `document.createElement()`.

```js
const maDiv = document.createElement("div"); // crée une div orpheline
const monH1 = document.createElement("h1"); // crée un h1 orphelin
```

**Tant qu'un noeud n'est pas "accroché" au `<body>`, il ne sera pas affiché à l'écran.** Le lien peut être indirect, via des éléments intermédiaires.

```js
const div1 = document.createElement("div");
const div2 = document.createElement("div");

document.body.append(div2); // div2 est visible à l'écran
```

## Rechercher des éléments

### Dans tout le document

```js
const myElement = document.getElementById("myId"); // renvoie l'élément qui a l'id 'myId'

const found = document.querySelector(selector); // renvoie le premier élément correspondant de la page
const founds = document.querySelectorAll(selector); // renvoie un iterateur avec tous les éléments de la page correspondant
```

### Dans les enfants d'un élément

```js
const myChild = myElement.querySelector(selector);
const myChildren = myElement.querySelectorAll(selector);
```

## Accéder aux informations des éléments

### Informations liées à l'arbre

```js
e.parentNode;
e.children;
e.nextElementSibling;
// ...
```

### Informations propres

```js
e.id;
e.textContent;
e.innerHTML;
e.className;

// lire le style calculé
getComputedStyle(e)

// ...
```

## Manipuler des éléments

### Position

```js
e.append(enfant); // ajoute un enfant en dernière position à l'élément
e.prepend(enfant); // ajoute un enfant en première position à l'élément
e.remove(); // retire l'élement de l'arbre
e.removeChild(enfant); // retire un enfant de l'arbre
e.replaceWith(n2); // remplace l'élément par un autre
// ...
```

### Attributs

```js
e.id = 'newId';
e.textContent = 'Coucou';

e.innerHTML = '<div>Coucou</div>';
e.innerHTML = '' // vide le contenu HTML de l'élément
// ...
```

> Même s'il peut être pratique, `.innerHTML` est plutôt à éviter, car [ouvre des failles de sécurité](https://developer.mozilla.org/fr/docs/Web/API/Element/innerHTML#consid%C3%A9rations_de_s%C3%A9curit%C3%A9).

### Style

On peut tout à fait modifier le style d'un élément via
```js
e.style.color = 'red'; // par exemple
e.style.height = '324px';
e.style.width = '500px';
```

Mais il faut avoir conscience que **passer par le `.style.` revient à *inliner* le style**, ce qui le rend prioritaire sur toute règle CSS présente dans une feuille de style.

De manière générale **on préfère éviter d'inliner le style**, mais c'est parfois nécessaire.

Dans la plupart des cas, on viendra **plutôt manipuler les classes**. Pour cela, il vaut mieux **privilégier `e.classList`**, qui offre plus de facilités.

```js
e.className = 'class1 class2'; // difficile à manipuler

e.classList.add('class1');
e.classList.remove('class1');
e.classList.toggle('class1');
e.classList.replace('class1', 'class2');
e.classList.contains('class1');
```

---

## À retenir

- le DOM est moyen de lire et manipuler l'arbre HTML d'une page
- on peut créer, lire, modifier des éléments
- éviter d'utiliser `.innerHTML` pour manipuler un élément
- un élément non accroché au `<body>` ne sera pas affiché à l'écran
- éviter d'utiliser `.style.` pour manipuler le style d'un élément
- utiliser `.classList` pour manipuler le style d'un élément

---

## Exercices

- Ouvrir le dossier `/exos/3_browser/3-2_dom`
- Ouvrir le fichier `index.html` dans votre navigateur
- Suivre les indications du fichier `index.js`, et vérifier les résultats dans votre navigateur

---

### _À suivre: [Évènements](./3-3_events.md)_
