# Les [Promesses](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise)

Les Promesses permettent de gérer les opérations asynchrones avec une certaine
API.

Une fois définie, une Promesse peut avoir 3 états:

- **en attente**: on attend
- **résolue**: la promesse est tenue
- **rejetée**: la promesse est brisée

Une fois une Promesse résolue ou rejetée, elle ne peut plus changer d'état. Elle
est alors dite "terminée" (_settled_).

## Créer une Promesse

Une Promesse est un objet spécial prenant une fonction en argument. Cette
fonction fait un certain de choses asynchrones que l'on choisit, et est capable
de **résoudre** (`resolve`) une valeur quand tout s'est bien passé, ou de
**rejeter** (`reject`) une valeur quand quelque chose s'est mal passé.

```js
const maPromesse = new Promise(function (resolve, reject) {
  console.log("Initial");
  if (toutVaBien) resolve("OK");
  else reject("On est dans la mouise");
});
```

En général on n'écrit pas nous-mêmes une Promesse. On utilise souvent des
fonctions qui les créent pour nous. Notamment pour chercher des données sur le
réseau, on utilise `fetch()`;

```js
const laPromesseDeMaDonnée = fetch("unCertainEndroitSurInternet");
```

## Consommer une Promesse

En général les Promesses renvoient une donnée, que l'on appelle souvent la
**valeur promise**.

Il est important de bien différencier la Promesse de sa valeur promise.

Cette valeur promise n'est disponible que lorsque la Promesse est résolue.
**Vous ne pourrez jamais y accéder en dehors du contexte où l'on a attendu la
résolution** de la Promesse.

Pour pouvoir consommer la valeur promise d'une Promesse, il faut être capable
d'attendre que la Promesse se termine.

Pour cela, on peut utiliser `.then()` / `.catch()` / `.finally()` sur une
Promesse.

- `.then()` s'exécute quand tout se passe bien (_promesse résolue_)
- `.catch()` s'exécute quand quelque chose se passe mal (_promesse rejetée_)
- `.finally()` s'exécute quelle que soit son issue (_promesse terminée_)

```js
const maPromesse = new Promise(function (resolve, reject) {
  console.log("Initial");
  if (toutVaBien) resolve(2500);
  else reject("Je suis nul");
});

maPromesse
  .then(function (valeurPromise) {
    console.log("Tiens ton argent:", valeurPromise); // 2500
  })
  .catch(function (erreur) {
    console.error("Euh, j'ai perdu ton argent parce que", erreur); // Je suis nul
  }).finally(function () { // aucune valeur n'est jamais fournie ici
    console.log("J'arrête le poker");
  });

console.log(valeurPromise); // ERREUR: ici valeurPromise n'a pas de sens
```

## Chaînage

Une Promesse est un _thenable_, c'est-à-dire qu'on peut écrire `.then()` ou
`.catch()` derrière. Mais `p.then()` ou `p.catch()` sont également eux-mêmes des
Promesse. On peut donc chaîner les Promesses.

`p.then().then().catch().then()...`

```js
maPromesse.then(function (vp1) {
  console.log("VP1", vp1);

  autreFonctionAsync(vp1).then(function (vp2) {
    console.log("VP2", vp2);
  });
});

// Mieux
maPromesse
  .then(function (vp1) {
    console.log("VP1", vp1);
    return autreFonctionAsync(vp1);
  })
  .then(function (vp2) {
    console.log("VP2", vp2);
  });
```

## Synchroniser

Si on a plusieurs Promesses, on peut se retrouver avec du code comme ça:

```js
p1.then(function (vp1) {
  console.log(vp1);

  p2.then(function (vp2) {
    console.log(vp1, vp2);

    // ... et on peut continuer plus profondément
  });
});
```

Si jamais la création de `p2` dépend de `vp1`, alors il n'y a pas de réel
problème.

Mais, souvent, `p1` et `p2` sont 2 Promesses indépendantes, dont on veut traiter
les valeurs promises ensemble. Dans ce cas, le code plus haut n'est pas idéal,
car on attend que `p1` se termine pour attendre `p2`.

En réalité, on veut attendre en même temps, et **synchroniser** quand toutes les
Promesses sont terminées.

Si on veut synchroniser plusieurs promesses, on peut utiliser

- `Promise.all()`, crée la promesse d'avoir **TOUTES** les promesses
  **résolues**
- `Promise.allSettled()`, crée la promesse d'avoir toutes les promesses
  **terminées**

```js
Promise.all([promesse1, promesse2]).then(function (tableauDesResultats) {
  console.log(tableauDesResultats); // [resultat1, resultat2]
});

Promise.allSettled([promesse1, promesse2]).then(function (tableauDesResultats) {
  console.log(tableauDesResultats); // [resultat1, resultat2]
});
```

## Autres méthodes

```js
const p = Promise.resolve("blabla"); // crée une promesse qui résoud immédiatement avec la valeur fournie

const p = Promise.reject("prout"); // crée une promesse qui échoue immédiatement avec la valeur fournie

const p = Promise.race([p1, p2]); // crée une promesse qui se termine dès que la promesse la plus rapide se termine

const p = Promise.any([p1, p2]); // crée une promesse qui se résoud dès qu'une promesse est tenue, ou est rejetée quand toutes les promesses sont rejetées
```

#### _La suite: [Fetch](./4-3_fetch.md)_
