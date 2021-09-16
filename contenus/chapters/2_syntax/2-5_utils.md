# Utilitaires sympas

## [Mode strict](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)

Permet d'éviter de faire des "erreurs" bêtes.

Il suffit de mettre `use strict;` tout en haut de tous vos fichiers Javascript.

```js
a = 1; // Pas d'prob, mais  ne JAMAIS faire ça
var undefined = 1; // Pas d'prob, mais  ne JAMAIS faire ça
var o = { a: 1, a: 2 }; // Pas d'prob, mais  ne JAMAIS faire ça
```

```js
"use strict";

a = 1; // ERROR
var undefined = 1; // ERROR
var o = { a: 1, a: 2 }; // ERROR
```

## [Math](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Math)

Une collection de fonctions pour faire des maths.

- `Math.random()`
- `Math.round/floor/ceil`
- `Math.sin()`
- ...

## [JSON](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/JSON)

JSON : JavaScript Object Notation

C'est un format d'échange (manière de sérialiser des données structurées)

- `JSON.stringify(obj) => string`
- `JSON.parse(string) => obj`

```js
const o = {
  a: 1,
  bloublou: 9,
  chapito: "yo",
  brave: {
    autre: "object",
  },
};

JSON.stringify(o);
```

⚠ C'est un format fragile ⚠, vérifier avec [JSON Lint](https://jsonlint.com/)

## [Dates](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)

```js
const uneDate = new Date("2009-10-12"); // renvoie une objet Date
const aujourdHui = new Date();

uneDate.getTime(); // nombre de millisecondes depuis le 1er janvier 1970
uneDate.getDay();
uneDate.getDate();
uneDate.getMonth();
uneDate.getFullYear();
// etc ...

aujourdHui - uneDate; // soustrait les dates, renvoie un entier en millisecondes
```

---

## _**À vos claviers !!!**_

- Ouvrir le dossier `/exos/2_syntax`
- Ouvrir le fichier `index.html` dans votre navigateur
- Suivre les indications du fichier `part-2.js`, et vérifier les résultats dans
  votre navigateur

## À suivre: [DOM](../3_browser/3-1_dom.md)
