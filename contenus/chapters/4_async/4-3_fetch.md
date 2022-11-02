# `fetch`

> Interagir avec le réseau

On va maintenant s'intéresser à **une API purement navigateur qui se sert du concept d'asynchrone: `fetch`**.

> Jusque récemment, NodeJS n'avait pas d'équivalent natif à `fetch`.

La fonction `fetch` permet d'envoyer des requêtes [HTTP](https://developer.mozilla.org/fr/docs/Web/HTTP) au réseau via le navigateur.

```js
fetch('https://www.lemonde.fr') // récupère la page d'accueil du Monde.fr, en pratique ne marche probablement pas à cause des CORS
fetch('https://swapi.dev/api/people/1/') // récupère de la donnée sur Star Wars API
```

> Il est possible de fournir des options à `fetch`.

On peut utiliser `fetch` pour différentes raisons:
- récupérer le contenu d'une page web
- récupérer des données
- mettre à jour des données
- envoyer des messages

Bien sûr, **`fetch` est asynchrone**.

## Lire la réponse de `fetch`

`fetch()` nous renvoie une *réponse HTTP*, un objet complexe qui doit être lu correctement pour s'en servir. La donnée contenue dans une réponse HTTP se lit avec des méthodes qui sont également asynchrones:

- `response.text()` pour lire du texte simple
- `response.json()` pour lire du JSON

**`response.json()` et `response.json()` sont donc des méthodes qui renvoient des Promesses**, et qu'il faut consommer comme tel.

```js
function getLeMonde() {
  return fetch('https://www.lemonde.fr').then(function(response) {
    // réponse HTTP
    return response.text();
  });
}

getLeMonde().then(function(pageContent) {
  console.log(pageContent);
});

async function getStarWarsData() {
  const response = await fetch('https://swapi.dev/api/people/1/'); // réponse HTTP
  const data = await response.json();

  console.log(data);
}

getStarWarsData();
```

---

## Exercices

- Ouvrir le dossier `/exos/4_async/4-3_fetch`
- Ouvrir le fichier `index.html` dans votre navigateur
- Suivre les indications du fichier `index.js`, et vérifier les résultats dans votre navigateur

---

### _À suivre: [`Encore des promesses`](./4-4_more.md)_
