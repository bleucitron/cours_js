# Stockage Navigateur

> Stocker de la donnée dans le navigateur

## Cookies

Les cookies servent à communiquer de l'information entre le serveur et le client.

Ils sont stockés côté client, et sont **envoyés à requête vers le serveur**. C'est en général le serveur qui les définit en répondant à une requête avec le header `Set-Cookie`.

Généralement on stocke dans les cookies:
- des infos liées à l'authentification
- des infos de traçage de l'utilisateur (pas bien !)

Vous pouvez stocker dans les cookies environ 4KB de données, sous forme d'une chaîne de caractères.

Il également possible de lire et modifier les cookies côté client, avec [`document.cookie`](https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie).

Lire ou écrire un cookie nécessite de bien comprendre comment ils sont construits.

```js
document.cookie = "name=oeschger; SameSite=None; Secure";
```

## [Webstorage](https://developer.mozilla.org/fr/docs/Web/API/Web_Storage_API)

### [`localStorage`](https://developer.mozilla.org/fr/docs/Web/API/Window/localStorage)

Le `localStorage` permet également de stocker des informations dans le navigateur.

La différence avec les cookies:
- le localstorage n'est pas systématiquement envoyé avec chaque requête
- vous pouvez stocker environ 10MB de données par nom de domaine
- c'est un système de clé/valeur

Le `localStorage`, au même titre que les cookies, sera **supprimé si l'utilisateur purge ses "données navigateur"**.

En général, les informations stockées dans le `localstorage` relèvent de préfèrences utilisateur peu sensibles, ou de brouillons de formulaire, dont l'effacement ne sera pas problématique.

```js
localStorage.setItem('lala', 'bloublou'); // stocke de la donnée stringifiée
const a = localStorage.getItem('lala'); // renvoie de la donnée stringifiée
```

Il est important de comprendre que **les données stockées pour chaque clé sont des strings**. Si vous souhaitez stocker autre chose (des objets par exemple), il est nécessaire de les stringifier avec `JSON.stringify` par exemple, et les parser avec `JSON.parse` lorsqu'on veut les lire.

```js
const o = {
  nom: 'Romain',
  age: 12
}

localStorage.setItem('moi', JSON.stringify(o));
const data = JSON.parse(localStorage.getItem('moi'));
```

### [`sessionStorage`](https://developer.mozilla.org/fr/docs/Web/API/Window/sessionStorage)

Le `sessionStorage` fonctionne de la même façon que le localStorage, sauf que les informations sont purgées à chaque fin de session, c'est-à-dire lorsque l'utilisateur sort du domaine.

## [IndexedDB](https://developer.mozilla.org/fr/docs/Web/API/IndexedDB_API)

Une autre forme de stockage "navigateur" existe.

[IndexedDB](https://developer.mozilla.org/fr/docs/Web/API/IndexedDB_API) permet de stocker beaucoup plus de données. L'espace allouée potentiel est de l'ordre de 50% de la taille de votre disque.

Ce stockage est similaire à une base de donnée orientée objet, fonctionnant sur la base de clés.

Le fonctionnement du stockage peut varier selon les plateformes (comportements différent sur mobiles par exemple).

Les données IndexedDB peuvent également être purgées par l'utilisateur.

---

## À retenir

- Il existe 3 types de stockage navigateur: Cookies, WebStorage, IndexedDB
- Les cookies sont envoyés à chaque requête, les données webStorage et IndexedDB non
- Les données navigateur peuvent être purgées par l'utilisateur

---

## Exercices

- Ouvrir le dossier `/exos/3_browser/3-4_storage`
- Ouvrir le fichier `index.html` dans votre navigateur
- Suivre les indications du fichier `index.js`, et vérifier les résultats dans votre navigateur

---

### _À suivre: [Asynchrone](../4_async/ReadMe.md)_
