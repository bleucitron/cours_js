# [`fetch`](https://developer.mozilla.org/fr/docs/Web/API/Fetch_API/Using_Fetch)

Faire appel au réseau en Javascript est souvent appelée
[AJAX](https://developer.mozilla.org/fr/docs/Web/Guide/AJAX).

Historiquement, on utilisait la mal-aimée
[XMLHTTPRequest](https://developer.mozilla.org/fr/docs/Web/API/XMLHttpRequest).
Mais cette méthode est extrêmement complexe à utiliser (et est très mal nommée
par ailleurs).

Depuis ES6, une méthode plus sexy est disponible:
**[`fetch`](https://developer.mozilla.org/fr/docs/Web/API/Fetch_API/Using_Fetch)**.

`fetch` permet de requêter le réseau pour obtenir une réponse contenant de la
donnée (une page web, ou autre);

**`fetch()` crée une Promesse d'avoir la réponse HTTP de notre requête**. Et non
pas notre donnée telle quelle.

La donnée que l'on attend est contenue dans le `body` de la réponse. Mais ce
`body` est un flux de données, dont l'accès est par définition asynchrone.

Pour obtenir la donnée que l'on attend à partir de la réponse, on peut utiliser:

- `.text()`: renvoie la donnée sous forme de texte simple
- `.json()`: si la donnée est du JSON, le transforme

```js
fetch("urlVersUnePage")
  .then(function (maReponse) {
    console.log("maReponse", maReponse); // ceci n'est pas ma donnée, mais la réponse HTTP

    return maReponse.json(); // .json() crée une promesse de lire le flux et de l'interprêter comme du JSON
  })
  .then(function (maDonnee) {
    console.log("maDonnee", maDonnee); // ceci est ma donnée
  });
```

#### _La suite: [`async`/`await`](./4-4_async_await.md)_
