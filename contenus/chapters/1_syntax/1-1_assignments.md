# Assignations de variables

> Créer et manipuler des variables.

On verra plus loin ce que signifie réellement le concept de variable. Pour l'instant, on va considérer qu'**une variable est une étiquette associée à une valeur**.

## Déclarer et assigner

En Javascript, on crée (ou déclare) une variable avec `let` ou `const`.

```js
let b = 2;
const c = 3;
```

Il est possible de déclarer une variable sans l'assigner. Dans ce cas, la variable n'aura "pas de valeur" (`undefined`).

```js
let b; // undefined
```

Une fois une variable déclarée, on peut changer sa valeur en la **réassignant**.

```js
b = 5;
```

On dit qu'**on *initialise une variable* lorsqu'on assigne une variable en même temps qu'on la déclare**.

Il est également possible déclarer plusieurs variables à la fois.

```js
let a = 1, b = 2;
const c = 3, d = 4;
```

## `const` ou `let` ?

La différence entre `let` et `const` est qu'**une variable définie avec `const` ne peut pas être réassignée**.

```js
let a = 2;
const b = 1;

a = 3; // Ok
b = 4; // Error
```

Ça peut sembler inutile ou peu pratique, mais en réalité, en Javascript on réassigne assez peu souvent des variables. Du coup, déclarer avec `let` une variable dont on sait qu'elle ne sera pas réassignée nous fait prendre le risque de la réassigner par erreur.

Une habitude recommandée est d'**utiliser `const` le plus souvent possible**, et de n'utiliser `let` que lorsque nécessaire.

## Ne pas utiliser `var`

Il est également possible d'utiliser le mot clé `var` pour déclarer des variables. Historiquement, c'était d'ailleurs l'unique option.

```js
var a = 1;
```

Néanmoins, `var` s'est révélée problématique, et `let` et `const` ont été introduits en 2015 pour le remplacer.

Aujourd'hui, **il est fortement recommandé de ne jamais utiliser `var`**, et d'utiliser `let` ou `const` à la place.

```js
let b = 2;
const c = 3;
```

`const` et `let` sont "block scoped", `var` est seulement "function scoped", [ce qui peut créer des problèmes](https://stackoverflow.com/questions/750486/javascript-closure-inside-loops-simple-practical-example).

```js
// Function scope

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
// Block scope

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

## `a++`

Parfois, on a besoin de réassigner une variable en lui rajoutant un nombre:

```js
let a = 10;
a = a + 5;
```

Une simplification de syntaxe introduite pas le langage C++ permet de raccourcir:

```js
let a = 10;
a += 5;
```

Ces raccourcis sont aussi possibles pour les autres opérateurs classiques:
```js
let a = 10;
a -= 5; // a = a - 5
a *= 5; // a = a * 5
a /= 5; // a = a / 5
a %= 5; // a = a % 5
```

Pour l'addition et la soustraction, dans le cas où le nombre ajouté est `1`, on peut se contenter de:
```js
let a = 10;
a++; // a += 1
a--; // a -= 1
```

---

## À retenir

- on peut utiliser `const` ou `let` pour déclarer des variables
- une variable déclarée avec `const` ne peut pas être réassignée
- utiliser `const` par défaut
- utiliser `let` quand `const` ne suffit pas
- **ne jamais utiliser `var`**

---

## Exercices

- Ouvrir le dossier `/exos/1_syntax/1-1_assignments`
- Ouvrir le fichier `index.html` dans votre navigateur
- Suivre les indications du fichier `index.js`, et vérifier les résultats dans votre navigateur

---

### _À suivre: [Conditions](./1-2_conditions.md)_
