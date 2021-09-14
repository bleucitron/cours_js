# Boucles et conditions

## Comparer des valeurs

Les opérateurs de comparaison permettent de comparer des valeurs, et **renvoient
un booléen**.

```js
// supérieur
x > 1;
x >= 1;

// inférieur
x < 1;
x <= 1;

// égal
x === 1;
x !== 1;
```

Il est également possible d'inverser des valeurs booléennes, avec `!`.

```js
const x = 3;

const isPositive = x >= 0; // true
const isNegative = !isPositive; // false
```

## "Falsy"

En Javascript, certaines valeurs sont "falsy", c'est-à-dire considérées comme
fausses même si elles ne sont pas forcément égales à `false`.

```js
false
0
NaN
'' (chaîne vide)
null
undefined
```

Toutes les autres valeurs sont "truthy".

Les valeurs `falsy` ne sont pas fausses.

```js
0 === false // false
NaN === false // false
```

Inverser une valeur "falsy" renvoie `true`, inverser une valeur "truthy" renvoie
`false`.

```js
!NaN; // true
!null; // true
!undefined; // true

!1; // false
!{}; // false
![]; // false
```

## [Conditions](https://dorey.github.io/JavaScript-Equality-Table/)

Les conditions permettent d'exécuter du code particulier seulement dans certains
cas.

```js
if (x === 1) {
  // x vaut 1
} else if (x === 2) {
  // x ne vaut pas 1 et vaut 2
} else {
  // x ne vaut ni 1 ni 2
}
```

Le code d'un `if` ne s'exécutera que si la condition associée est "truthy".

```js
if (maCondition) {
  // ne s'exécute que si maCondition est truthy
}
```

## [Boucles](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/for)

On peut exécuter plusieurs fois le même code en bouclant. À chaque itération de
la boucle, la valeur de l'indice va évoluer en fonction de notre instruction,
jusqu'à ce que la condition soit vérifiée.

```js
// tant que i est strictement plus petit que 10, on recommence au augmentant de 1 la valeur de i
for (let i = 1; i < 10; i++) {
  console.log("COUCOU", i);
}

// tant que i est strictement positif, on recommence en diminuant de 1 la valeur de i
for (let i = 10; i > 0; i--) {
  console.log("COUCOU", i);
}

// tant que i est strictement positif, on recommence en diminuant de 2 la valeur de i
for (let i = 10; i > 0; i = i - 2) {
  console.log("COUCOU", i);
}
```

Très souvent, **on préfère utiliser la syntaxe fonctionnelle des tableaux pour
boucler**.

## À suivre: [Fonctions](./2-3_functions.md)
