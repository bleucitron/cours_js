# Modules

## À l'ancienne

On peut "importer" des scripts dans les HTML, via les balises `<script>`, soit en inline, soit en "script-src".

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

## Dépendances explicites

Les différents morceaux de code d'une application dépendent les uns des autres. Mais en JavaScript, ces dépendances sont par défaut **implicites**.

On souhaite rendre claires les relations entre fichiers, afin de savoir sans équivoque quel fichier nécessite quels autres fichiers.

On veut donc rendre les dépendances entre fichiers **explicites**.

## Origine des modules: CommonJS (Node.js)

```js
'use strict';
var dep2 = require('./fichier.js');

// code

module.exports = function (a) {
  var h = dep1(48);
  return h + dep2(a);
};
```

> À noter que `require` est synchrone

## Modules ES6

Quand on importe un module, on "récupère" ce que ce module exporte.

Le module "point d'entrée" n'exporte rien.

Les modules "feuilles" n'importent rien.

### [`export`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/export)

On peut exporter des valeurs, des objets, des fonctions...

```js
export const maConst = 5;

export function maFonction() {
  console.log('Prout')
};
```

### [`import`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/import)

On peut importer depuis un module natif ou installé, ou depuis les fichiers locaux du projet.

```js
// un module importe d'autres modules
import { pikachu, charmander as salameche } from './pokemons.js'; // on importe seulement "pikachu" et "charmander", que je renomme en "salameche"

console.log(pikachu);

import * as pokemons from './pokemons.js'; // on importe tous les exports

console.log(pokemons.pikachu);

// ...
```

> Le `./` est important !

**Les modules sont par défaut en mode strict !**

### `export default`

On peut également exporter des variables (ou fonctions) par défaut.

**Un `default` export est unique par module.**

```js
// export par défaut, n'a pas besoin de nom
export default {
  a: 1,
  b: 2,
};

export const c = 1; // export nommé, donc secondaire
```

```js
import maFonction from './module1.js'; // import du default
import jePeuxChangerLeNom, {a, b, c} from './module2.js'; // import du default et de secondaires
```

### Utiliser un module

Pour pouvoir utiliser un script de type module dans le HTML, il faut l'insérer dans un `<script>` de type `"module"`.

Toutes les dépendances d'un script `"module"` seront directement importées en suivant l'arbre de dépendances construit avec les différents `import` et `export`.

**Lorsque l'on utilise les modules, il faut impérativement servir sa page depuis un serveur HTTP (et non depuis le protocole `file://`).**

```html
<!DOCTYPE html>
<html>
  <head>
    <script src="code1.js" type="module"></script>
  </head>
  <body></body>
</html>
```

## Exercices

- Ouvrir le dossier `/exos/5_modern_js/5-2_modules`
- Ouvrir le fichier `index.html` dans votre navigateur
- Suivre les indications du fichier `index.js`, et vérifier les résultats dans votre navigateur


### _À suivre: [Outillage](../6_tooling/ReadMe.md)_
