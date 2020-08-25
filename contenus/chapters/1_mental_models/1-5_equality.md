# Égalité(s) des valeurs

_Basé sur [Just Javascript](https://justjavascript.com/), de [Dan Abramov](https://twitter.com/dan_abramov)._

On va maintenant s'intéresser à comment comparer différentes valeurs.

Un modèle mental solide est primordial pour ne pas se perdre dans les égalités en Javascript.

## Types d'égalité

En Javascript, il y a **3 types d'égalité**.

- Égalité stricte `a === b`
- Égalité partielle `a == b`
- Égalité de même valeur `Object.is(a, b)`

## Égalité de même valeur

```js
console.log(Object.is(2, 2)); // true
console.log(Object.is({}, {})); // false
```

### _<span style="color:royalblue">Que pensez-vous du code suivant ?</span>_

```js
let dwarves = 7;
let continents = '7';
let worldWonders = 3 + 4;

console.log(Object.is(dwarves, continents)); // ?
console.log(Object.is(continents, worldWonders)); // ?
console.log(Object.is(worldWonders, dwarves)); // ?
```

Dans notre modèle mental, si deux valeurs sont représentée par le même dessin, elles ne sont qu'une seule et même valeur.

Et inversement.

**La même valeur ne peut pas apparaître 2 fois dans notre modèle mental.**

Cela marche de la même façon pour les objets.

```js
let banana = {};
let cherry = banana;
let chocolate = cherry;
cherry = {};

console.log(Object.is(banana, cherry)); // ?
console.log(Object.is(cherry, chocolate)); // ?
console.log(Object.is(chocolate, banana)); // ?
```

## Égalité stricte

```js
console.log(2 === 2); // true
console.log({} === {}); // false

console.log(2 !== 3); // true
console.log({} !== {}); // true
```

Dans la plupart des cas, `===` est équivalent à `Object.is()`.

Mais il y a 2 exceptions:

- `NaN === NaN` est `false`
- `0 === -0` est `true`

### `NaN === NaN`

C'est un choix historique, datant même d'avant Javascript, qu'il faut accepter tel quel.

Pour vérifier si une valeur est `NaN`:

```js
Number.isNaN(x); // surtout pas isNaN(x)
Object.is(x, NaN);
x !== x;
```

### `0 === -0`

Ces deux valeurs sont différentes. `-0` existe dans la théorie des Mathématiques à virgule flottante, pour des raisons pratiques, mais n'a pas de réel intérêt dans la plupart des cas.

### `===` est équivalent à `Object.is()`

En ayant tout de même en tête les 2 exceptions.

## Égalité partielle

Ou ["presque égalité"](https://dorey.github.io/JavaScript-Equality-Table/) ou "égalité abstraite".

Elle compare 2 valeurs après les avoir transformé en un type commun. On peut également dire qu'elle compare la valeur et le type.

```js
console.log([[]] == ''); // true
console.log(true == [1]); // true
console.log(false == [0]); // true
```

**`==` est généralement évité, voire interdit**, car il ajoute de la confusion, et peut amener à des erreurs graves.

> ## Always use `===` unless you have a good reason to use `==`.

#### _La suite: [Propriétés](./1-6_properties.md)_
