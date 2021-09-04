# Asynchrone ??

## Principe

Un code asynchrone permet les opérations asynchrones, qui prennent du temps sans
bloquer l'éxécution de la suite.

C'est une problématique fortement liée au réseau, et à ses fluctuations.

**Javascript donc été conçu pour permettre les opérations asynchrones.**

On peut lancer certaines opérations qui prennent un certain temps, souvent
indéfini, sans bloquer le reste du code.

```js
function rendMoiMonArgent(somme) {
  setTimeout(() => {
    console.log("Tiens, ton argent", somme);
  }, 2); // ... au bout de 2 ans
}

rendMoiMonArgent(200);
console.log("J'ai besoin de mon argent"); // n'attend pas 2 ans
```

Il est bien important de comprendre que **"Asynchrone", "Parallèle" sont des
concepts différents** ! Javascript est single threadé, donc ne permet pas le
parallélisme.

Toutefois, l'asynchrone est possible en Javascript grâce à son
[Event loop](https://developer.mozilla.org/fr/docs/Web/JavaScript/EventLoop) des
moteurs Javascript.

## Quelques fonctions asynchrones

```js
setTimeout(() => {
  console.log("Expecto patronum"); // est exécuté au bout de 1000 ms
}, 1000);

setInterval(() => {
  console.log("On arriiiiive quaaand ?"); // est exécuté toutes les 500 ms
}, 500); //

fetch("www.google.com"); // va chercher de l'information sur internet
```

## Callbacks

Mais comment faire si j'ai besoin du résultat d'une opération asynchrone ?

Avant l'introduction des Promesses, on utilisait des _callbacks_, des fonctions
que l'on passe en argument.

```js
function afficheProfil(name) { // on ne peut utiliser le résultat de l'opération asynchrone que dans ce callback
  console.log("Mon nom est", name);
}

vaChercherMonNom(afficheProfil); // on suppose que vaChercherMonNom est asynchrone

console.log("Bonjour");

/*
Bonjour
Mon nom est Jean-jean
*/
```

Mais on tombait vite dans l'enfer des callbacks. Quand il y a trop de callbacks,
parfois imbriqués, il devient difficile de suivre l'enchaînement des exécutions
de callbacks.

C'est la raison de l'apparition des **Promesses**.

#### _La suite: [Promesses](./4-2_promises.md)_
