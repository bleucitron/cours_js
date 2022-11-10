# Propriétés

_Basé sur [Just Javascript](https://justjavascript.com/), de [Dan Abramov](https://twitter.com/dan_abramov)._

```js
let pikachu = {
  type: 'electric',
  owner: { name: 'sacha' },
};

let salameche = {
  type: 'fire',
  owner: pikachu.owner,
};

salameche.type = 'water';
salameche.owner.name = 'pierre';
```

### _<span style="color:royalblue">D'après vous, que devraient afficher les lignes suivantes ?</span>_

```js
console.log(pikachu.type); // ?
console.log(pikachu.owner.name); // ?
console.log(salameche.type); // ?
console.log(salameche.owner.name); // ?
```

## Les propriétés sont des câbles

Comme les variables, **elles pointent vers des valeurs**, jamais vers des variables, ou vers d'autres propriétés.

Mais ce ne sont pas des variables.

```js
let evoli = {};

let pikachu = {
  type: 'electric',
  attack: 40,
};
```

À la différence des variables, elles appartiennent à un objet.

Un objet sert à grouper des données qui ont du sens ensemble. Mais **les données ne sont pas dans l'objet**.

Deux propriétés d'un même objet ne peuvent pas avoir le même nom.

Il y a donc 2 types de câbles:

- les variables, qui partent du code
- les propriétés, qui partent d'un objet

## Lire une propriété

Il faut se servir du nom de la propriété.
On peut utiliser le `.`, ou les `[]`.

```js
console.log(pikachu.attack); // 40
console.log(pikachu['attack']); // 40
```

Dans les 2 cas, il s'agit d'expressions de propriété.

On peut se servir des crochets pour trouver le nom de la propriété via une expression.

```js
let x = 'ty' + 'pe';
console.log(pikachu[x]); // electric
```

## Assigner une propriété

Comme pour les variables, il s'agit de changer la direction vers laquelle pointe la propriété.

```js
pikachu.attack = 50;
```

## Propriétés manquantes

Que se passe t'il si on essaie de lire une propriété qui n'existe pas sur un objet ?

```js
let pikachu = {
  type: 'electric',
  attack: 40,
};

console.log(pikachu.color); // ?
```

**Règles pour les expressions de propriété:**

- Vérifier la value à gauche du `.`
- Si cette valeur est `null` ou `undefined`, lever une exception
- Vérifier si la propriété à droite du `.` existe sur l'objet
  - si oui, répondre la valeur pointée
  - si non, répondre `undefined`

```js
console.log(pikachu.color); // undefined
```

⚠ Ça ne veut pas dire que `pikachu` a une propriété `color` qui pointe vers `undefined`.

```js
console.log(pikachu.friend.name); // ?
```

## Mutations

```js
let pikachu = {
  type: 'electric',
  owner: { name: 'sacha' },
};

let salameche = {
  type: 'fire',
  owner: pikachu.owner,
};

salameche.type = 'water';
salameche.owner.name = 'pierre';
```

### _<span style="color:royalblue">Dessiner ce que vous imaginez qu'il se passe dans les lignes précédentes</span>_

⚠ Les objets ne sont jamais "inclus" (ou "nestés").

**Muter un objet**, c'est changer la direction d'un ou plusieurs de ses câbles.

Muter un objet ajoute généralement de la confusion, car si l'objet en question est utilisé ailleurs, la mutation peut avoir des répercussions imprévues.

**Il faut donc faire attention lors que l'on mute un objet.**

Deux solutions:

- muter un objet moins sensible
- ne pas muter du tout

```js
let pikachu = {
  type: 'electric',
  owner: { name: 'sacha' },
};

let salameche = {
  type: 'fire',
  owner: pikachu.owner,
};

salameche.type = 'water';
salameche.owner = { name: 'pierre' };
```

```js
let pikachu = {
  type: 'electric',
  owner: { name: 'sacha' },
};

let salameche = {
  type: 'fire',
  owner: pikachu.owner,
};

salameche = {
  type: 'water',
  owner: { name: 'pierre' },
};
```

Au final, tout n'est qu'une histoire de câbles.

---

# _**À vos crayons !!!**_

- Faire les exercices du fichier [`/exos/2-5_properties.md`](../../../exos/2-5_properties.md)

---

#### _La suite: [La navigateur](../3_browser/ReadMe.md)_
