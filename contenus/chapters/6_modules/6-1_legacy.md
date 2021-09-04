# Origine des modules

## `<script>`

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

Il y a une vieille habitude de mettre les scripts à la fin du `<body>`. Pourquoi ?

```html
<!DOCTYPE html>
<html>
  <head></head>
  <body>
    <main>My content</main>
    <script src="iTakeMyTime.js"></script>
  </body>
</html>
```

### Defer

`defer` permet de dire au navigateur de différer le téléchargement du script.

Le navigateur va alors attendre d'avoir lu tout le HTML et d'avoir construit le DOM avant de télécharger le script `defer`.

L'ordre des scripts déclarés avec `defer` est conservé.

L'évènement `DOMContentLoaded` ne sera généré que lorsque tous les scripts `defer` auront été chargés et exécutés.

Il est intéressant d'utiliser `defer` lorsque vous avez besoin de conserver l'ordre des scripts, ou d'utiliser de faire appel au DOM.

```html
<!DOCTYPE html>
<html>
  <head>
    <script src="code1.js" defer></script>
    <script src="code2.js" defer></script>
  </head>
  <body></body>
</html>
```

### Async

`async` permet de télécharger et d'exécuter un script sans bloquer la suite de l'analyse du HTML.

Les scripts `async` seront donc chargés et exécutés en parallèle.

Néanmoins, un script `async` s'éxecutera dès qu'il sera téléchargé, ce qui signifie que l'ordre des scripts ne sera pas garanti.

Il est intéressant d'utiliser `async` lorsque vous avez des scripts qui fonctionnent en autonomie, comme des scripts d'analytics par exemple.

```html
<!DOCTYPE html>
<html>
  <head>
    <script src="code1.js" async></script>
    <script src="code2.js" async></script>
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
- `getJson.js`
- `main.js`

et les charger avec `<script src="...">` dans le `<head>`.

---

## Dépendances explicites

Les différents morceaux de code d'une application dépendent les uns des autres. Mais en JavaScript, ces dépendances sont par défaut **implicites**.

On souhaite rendre claires les relations entre fichiers, afin de savoir sans équivoque quel fichier nécessite quels autres fichiers.

On veut donc rendre les dépendances entre fichiers **explicites**.

## Origine des modules: CommonJS (Node.js)

```js
'use strict';

var dep1 = require('module'); // module natif Node ou installé
var dep2 = require('./fichier.js'); // fichier local au projet

// code

module.exports = function (a) {
  var h = dep1(48);
  return h + dep2(a);
};
```

Problème: `require` synchrone

#### _La suite: [Modules ESM](../7_tooling/6-2_esm.md)_
