# Assignations

Assigner une variable à une valeur signifie que l'on demande à la variable de
"regarder" la valeur. On dit également qu'il y a un câble qui part de la
variable jusqu'à la valeur.

Assigner pour la première fois une variable crée le câble.

Réassigner une variable déplace le bout du câble d'une valeur vers une autre.

- `let a = 1;`
- `a = a + 5;`
  - `a += 5;`
- `a = a + 1;`
  - `a++;`

## Oublier `var`

`const` et `let` sont "block scoped", `var` est "function scoped".

```js
## Function scope

function() {
  const a = 1;
  let b = 2;
  var c = 3;

  console.log(a); // 1
  console.log(b); // 2
  console.log(c); // 3
}

console.log(a); // undefined
console.log(b); // undefined
console.log(c); // undefined
```

```js
## Block scope

if (true) {
  const a = 1;
  let b = 2;
  var c = 3;

  console.log(a); // 1
  console.log(b); // 2
  console.log(c); // 3
}

console.log(a); // undefined
console.log(b); // undefined
console.log(c); // 3
```

## `const` ou `let` ?

Une variable définie avec `const` ne peut pas être réassignée.

```js
const a = 1;
let b = 2;

a = 3; // Error
b = 4; // Ok
```

`const` n'empêche pas de muter ! (et tant mieux)

```js
const romain = { favoriteMovie: "Les Tuche" };

romain.favoriteMovie = "Les Tuche 2";

romain = { favoriteMovie: "Les Tuche 3" }; // Error
```

## À retenir

**Ne jamais utiliser `var`.**

## À suivre: [Boucles et conditions](./2-2_loops.md)
