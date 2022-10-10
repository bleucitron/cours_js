# Combien de valeurs ?

_Basé sur [Just Javascript](https://justjavascript.com/), de [Dan Abramov](https://twitter.com/dan_abramov)._

Compter les valeurs n'a pas d'intérêt en soi.

En revanche, l'exercice permet de réfléchir à ce qui distingue les valeurs entre elles, et donc de commencer à aborder la notion d'égalité, si particulière en Javascript.

- Undefined
- Null
- Booléens
- Nombres
- Strings
- Symbols
- BigInt
- Objets
- Functions

## Undefined

`undefined`

```js
console.log(typeof undefined); // 'undefined'
```

`undefined` est l'unique valeur de type `'undefined'`.

Elle représente l'absence accidentelle de valeur, mais c'est bien une valeur en elle-même.

On peut écrire explicitement `undefined`, comme `undefined` peut apparaître naturellement.

```js
let a;
console.log(a); // undefined

let b = 1;
b = undefined;
console.log(b); // undefined
```

⚠ Malgré son nom, `undefined` ne signifie pas qu'une variable n'est pas définie, mais qu'elle n'a pas de valeur.

```js
console.log(a); // ReferenceError
let a;
```

## Null

`null`

`null` est l'unique valeur de type `'null'`.

Dan Abramov parle de la "petite soeur" d'`undefined`, car elle fonctionne de manière très similaire.

⚠ Dû à un bug historique, `null` se prend pour un objet.

```js
console.log(typeof null); // 'object'
```

Mais `null` n'est pas un objet.

`null` est `null`.

Elle représente l'absence intentionnelle de valeur.

À la différence d'`undefined`, `null` n'apparaît jamais naturellement.

On peut voir `undefined` comme la conséquence d'une erreur de code, et `null` comme une "vraie" absence de valeur.

Il s'agit toutefois d'une convention.

## Booléen

`true` / `false`

```js
console.log(typeof true); // 'boolean'
console.log(typeof false); // 'boolean'
```

Blanc / Noir.

Les booléens servent à faire des opérations logiques.

On peut écrire l'inverse d'un booléen avec `!a`.

```js
let happy = true;
let sad = !happy;
```

### Falsy values

Les "falsy" values sont équivalentes à `false` dans les contextes booléens (en gros, dans les `if`):

```js
if (false)
if (null)
if (undefined)
if (0)
if (-0)
if (0n)
if (-0n)
if (NaN)
if ("")
```

Tout ce qui n'est pas "falsy" est "truthy".

```js
if ('') {
  console.log('String vide'); // non exécutée
}
if (3) {
  console.log('Le nombre trois'); // exécutée
}
```

On peut transformer une valeur en "vrai" booléen avec `!!`:

```js
const a = !!null; // false
const b = !!4; // true
```

## Nombre

`1`, `2`, `2.5`, `2.75`, ... `3`

(et tous les autres...)

```js
console.log(typeof 1); // 'number'
console.log(typeof -2.75); // 'number'
```

Tout type de nombre est représenté par le type `'number'`.

Il y en a 18 437 736 874 454 812 624.

```js
console.log(0.1 + 0.2 === 0.3); // ??
```

Ce "problème" n'est pas lié à Javascript, mais à l'impossibilité physique de représenter l'infinité des nombres mathématiques.

Les ordinateurs utilisent donc les [Maths à virgule flottante](https://fr.wikipedia.org/wiki/Virgule_flottante).

Plus on est proche de zéro, plus on peut être précis.

Et tous les entiers sont exacts jusqu'à `Number.MAX_SAFE_INTEGER`.

```js
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MAX_SAFE_INTEGER + 1); // 9007199254740992
console.log(Number.MAX_SAFE_INTEGER + 2); // 9007199254740992
```

### Nombres spéciaux

```js
let scale = 0;
let a = 1 / scale; // Infinity
let b = 0 / scale; // NaN
let c = -a; // -Infinity
let d = 1 / c; // -0
```

`NaN` , ou _Not A Number_, représente le résultat d'une opération mathématique impossible, mais est bien un `'number'`, malgré son nom.

Une `'string'` n'est pas `NaN`, un `'object'` n'est pas `NaN`...

## BigInt

`12312n`

C'est un type récent, qui sert à représenter des entiers très grands.

```js
console.log(typeof 1n); // 'bigint'
```

On peut alors calculer précisement des entiers plus grands qu'avec des `'number'`, ce qui sert surtout en finance.

```js
let alot = 9007199254740991n;
console.log(alot + 1n); // 9007199254740992n
console.log(alot + 2n); // 9007199254740993n
```

Théoriquement, il y a autant de `'bigint'` que d'entiers.

Dans la vraie vie, on peut très bien se contenter de `'number'`.

## String

`coucou`

```js
console.log(typeof 'romain'); // 'string'
console.log(typeof ''); // 'string'
```

> On peut définir des strings avec `'` ou `"`.

Le type `'string'` représente du texte, quel que soit sa taille.

Il y a potentiellement autant de `'string'` que de textes possibles. Dans notre univers, on va considérer que c'est le cas.

Les strings ne sont pas des objets, même si on en a parfois l'impression.


```js
let hey = 'Salut';
hey[0]; // 'S'
hey[3]; // 'u'
hey.toLowerCase(); // 'salut'
hey.toUpperCase(); // 'SALUT'
...
```

## Symbole

`Symbol(1)`

```js
console.log(typeof Symbol()); // 'symbol'
```

Trop abstrait, sort du cadre de ce cours.

## Objet

`{}`

```js
console.log(typeof {}); // 'object'
console.log(typeof []); // 'object'
console.log(typeof new Date()); // 'object'
```

La plupart des valeurs non-primitives sont de type `'object'`.

### Les objets sont mutables

On peut les modifier depuis notre code.

Les objets ont des _propriétés_, auxquelles on peut accéder avec `[]` ou `.`:

```js
let rapper = { name: 'Michel' };
rapper.name = 'Mike'; // Dot notation
rapper['name'] = 'Mitch'; // Bracket notation
```

_On reparlera des propriétés plus tard._

### On peut créer des objets

À la différence des valeurs primitives, **les objets peuvent être créés de toutes pièces.** Une nouvelle valeur est créée à chaque nouvel objet.

```js
let luke = {}; // une valeur
let leia = {}; // une valeur différente
```

Cela vaut pour tous les listes, dates... qui sont aussi des objets.

### On ne peut pas détruire des objets

Les moteurs Javascript ont un "garbage collector". Ou "ramasse-miettes".

Il s'occupe tout seul de la gestion de sa mémoire interne.

Si un objet n'a plus de câble qui le retient à notre planète, il finira par être détruit.

```js
let evier = {};
evier = null;
```

## Fonction

`function () {}`

```js
console.log(typeof function () {}); // 'function'
```

Les fonctions contiennent du code, mais sont des valeurs à part entière, au même titre que les objets.

Elles sont un peu comme des lunes autour de notre planète.

De même que pour les objets, on peut créer des valeurs de type `'function'`, mais pas les détruire.

### Exécuter une fonction

```js
let makeCake = function () {
  return 'chocolate pie';
};

let cake = makeCake; // la fonction n'est pas exécutée
console.log(cake);

let pie = makeCake(); // la fonction est exécutée
console.log(pie);
```

`makeCake` est une expression, qui pointe vers la valeur fonction.

`makeCake()` est une expression, qui demande la valeur renvoyée par l'éxecution de la fonction vers laquelle pointe `makeCake`.

## En bref

**Le nombre de valeurs primitives est fixé**, et sera toujours le même quel que soit notre code.

**Le nombre de valeurs objets ou fonctions varie** au cours du temps, selon que votre code en crée, ou que le ramasse-miette en détruit.

#### _La suite: [Égalité(s) des valeurs](./2-4_equality.md)_
