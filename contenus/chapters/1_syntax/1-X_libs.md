# Librairies standards

> Quelques outils avancés

## [`Number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

- `Number.POSITIVE_INFINITY`
- `Number.NEGATIVE_INFINITY`

- `Number.isNaN()`
- `Number.isInteger()`
- `Number.parseInt()`
- `Number.parseFloat()`
- ...


## [`Math`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Math)

Une collection de fonctions pour faire des maths.

- `Math.PI`
- `Math.random()`
- `Math.round/floor/ceil`
- `Math.sin()`
- ...

## [`JSON`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/JSON)

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

## [`Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)

```js
const uneDate = new Date("2009-10-12"); // renvoie une objet Date
const aujourdHui = new Date();

uneDate.getTime(); // nombre de millisecondes depuis le 1er janvier 1970
uneDate.getDay();
uneDate.getDate();
uneDate.getMonth();
uneDate.getFullYear();

uneDate.toLocaleDateString(); // date en format humain
uneDate.toLocaleTimeString(); // heure en format humain
// etc ...

aujourdHui - uneDate; // soustrait les dates, renvoie un entier en millisecondes
```

---

## Exos

- Ouvrir le dossier `/exos/1_syntax/1-6_libs`
- Ouvrir le fichier `index.html` dans votre navigateur
- Suivre les indications du fichier `.js`, et vérifier les résultats dans
  votre navigateur

---

### _À suivre: [Le navigateur](../2_mental_models/index.md)_
