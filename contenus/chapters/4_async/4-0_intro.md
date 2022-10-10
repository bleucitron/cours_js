# [Un jour peut-être](https://developer.mozilla.org/fr/docs/Web/API/Fetch_API)

> Comprendre l'asynchrone

## Le concept d'asynchrone

Un code asynchrone permet les opérations asynchrones, qui prennent du temps sans
bloquer l'éxécution de la suite.

C'est une problématique fortement liée au réseau, et à ses fluctuations.

**Javascript donc été conçu pour permettre les opérations asynchrones.**

On peut lancer certaines opérations qui prennent un certain temps, souvent
indéfini, sans bloquer le reste du code.

```js
function rendMoiMonArgent() {
  setTimeout(() => {
    console.log("Tiens, ton argent", 200);
  }, 2); // ... au bout de 2 ans
}

rendMoiMonArgent();
console.log("J'ai besoin de mon argent"); // n'attend pas 2 ans
```

Il est bien important de comprendre que **"Asynchrone", "Parallèle" sont des
concepts différents** ! Javascript est single threadé, donc ne permet pas le
parallélisme.

## Comment reconnaître l'asynchrone ?

La plupart des fonctions en Javascript ne sont pas asynchrones. Certaines le sont, et c'est important de savoir les reconnaître. C'est un peu abstrait au début, mais avec ça vient avec l'expérience.

On en a déjà vu 2: `setTimeout()` et `setInterval()`.

```js
setTimeout(() => {
  console.log("Expecto patronum"); // est exécuté au bout de 1000 ms
}, 1000);

setInterval(() => {
  console.log("On arriiiiive quaaand ?"); // est exécuté toutes les 500 ms
}, 500); //
```

De manière générale, les fonctions asynchrones ont un lien avec:
- le temps
- le réseau
- la lecture et l'écriture de fichiers (important surtout pour NodeJS)

Mais comment faire si j'ai besoin du résultat d'une opération asynchrone ?

## L'enfer des callbacks

Avant l'introduction des Promesses (2015), on utilisait des _callbacks_, des fonctions que l'on passe en argument.

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

---

## À retenir

- Une opération asynchrone ne bloque pas le reste du code
- Javascript permet de faire de l'asynchrone
- Les opérations asynchrones sont souvent liées au temps, au réseau ou au fichiers

---

### _À suivre: [Les Promesses](./4-1_promises.md)_
