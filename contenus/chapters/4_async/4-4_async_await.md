# [`async`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/async_function) / [`await`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/await)

La syntaxe `async` / `await` permet d'écrire du code asynchrone comme s'il était
synchrone, c'est-à-dire attendre la résolution d'une Promesse.

```js
const laPromesseDeMaDonnée = fetch("unCertainEndroitSurInternet");
console.log("Ma promesse", laPromesseDeMaDonnée); // ici, on a pas attendu, la donnée n'est pas encore disponible
```

**Pour attendre, il faut créer un contexte d'attente**. C'est-à-dire une
fonction `async`, capable d'attendre.

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

**⚠ ATTENTION ⚠: la valeur promise ne sera disponible que dans le contexte
`async`, pas en dehors**.

Si une Promesse est rejetée, on peut réagir au problème avec `catch(e)`.

```js
async function attendre() {
  try {
    // on essaie de voir si ça se passe bien
    const vp = await p;
    console.log("Valeur promise", vp);
  } catch (e) {
    // en fait ça s'est mal passé
    console.log("La raison du problème", e);
  }
}

attendre();
```

Les deux écritures, "classique" et avec `async`/`await` sont compatibles entre
elles. Il faut être à l'aise avec l'une et l'autre pour tirer profit de chacun
de leurs avantages.

# _**À vos claviers !!!**_

- Ouvrir le dossier `/exos/4_async`
- Ouvrir le fichier `index.html` dans votre navigateur
- Suivre les indications du fichier `index.js`, et vérifier les résultats dans
  votre navigateur

#### _La suite: [ES Next](./5_esnext/5-1_index.md)_
