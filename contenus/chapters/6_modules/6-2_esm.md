# Modules ECMAScript

## À l'ancienne

On peut "importer" des scripts dans les HTML, via les balises `<script>`, soit
en inline, soit en "script-src".

```html
<!DOCTYPE html>
<html>
  <head>
    <script src="code1.js"></script>
    <script src="code2.js"></script>
    <script src="code3.js"></script>
    <script src="code4.js"></script>
    <script src="code5.js"></script>
    <script src="code6.js"></script>
  </head>
  <body></body>
</html>
```

---

# **_À vos claviers !!!_**

Dans le dossier `src`, créer plusieurs fichiers avec du code

- `createTweetLi.js`
- `createTweetsOl.js`
- `createFilterButton.js`
- `fetchJson.js`
- `main.js`

et les charger avec `<script src="...">` dans le `<head>`.

---

## Dépendances explicites

Les différents morceaux de code d'une application dépendent les uns des autres.
Mais en JavaScript, ces dépendances sont par défaut **implicites**.

On souhaite rendre claires les relations entre fichiers, afin de savoir sans
équivoque quel fichier nécessite quels autres fichiers.

On veut donc rendre les dépendances entre fichiers **explicites**.

## Modules ES6

Quand on importe un module, on "récupère" ce que ce module exporte.

Le module "point d'entrée" n'exporte rien.

Les modules "feuilles" n'importent rien.

### [`export`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/export)

On peut exporter des valeurs, des objets, des fonctions...

```js
// export par défaut, n'a pas besoin de nom
export default { a: 1, b: 2 };

// marche aussi pour les fonctions
export default function () {
  console.log("Coucou");
}

export const maConst = 5; // export secondaire
```

### [`import`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/import)

On peut importer depuis un module natif ou installé, ou depuis les fichiers
locaux du projet.

```js
// un module importe d'autres modules

import monModule from "monModule"; // import externe
import maFonction from "./monFichierLocal"; // import local

import { charmander as salameche, pikachu } from "pokemons"; // on importe seulement "pikachu" et "charmander", que je renomme en "salameche"

console.log(pikachu);

import * as pokemons from "pokemons"; // on importe tous les exports

console.log(pokemons.pikachu);

// ...
```

**Les modules sont par défaut en mode strict !**

### Utiliser un module

Pour pouvoir utiliser un script de type module dans le HTML, il faut l'insérer
dans un `<script>` de type `"module"`.

Toutes les dépendances d'un script `"module"` seront directement importées en
suivant l'arbre de dépendances construit avec les différents `import` et
`export`.

**Lorsque l'on utilise les modules, il faut impérativement servir sa page depuis
un serveur HTTP (et non depuis le protocole `file://`).**

```html
<!DOCTYPE html>
<html>
  <head>
    <script src="code1.js" type="module"></script>
  </head>
  <body></body>
</html>
```

# **_À vos claviers !!!_**

Ouvrez le fichier `index.html` avec
[VS Code LiveServer](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).

Puis utiliser les syntaxes `import` et `export` pour reconstruire votre arbre de
dépendances, et retrouver votre code fonctionnel.

---

#### _La suite: [Retour vers le futur](../7_tooling/7-1_back_to_the_future.md)_
