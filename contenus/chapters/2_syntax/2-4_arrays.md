# [Tableaux](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

Un tableau est une collection de valeurs.

On peut accéder à l'élément `n` d'un tableau avec `monTableau[n-1]`. Sa longueur
est `monTableau.length`.

```js
const array = [12, 65, "romain", function () {}];

array[0]; // 12
array.length; // 4
```

On peut ajouter un élément à un tableau avec
- `.push()`, pour le mettre à la fin
- `.unshift()`, pour le mettre au début

```js
const array = [1, 2, 3];

array.push(23); // [1, 2, 3, 23]
array.unshift(443); // [443, 1, 2, 3, 23]
```

La valeur pointée par `array` n'est alors pas modifiée (sa position dans l'univers n'a pas changé), même si son "contenu" a changé.

## Itérer sur un tableau

Il y a plusieurs manières d'itérer sur un tableau.

```js
const array = [1, 2, 3];

for (let i = 0; i < array.length; i++) {
  // à l'ancienne
  console.log(array[i]);
}

for (let element of array) {
  // à un poil plus moderne
  console.log(element);
}

array.forEach(function (element) {
  // beaucoup mieux !
  console.log(element);
});
```

En Javascript moderne, on utilise très rarement les boucles `for`. En général on
utilise les méthodes fonctionnelles des tableaux pour itérer.

## Manipuler les tableaux

En Javascript, on aime bien manipuler les tableaux en utilisant l'**écriture
fonctionnelle**.

De manière illustrée, ça donne
[ça](https://twitter.com/steveluscher/status/741089564329054208).

- ### `a.forEach(f)`

**Exécute `f` pour chaque élément de `a`**. Ne renvoie rien.

```js
const array = [1, 2, 3, 4];

array.forEach(function (element, index, arr) {
  // les arguments index et arr sont optionnels
  console.log(element * index);
});

// 0
// 2
// 6
// 12
```

- ### `a.map(f)`

Ici `f` est une fonction qui renvoie quelque chose: `f: element => newElement`.

Exécute `f` pour chaque élément de `a`, et **range dans un nouveau tableau chaque valeur de retour**. Renvoie le nouveau tableau, de même taille. Le tableau original n'est pas modifié.

```js
const array = [1, 2, 3];

const array10 = array.map(function (e, i, a) {
  // les arguments i et a sont optionnels
  return e * 10;
}); // [10, 20, 30]
```

- ### `a.filter(f)`

Ici `f` est une fonction qui renvoie une condition: `f: element => condition`.

Exécute `f` pour chaque élément de `a`, et **range dans un nouveau tableau l'élément seulement s'il satisfait la condition**. Renvoie le nouveau tableau, de même taille. Le tableau original n'est pas modifié.

```js
const array = [1, 2, 3, 4, 5, 6, 7, 8];

const pairs = array.filter(function (e, i, a) {
  // les arguments i et a sont optionnels
  return e % 2 === 0;
}); // [2, 4, 6, 8]
```

- ### `a.find(f)`

Ici `f` est une fonction qui renvoie une condition: `f: element => condition`.

Exécute `f` pour chaque élément de `a`, et s'arrête dès qu'un élément satisfait la condition. **Renvoie le premier élément qui satisfait la condition.**

```js
const array = [1, 2, 3, 4, 5, 6, 7, 8];

const found = array.find(function (e, i, a) {
  // les arguments i et a sont optionnels
  return e >= 4 && e % 4 === 2; // 6
});
```

- ### `a.sort(f)`

Ici `f` est une fonction qui renvoie un nombre: `f: (elementA, elementB) => number`. Si le nombre renvoyé est négatif, il faut inverser l'ordre des 2 valeurs.

Exécute `f` pour chaque paire d'éléments successifs de `a`, et inverse l'ordre des éléments si nécessaire. Renvoie le tableau original trié. **Le tableau original est modifié.**

```js
const found = array.sort(function (a, b) {
  return b - a; // doit retourner un nombre positif ou négatif
});
```

- ### `a.includes(element)`

Renvoie un booléen.

```js
array.includes(2); // true
array.includes(10); // false
```

- ### `a.flat()`

"Applatit" un niveau de profondeur.

```js
const array = [1, 2, [3, [4]]];
const applati = array.flat(); // [1, 2, 3, 4]
```

- ### `a.slice(debut, fin)`

Extrait un morceau du tableau, sans modifier le tableau original

```js
const extrait = array.slice(2, 5); // [3, 4, 5]
```

## À suivre: [Quelques petites choses en plus](./2-5_utils.md)
