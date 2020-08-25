# Gérer l'asynchrone

Un code asynchrone permet les opérations asynchrones, qui prennent du temps sans bloquer l'éxécution de la suite.

C'est une problématique fortement liée au réseau, et à ses fluctuations.

**Javascript est donc asynchrone.**

On peut lancer certaines opérations qui prennent un certain temps, souvent indéfini, sans bloquer le reste du code.

```js
function rendMoiMonArgent(somme) {
  setTimeout(() => {
    console.log('Tiens, ton argent', somme);
  }, 2); // ... au bout de 2 ans
}

rendMoiMonArgent(200);
console.log("J'ai besoin de mon argent"); // n'attend pas 2 ans
```

Mais comment faire si j'ai besoin du résultat d'une opération asynchrone ?

Il faudrait pouvoir écrire quelque chose comme ça:

```js
function rendMoiMonArgent(somme) {
  return laPromesseDeTonArgent(somme); // ... au bout de 2 ans
}

function récupérerLArgent() {
  const argent = rendMoiMonArgent(200); // ici je veux attendre

  console.log('Argent', argent);
}

récupérerLArgent();
```

Deux possibilités:

- les Promesses
- `async/await`

## Les [Promesses](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise)

Les Promesses permettent de gérer les opérations asynchrones avec une certaine API.

Leur manipulation détaillée peut être obscure, et on ne va voir ici que les éléments principaux.

Une fois définie, une Promesse peut avoir 3 états:

- **en attente**: on attend
- **résolue**: la promesse est tenue
- **rejettée**: la promesse est brisée

Une fois une Promesse résolue ou rejettée, elle ne peut plus changer d'état.

### Créer une Promesse

Il y a plusieurs manières de créer des Promesses, mais en général on utilise des fonctions qui les créent pour nous.

Pour créer des Promesses qui vont chercher des données sur le réseau, on utilise `fetch()`;

```js
const laPromesseDeMaDonnée = fetch('unCertainEndroitSurInternet');
```

### Consommer une Promesse

Pour pouvoir consommer la donnée d'une Promesse, il faut être capable d'attendre que la Promesse se termine.

Il y a plusieurs manières d'attendre:

- `.then()` / `.catch()`
- `async` / `await`

Dans le cadre de cette formation, on va se concentrer sur `async` / `await`.

Comment attend-on ?

```js
const laPromesseDeMaDonnée = fetch('unCertainEndroitSurInternet');
console.log('Ma promesse', laPromesseDeMaDonnée); // ici, on a pas attendu, la donnée n'est pas encore disponible
```

**Pour attendre, il faut créer un contexte d'attente**. C'est-à-dire une fonction `async`, capable d'attendre.

```js
async function attendre() {
  // ceci est un contexte d'attente
}
```

**Dans une fonction `async`, on peut attendre une Promesse avec `await`**.

```js
async function attendre() {
  const maDonnée = await fetch('unCertainEndroitSurInternet'); // ici, on attend un certain temps, et on récupère la donnée
  console.log('Donnée', maDonnée);
}

attendre();
```

**⚠ ATTENTION ⚠: la donnée ne sera disponible que dans le contexte `async`, pas en dehors**.

Si une Promesse est rejetée, on peut réagir au problème avec `catch(e)`.

```js
async function attendre() {
  try {
    // on essaie de voir si ça se passe bien
    const maDonnée = await fetch('unCertainEndroitSurInternet');
    console.log('Donnée', maDonnée);
  } catch (e) {
    // en fait ça s'est mal passé
    console.log('La raison du problème', e);
  }
}

attendre();
```

### `fetch()`

`fetch()` permet de requêter le réseau pour obtenir une réponse contenant de la donnée (une page web, ou autre);

**`fetch()` crée une Promesse d'avoir la réponse HTTP de notre requête**. Et non pas notre donnée telle quelle.

La donnée que l'on attend est contenue dans le `body` de la réponse. Mais ce `body` est un flux de données, dont l'accès est par définition asynchrone.

Pour obtenir la donnée que l'on attend à partir de la réponse, on peut utiliser:

- `.text()`: renvoie la donnée sous forme de texte simple
- `.json()`: si la donnée est du JSON, le transforme

```js
async function attendre() {
  const maReponse = await fetch('urlVersUnePage');
  console.log('maReponse', maReponse); // ceci n'est pas ma donnée, mais la réponse HTTP
  const maDonnee = await maReponse.json(); // .json() crée une promesse de lire le flux et de l'interprêter comme du JSON
  console.log('maDonnee', maDonnee); // ceci est ma donnée
}
```

---

# _**À vos claviers !!!**_

- Ouvrir le dossier `/exos/4_async`
- Ouvrir le fichier `index.html` dans votre navigateur
- Suivre les indications du fichier `index.js`, et vérifier les résultats dans votre navigateur

## À suivre: [Modules](../5_modules/index.md)
