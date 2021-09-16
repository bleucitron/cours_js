# [Fonctions](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Fonctions)

Les fonctions contiennent du code. Elles sont comme des petites lunes autour de
notre planète.

On peut également les voir comme des recettes de cuisine.

```js
function chanter() {
  console.log("♪ LALALA ♬");
}
```

## Définir une fonction

Une fonction a toujours:

- un corps
- une seule sortie

```js
function () {}; // répond undefined

function () {
  return 'gateau';
};
```

**Si on ne précise pas de `return`, la fonction renvoie automatiquement
`undefined`**.

Une fonction a parfois:

- un nom
- une ou plusieurs entrées

```js
function cuisiner(lait, chocolat, beurre) {
  return "gateau";
}

console.log(cuisiner);
```

Donner un nom à une fonction permet de la réutiliser.

## Exécuter une fonction

On exécute une fonction en ajoutant `()` derrière son nom.

```js
dormir();
```

Si la fonction possède `return` dans son corps, alors l'exécution de la fonction
renvoie la valeur de `return`. Sinon l'exécution renvoie `undefined`.

```js
function cuisiner() {
  return "gateau";
}

const dessert = manger(); // dessert pointe vers 'gateau'

function chanter() {
  console.log("Lalalalala");
}

const chanson = chanter(); // chanson pointe vers undefined
```

Tant qu'une fonction n'est pas appelée, les instructions de son corps ne sont
pas exécutées.

```js
function cuisiner() {
  return "gateau";
}
// la fonction n'est pas exécutée

console.log(cuisiner); // affiche la définition de la fonction
// la fonction n'est pas exécutée

console.log(cuisiner()); // affiche gateau
// la fonction a été exécutée
```

## [Fonctions flèche](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Fonctions/Fonctions_fl%C3%A9ch%C3%A9es)

Depuis ES6, on peut également définir des fonctions en utilisant la syntaxe
fléchée.

```js
const saluer = () => {
  console.log("Salut !");
};
```

Elles possèdent 2 avantages:

- plus concises
- pas de redéfinition de `this`

**En général, il est recommandé d'utiliser la syntaxe fléchée pour les
callbacks**, qui sont des fonctions que l'on passe à d'autres fonctions.

```js
[1, 2, 3].forEach(function (element) {
  console.log("COUCOU", element);
});

[1, 2, 3].forEach((element) => {
  console.log("COUCOU", element);
});
```

## _**À vos claviers !!!**_

- Ouvrir le dossier `/exos/2_syntax`
- Ouvrir le fichier `index.html` dans votre navigateur
- Suivre les indications du fichier `part-1.js`, et vérifier les résultats dans
  votre navigateur

## À suivre: [Tableaux](./2-4_arrays.md)
