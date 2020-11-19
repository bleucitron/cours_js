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

Avant l'introduction des Promesses, on utilisait des _callbacks_, des fonctions que l'on passe en argument.

```js
function afficheProfil(name) {
  console.log('Mon nom est', name);
}

vaChercherMonProfil(afficheProfil);

console.log('Pas de profil');

/*
Pas de profil
Mon nom est Jean-jean
*/
```

Mais on tombait vite dans l'enfer des callbacks. Quand il y a trop de callbacks, parfois imbriqués, il devient difficile de suivre l'enchaînement des exécutions de callbacks.

C'est la raison de l'apparition des Promesses.

## Les [Promesses](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise)

Les Promesses permettent de gérer les opérations asynchrones avec une certaine API.

Une fois définie, une Promesse peut avoir 3 états:

- **en attente**: on attend
- **résolue**: la promesse est tenue
- **rejetée**: la promesse est brisée

Une fois une Promesse résolue ou rejetée, elle ne peut plus changer d'état.

### Créer une Promesse

Une Promesse est un objet spécial prenant une fonction en argument.
Cette fonction fait un certain de choses asynchrones que l'on choisit, et est capable de **résoudre** (`resolve`) une valeur quand tout s'est bien passé, ou de **rejeter** (`reject`) une valeur quand quelque chose s'est mal passé.

```js
const maPromesse = new Promise(function (resolve, reject) {
  console.log('Initial');
  if (toutVaBien) resolve('OK');
  else reject('On est dans la mouise');
});
```

En général on n'écrit pas nous-mêmes une Promesse. On utilise souvent des fonctions qui les créent pour nous. Notamment pour chercher des données sur le réseau, on utilise `fetch()`;

```js
const laPromesseDeMaDonnée = fetch('unCertainEndroitSurInternet');
```

### Consommer une Promesse

En général les Promesses renvoient une donnée, que l'on appelle souvent la **valeur promise**.

Il est important de bien différencier la Promesse de sa valeur promise.

Cette valeur promise n'est disponible que lorsque la Promesse est résolue. **Vous ne pourrez jamais y accéder en dehors du contexte où l'on a attendu la résolution** de la Promesse.

Pour pouvoir consommer la valeur promise d'une Promesse, il faut être capable d'attendre que la Promesse se termine.

Pour cela, on peut utiliser `.then()` / `.catch()` sur une Promesse.

```js
const maPromesse = new Promise(function (resolve, reject) {
  console.log('Initial');
  if (toutVaBien) resolve(2500);
  else reject("J'ai perdu ton argent au poker");
});

maPromesse
  .then(function (valeurPromise) {
    console.log('Résultat:', valeurPromise); // 2500
  })
  .catch(function (erreur) {
    console.error('Erreur:', erreur); // J'ai perdu ton argent au poker
  });

console.log(valeurPromise); // ERREUR: ici valeurPromise n'a pas de sens
```

### Chaînage

Une Promesse est un _thenable_, c'est-à-dire qu'on peut écrire `.then()` ou `.catch()` derrière. Mais `p.then()` ou `p.catch()` sont également eux-mêmes des Promesse. On peut donc chaîner les Promesses.

`p.then().then().catch().then()...`

```js
maPromesse.then(function (vp1) {
  console.log('VP1', vp1);

  autreFonctionAsync(vp1).then(function (vp2) {
    console.log('VP2', vp2);
  });
});

// Mieux
maPromesse
  .then(function (vp1) {
    console.log('VP1', vp1);
    return autreFonctionAsync(vp1);
  })
  .then(function (vp2) {
    console.log('VP2', vp2);
  });
```

### Synchroniser

Si on a plusieurs Promesses, on peut se retrouver avec du code comme ça:

```js
p1.then(function (vp1) {
  console.log(vp1);

  p2.then(function (vp2) {
    console.log(vp1, vp2);
  });
});
```

Si jamais la création de `p2` dépend de `vp1`, alors il n'y a pas de réel problème.

Mais, souvent, `p1` et `p2` sont 2 Promesses indépendantes, dont on veut traiter les valeurs promises ensemble. Dans ce cas, le code plus haut n'est pas idéal, car on attend que `p1` se termine pour attendre `p2`.

En réalité, on veut attendre en même temps, et **synchroniser** quand toutes les Promesses sont terminées.

Si on veut synchroniser plusieurs promesses, on peut utiliser

- `Promise.all()`, crée la promesse d'avoir **TOUTES** les promesses **résolues**

```js
Promise.all([promesse1, promesse2]).then(function (tableauDesResultats) {
  console.log(tableauDesResultats); // [resultat1, resultat2]
});
```

## `fetch()`

`fetch()` permet de requêter le réseau pour obtenir une réponse contenant de la donnée (une page web, ou autre);

**`fetch()` crée une Promesse d'avoir la réponse HTTP de notre requête**. Et non pas notre donnée telle quelle.

La donnée que l'on attend est contenue dans le `body` de la réponse. Mais ce `body` est un flux de données, dont l'accès est par définition asynchrone.

Pour obtenir la donnée que l'on attend à partir de la réponse, on peut utiliser:

- `.text()`: renvoie la donnée sous forme de texte simple
- `.json()`: si la donnée est du JSON, le transforme

```js
fetch('urlVersUnePage')
  .then(function (maReponse) {
    console.log('maReponse', maReponse); // ceci n'est pas ma donnée, mais la réponse HTTP

    return maReponse.json(); // .json() crée une promesse de lire le flux et de l'interprêter comme du JSON
  })
  .then(function (maDonnee) {
    console.log('maDonnee', maDonnee); // ceci est ma donnée
  });
```

---

# _**À vos claviers !!!**_

- Ouvrir le dossier `/exos/4_async`
- Ouvrir le fichier `index.html` dans votre navigateur
- Suivre les indications du fichier `index.js`, et vérifier les résultats dans votre navigateur

## À suivre: [Modules](../5_modules/index.md)
