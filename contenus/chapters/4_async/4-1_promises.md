# Les [Promesses](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise)

Les Promesses permettent de gérer les opérations asynchrones avec une certaine API.

Une fois définie, une Promesse peut avoir 3 états:

- **en attente**: on attend
- **résolue**: la promesse est tenue
- **rejetée**: la promesse est brisée

Une fois une Promesse résolue ou rejetée, elle ne peut plus changer d'état.

## Créer une Promesse

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

> On reparlera bientôt de `fetch`

## Consommer une Promesse

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


---

## À retenir

- une Promesse est un objet spécial qui permet de traiter les opérations asynchrones
- une Promesse peut être *en attente*, *résolue*, ou *rejetée*
- on utilise `.then()` pour traiter une promesse résolue
- on utilise `.catch()` pour traiter une promesse rejetée

---

## Exercices

- Ouvrir le dossier `/exos/4_async/4-1_promises`
- Ouvrir le fichier `index.html` dans votre navigateur
- Suivre les indications du fichier `index.js`, et vérifier les résultats dans votre navigateur

---

### _À suivre: [`async` / `await`](./4-2_async_await.md)_
