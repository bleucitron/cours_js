# [`async`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/async_function) / [`await`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/await)

> Une autre façon de gérer les Promesses

La syntaxe `async` / `await` permet d'écrire du code asynchrone comme s'il était synchrone, c'est-à-dire attendre la résolution d'une Promesse.

```js
const laPromesseDeMaDonnée = fetch('unCertainEndroitSurInternet');
console.log('Ma promesse', laPromesseDeMaDonnée); // ici, on a pas attendu, la donnée n'est pas encore disponible
```

**Pour attendre, il faut créer un contexte d'attente**. C'est-à-dire une fonction `async`, capable d'attendre.

> On peut aussi attendre avec `await` sans fonction `async`, mais ce n'est généralement pas recommandé

```js
async function attendre() {
  // ceci est un contexte d'attente
}
```

**Dans une fonction `async`, on peut attendre une Promesse avec `await`**.

```js
const p = ... // ceci est une Promesse quelconque

async function attendre() {
  const vp = await p; // on attend que la Promesse se résolve, et on récupère sa valeur promise
  console.log('Valeur promise', vp);
}

attendre(); // il faut penser à exécuter la fonction async
```

**⚠ ATTENTION ⚠: la valeur promise ne sera disponible que dans le contexte `async`, pas en dehors**.

## Gérer les erreurs

Si une Promesse est rejetée, on peut réagir au problème avec `catch(e)`.

```js
async function attendre() {
  try {
    // on essaie de voir si ça se passe bien
    const vp = await p;
    console.log('Valeur promise', vp);
  } catch (e) {
    // en fait ça s'est mal passé
    console.log('La raison du problème', e);
  }
}

attendre();
```

---

## À retenir

- `async` / `await` permettent de manipuler des Promesses avec une autre syntaxe, souvent plus simple
- définir une fonction comme `async` permet de pouvoir utiliser `await` pour attendre dans cette fonction
- utiliser `await` bloque l'exécution du code le temps que la Promesse se termine
- pour gérer les erreurs, on utilise `try {} catch {}`
- on peut choisir d'écrire uniquement `.then()`, ou uniquement `async` / `await`, ou mélanger les deux


---

## Exercices

- Ouvrir le dossier `/exos/4_async/4-2_async_await`
- Ouvrir le fichier `index.html` dans votre navigateur
- Suivre les indications du fichier `index.js`, et vérifier les résultats dans votre navigateur

---

### _À suivre: [`fetch`](./4-3_fetch.md)_
