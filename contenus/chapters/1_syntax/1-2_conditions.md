# Conditions

> Différencier notre logique selon les cas

Il est souvent nécessaire d'exécuter des instructions différentes selon certaines conditions particulières.

Pour cela, il faut être capable de comparer des valeurs.

## Comparer des valeurs

Les opérateurs de comparaison permettent de comparer des valeurs, et **renvoient
un booléen**.

> Un booléen est une valeur représentant "vrai" (`true`) ou "faux" (`false`).

```js
const x = 2

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

> Comparer des *strings* se fait selon l'ordre alphanumérique.

Il est également possible d'inverser des valeurs booléennes, avec `!`.

```js
const x = 3;

const isPositive = x >= 0; // true
const isNegative = !isPositive; // false
```

## Et / ou

```js
const x = 3;

x > 3 && x < 10 // ET
x > 3 || x > 30 // OU
```

## [Conditions](https://dorey.github.io/JavaScript-Equality-Table/)

Les conditions permettent d'exécuter du code particulier seulement dans certains
cas.

```js
if (age === 1) {
  // age vaut 1
  console.log("J'ai 1 an !");
} else if (age === 2) {
  // x ne vaut pas 1 et vaut 2
  console.log("J'ai 2 ans !");
} else {
  // x ne vaut ni 1 ni 2
  console.log("Je ne sais pas compter plus loin que 2...");
}
```


Le code à l'intérieur d'un block `if` ne s'exécutera que si la condition associée est "vraie".

```js
if (maCondition) {
  // ne s'exécute que si maCondition est vraie
}
```

Si on a besoin que d'une seule instruction, il est également possible d'écrire des conditions sans blocks.

```js
if (age === 1) console.log("J'ai 1 an !");
else if (age === 2) console.log("J'ai 2 ans !");
else console.log("Je ne sais pas compter plus loin que 2...");
```

### "Truthy" vs "Falsy"

En réalité, le code à l'intérieur d'un block `if` ne s'exécutera que si la condition associée est "truthy".

```js
if (maCondition) {
  // ne s'exécute que si maCondition est truthy
}
```

Une valeur "truthy" est une valeur non "falsy". Les valeurs "falsy" sont:
```js
false
0
-0
''
null
undefined
NaN
0n
-0n
```

On utilise le concept de truthy pour raccourcir la syntaxe lorsque l'on veut s'assurer qu'une valeur "existe":

```js
if (x !== null && x !== undefined) {}
// s'écrit souvent:
if (x) {}
```

## Opérateur ternaire

On a souvent besoin de définir une variable en fonction d'une condition.

```js
let name;

if (isSpanish) {
  name = 'Roberto';
} else {
  name = 'Robert';
}
```

Plutôt que de passer par l'opérateur `if`, on peut utiliser l'opérateur ternaire.

```js
const name = isSpanish ? 'Roberto' : 'Robert';
```

> Dans ce cas, puisque je ne réassigne pas `name`, je peux utiliser `const`.

---

## À retenir

- comparer 2 valeurs renvoie un booléen `true` ou `false`
- on peut comparer des strings
- pour exécuter du code conditionnel, utiliser `if`, `else if`, `else`
- on peut utiliser tirer profit de la propriété "truthy" d'une valeur
- les ternaires permettent les assignations conditionnelles

---

## Exercices

- Ouvrir le dossier `/exos/1_syntax/1-2_conditions`
- Ouvrir le fichier `index.html` dans votre navigateur
- Suivre les indications du fichier `index.js`, et vérifier les résultats dans votre navigateur

---

### _À suivre: [Boucles](./1-3_loops.md)_
