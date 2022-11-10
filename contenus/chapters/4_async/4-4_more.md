# Encore des Promesses

> Devenir un pro des Promesses

## Chaînage

Une Promesse est un _thenable_, c'est-à-dire qu'on peut écrire `.then()` ou `.catch()` derrière. Mais `p.then()` ou `p.catch()` sont également eux-mêmes des Promesse. On peut donc chaîner les Promesses.

`p.then().then().catch().then()...`

**La valeur promise de `p.then()` est la valeur retournée par le callback du `.then()`**... Cela vaut également pour `.catch()`.

> ... et pareil si on allonge la chaîne.

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

## Synchroniser

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
- `Promise.allSettled()`, crée la promesse d'avoir toutes les promesses **terminées**

```js
Promise.all([promesse1, promesse2]).then(function (tableauDesResultats) {
  console.log(tableauDesResultats); // [resultat1, resultat2]
});

Promise.allSettled([promesse1, promesse2]).then(function (tableauDesResultats) {
  console.log(tableauDesResultats); // [resultat1, resultat2]
});
```

---

## À retenir

- les Promesses peuvent être chaînées
- on utilise `Promise.all()` ou `Promise.allSettled()` pour synchroniser plusieurs Promesses

---

## Exercices

- Ouvrir le dossier `/exos/4_async/4-4_more`
- Ouvrir le fichier `index.html` dans votre navigateur
- Suivre les indications du fichier `index.js`, et vérifier les résultats dans votre navigateur

---

### _À suivre: [JS moderne](../5_modern_js/ReadMe.md)_
