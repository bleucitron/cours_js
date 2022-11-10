# [ES6+](https://kangax.github.io/compat-table/es2016plus/)

## ES6 (2015)

- ### [`const`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/const), [`let`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/let)
  `const` et `let` sont **block-scoped**.

```js
const a = 1;
a = 2; // Error, assignment to constant variable

let b = 1;
b = 2; // ok
```

- ### Function default parameters

```js
function (a, b = 0){}
```

- ### [Arrow functions](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Fonctions/Fonctions_fl%C3%A9ch%C3%A9es)

```js
() => 1; // les parenthèses sont nécessaires quand il n'y a pas d'argument

a => a + 1; // les parenthèses sont optionnelles quand il y a 1 seul argument

(a, b) => a + b; // les parenthèses sont nécessaires quand il y a plusieurs arguments

a => {
  // avec un corps de fonction
  console.log('Coucou');
  return a + 1;
};

a => ({
  // retourne un objet
  a: a + 1,
});
```

- ### [Destructuring](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/Affecter_par_d%C3%A9composition)

```js
const o = { a: 1, b: 2 };

const { a, b } = o; // a <= 1, b <= 2
const { a, b: c } = o; // a <= 1, c <= 2

const l = [1, 2];

const [a, b] = l; // a <= 1, b <= 2
```

- ### Rest, spread syntax for iterables

```js
const l = [1, 2, 3];

const [a, ...leReste] = l; // a <= 1, leReste <= [2, 3]

const l2 = [...l]; // crée une copie de l
const l3 = [...l, ...l2]; // fusionne 2 listes
```

- ### [`for...of` loops](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/for...of)

- ### [Template literals](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Litt%C3%A9raux_gabarits)

```js
const s = 1;

console.log(`Ceci est une string avec une variable: ${s + 2}`);
```

- ### [`Map`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Map), [`Set`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set), [`WeakMap`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/WeakMap), [`WeakSet`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/WeakSet)

- ### [`Promise`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise)

- ### [Classes](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Classes)

Les `class` sont des fonctions en toile de fond, qui cherchent à mimer les classes de la Programmation Orientée Objet.

```js
class MyClass() {
  constructor() {}

  mymethod() {}
}
```

- ### String methods

```js
const str = 'La la la lalalala lalalala Hey Jude !';

str.repeat(2); // La la la lalalala lalalala Hey Jude ! La la la lalalala lalalala Hey Jude !
str.startsWith('La'); // true
str.endsWith('!'); // true
```

- ### Array methods

```js
const arr = [1, 2, 3, 4];

Array.from(new Set(arr)); // renvoie une liste à partir d'un iterable

arr.find(e => e === 2); // 2
arr.findIndex(e => e === 2); // 1
arr.fill(0, 2, 4); // [1, 2, 0, 0]
```

- ### Number methods

```js
Number.isNaN(NaN); // true
Number.isNaN(undefined); // false
```

## ES2016

- ### [Exponentiation operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Exponentiation)

```js
2 ** 4; // 16
```

- ### [`Array.prototype.includes()`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/includes)

```js
[1, 2, 3, 4].includes(3); // true
```

## ES2017

- ### Object static methods

```js
const o = { a: 1, b: 2 };

Object.values(o); // [1, 2]
Object.entries(o); // [['a', 1], ['b', 2]]
```

- ### String padding

```js
const s = '1';

s.padStart(5, '0'); // '00001'
s.padEnd(5, '0'); // '10000'
```

- ### [Trailing commas](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Virgules_finales)

```js
{
  a: 1,
  b: 2,
}

[
  1,
  2,
]

function f(arg1, ){ }
```

- ### [`async`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/async_function) / [`await`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/await)

```js
async function() {
  const a = await ...; // bloquant
  console.log('Prout');
}
```

## ES2018

- ### Object rest, spread operators

```js
const o = { a: 1, b: 2, c: 3, d: 4 };

const { a, b, ...rest } = o;

// a => 1
// a => 2
// rest => {c: 3, d:4}

const o2 = { ...o }; // copie de o
const o3 = { ...o, e: 5 }; // {a:1, b:2, c:3, d:4, e:5}
```

- ### [`Promise.finally()`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise/finally)

Passe dans le `finally()` quelque soit le devenir de la promesse.

## ES2019

- ### Strings

```js
'    a   '.trimLeft(); // 'a   '
'    a   '.trimRight(); // '    a'
```

- ### [`Object.fromEntries()`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object/fromEntries)

```js
Object.fromEntries([
  ['a', 1],
  ['b', 2],
]); // {a:1, b:2}
```

- ### [`Array.prototype.flat()`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/flat)

```js
const l = [[1, 2], [3]];

l.flat(); // [1, 2, 3]
```

## ES2020

- ### [BigInt](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/BigInt)

- ### [Optional chaining](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/Optional_chaining)

Permet de récupérer un champ d'un objet potentiellement non défini ou null.
Permet d'éxecuter une fonction potentiellement non définie ou nulle.

```js
a == null ? undefined : a.b;
a?.b; // undefined si `a` est null/undefined, `a.b` sinon.

a == null ? undefined : a[x];
a?.[x]; // undefined si `a` est null/undefined, `a[x]` sinon.

a == null ? undefined : a.b(); // jette une erreur si `a.b` n'est pas une fonction
a?.b(); // undefined si `a` est null/undefined, sinon exécute `a.b()`

a == null ? undefined : a(); // jette une erreur si `a.b` n'est pas une fonction ni null/undefined
a?.(); // undefined si `a` est null/undefined, sinon exécute a
```

- ### [Nullish coalescing](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/Nullish_coalescing_operator)

Ternaire simplifié dans le cas d'un `null`/`undefined` potentiel.

```js
const a = b || 1; // avant on faisait ça
const a = b ?? 1; // renvoie 1 si b est null ou undefined, b sinon
```

- ### [`Promise.allSettled()`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise/allSettled)

Récupère les valeurs résolues ET les raisons de rejet des promesses fournies.

```js
Promise.allSettled([p1, p2]).then(res => {
  const [res1, res2] = res;

  console.log(res1); // {status: 'fulfilled', value: 'laValeurPromise'}
  console.log(res2); // {status: 'rejected', value: 'laRaisonDuRejet'}
});
```

## ES2021

- ### Logical separators

```js
1_000_000_000; // au lieu de 1000000000
```

- ### [`Promise.any()`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise/any)

Renvoie la première promesse tenue d'une liste.

```js
Promise.any([p1, p2, p3]).then(r2 => {
  console.log(r2); // p2 est la première promesse tenue, on oublie les autres
});
```

- ### Logical assignments

```js
x || = 10 // on assigne à 10 seulement si x est falsy
x && = 10 // on assigne à 10 seulement si x est truthy
```
